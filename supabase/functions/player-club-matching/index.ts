import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import {
  corsHeaders,
  getSupabaseClient,
  getAuthenticatedUser,
  validateRateLimit,
  callLovableAI,
  parseAIResponse,
  createErrorResponse,
  createSuccessResponse,
} from "../_shared/utils.ts";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Authenticate user
    const authHeader = req.headers.get("Authorization");
    const token = getAuthenticatedUser(authHeader);
    const supabase = getSupabaseClient(authHeader!);

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser(token);

    if (userError || !user) {
      return createErrorResponse("Unauthorized", 401);
    }

    // Rate limiting
    const rateLimit = await validateRateLimit(
      supabase,
      user.id,
      "player-club-matching",
      20
    );

    if (!rateLimit.allowed) {
      return createErrorResponse(
        `Rate limit exceeded. Maximum 20 matching requests per day.`,
        429
      );
    }

    const { playerProfile, analysisData, preferences, playerId, videoAnalysisId } =
      await req.json();

    if (!playerProfile || !analysisData) {
      return createErrorResponse(
        "Missing required fields: playerProfile and analysisData",
        400
      );
    }

    // Fetch clubs from database
    const { data: clubs, error: clubsError } = await supabase
      .from("clubs")
      .select("*")
      .order("reputation", { ascending: false });

    if (clubsError) {
      console.error("Error fetching clubs:", clubsError);
      return createErrorResponse("Failed to fetch clubs", 500);
    }

    if (!clubs || clubs.length === 0) {
      return createErrorResponse("No clubs available for matching", 404);
    }

    if (!clubs || clubs.length === 0) {
      return createErrorResponse("No clubs available for matching", 404);
    }

    const systemPrompt = `You are an expert football agent and career advisor who specializes in matching young players with suitable clubs. Analyze player profiles and club requirements to find optimal matches.

Given a player profile and available clubs, provide detailed matching analysis in this JSON structure:
{
  "matches": [
    {
      "club_id": "<club id>",
      "club_name": "<club name>",
      "match_score": <1-100>,
      "match_grade": "<A+/A/B+/B/C/D>",
      "position_fit": "<Primary/Secondary/Adaptable>",
      "style_compatibility": "<Excellent/Good/Fair/Poor>",
      "development_opportunity": "<Exceptional/Strong/Moderate/Limited>",
      "reasons": [
        "<reason 1 why this is a good match>",
        "<reason 2>",
        "<reason 3>"
      ],
      "concerns": [
        "<potential concern or challenge>"
      ],
      "recommendation": "<2-3 sentence specific recommendation>",
      "pathway_to_first_team": "<description of typical development path at this club>",
      "competition_level": "<Low/Medium/High - current competition for position>"
    }
  ],
  "overall_assessment": {
    "market_readiness": "<Ready Now/6 Months/12 Months/18+ Months>",
    "recommended_level": "<Elite/Top Division/Championship/Development>",
    "career_advice": "<3-4 sentences of personalized career guidance>",
    "next_steps": ["<action 1>", "<action 2>", "<action 3>"]
  },
  "top_recommendation": {
    "club_id": "<best match club id>",
    "confidence": "<High/Medium/Low>",
    "explanation": "<detailed 3-4 sentence explanation of why this is the best fit>"
  }
}

Rank all provided clubs by match score. Be realistic and consider both player development and club needs.`;

    const userPrompt = `Match this player with suitable clubs:

Player Profile:
${JSON.stringify(playerProfile, null, 2)}

Video Analysis Results:
${JSON.stringify(analysisData, null, 2)}

Player Preferences:
${JSON.stringify(preferences || {}, null, 2)}

Available Clubs:
${JSON.stringify(clubs, null, 2)}

Analyze and rank all clubs by suitability. Return ONLY valid JSON.`;

    console.log("Running player-club matching...");

    const response = await callLovableAI([
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ]);

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      return createErrorResponse("No content in AI response", 500);
    }

    const matchingResults = parseAIResponse(content);

    // Add club details to matches
    matchingResults.matches = matchingResults.matches.map((match: any) => {
      const clubDetails = clubs.find((c) => c.id === match.club_id);
      return {
        ...match,
        club_details: clubDetails || null,
      };
    });

    // Save top matches to database
    if (matchingResults.matches && matchingResults.matches.length > 0) {
      const topMatches = matchingResults.matches.slice(0, 5); // Save top 5
      const matchRecords = topMatches.map((match: any) => ({
        user_id: user.id,
        player_id: playerId || null,
        club_id: match.club_id,
        video_analysis_id: videoAnalysisId || null,
        match_score: match.match_score,
        match_grade: match.match_grade,
        matching_data: match,
        status: "pending",
      }));

      const { error: saveError } = await supabase
        .from("club_matches")
        .insert(matchRecords);

      if (saveError) {
        console.error("Error saving matches:", saveError);
        // Continue even if save fails
      }
    }

    console.log("Matching complete:", {
      matches_count: matchingResults.matches?.length,
      top_match: matchingResults.top_recommendation?.club_id,
    });

    return createSuccessResponse(matchingResults);
  } catch (error) {
    console.error("player-club-matching error:", error);
    return createErrorResponse(error as Error);
  }
});
