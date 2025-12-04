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
      "generate-scouting-report",
      30
    );

    if (!rateLimit.allowed) {
      return createErrorResponse(
        `Rate limit exceeded. Maximum 30 reports per day.`,
        429
      );
    }

    const { playerData, analysisData, videoAnalysisId, playerId } = await req.json();

    if (!playerData || !analysisData) {
      return createErrorResponse(
        "Missing required fields: playerData and analysisData",
        400
      );
    }

    const systemPrompt = `You are a senior football scout at a top European club preparing an official scouting report. Generate professional, detailed reports suitable for presentation to club directors and technical staff.

Create a comprehensive scouting report in this EXACT JSON structure:
{
  "report_id": "<generated UUID-like string>",
  "report_date": "<current date YYYY-MM-DD>",
  "scout_classification": "<A+/A/B+/B/C - based on overall potential>",
  
  "player_profile": {
    "name": "<player name>",
    "age": <age>,
    "position": "<primary position>",
    "secondary_positions": ["<pos1>", "<pos2>"],
    "preferred_foot": "<Right/Left/Both>",
    "height_cm": <height>,
    "nationality": "<nationality if provided>"
  },
  
  "executive_summary": "<3-4 sentence high-level summary for directors>",
  
  "technical_assessment": {
    "grade": "<A-F>",
    "summary": "<2-3 sentences>",
    "key_strengths": ["<str1>", "<str2>"],
    "areas_for_development": ["<area1>", "<area2>"]
  },
  
  "physical_assessment": {
    "grade": "<A-F>",
    "summary": "<2-3 sentences>",
    "physical_profile": "<Power/Agile/Athletic/Developing>",
    "injury_risk": "<Low/Medium/High>"
  },
  
  "tactical_assessment": {
    "grade": "<A-F>",
    "summary": "<2-3 sentences>",
    "best_role": "<specific tactical role>",
    "tactical_flexibility": "<High/Medium/Low>",
    "systems_suited": ["<4-3-3>", "<4-2-3-1>"]
  },
  
  "mental_assessment": {
    "grade": "<A-F>",
    "summary": "<2-3 sentences>",
    "leadership_potential": "<High/Medium/Low>",
    "pressure_handling": "<Excellent/Good/Average/Needs Work>"
  },
  
  "performance_data": {
    "matches_analyzed": <number>,
    "overall_rating": <1-100>,
    "potential_rating": <1-100>,
    "key_statistics": {
      "pass_completion": "<percentage>",
      "duels_won": "<percentage>",
      "chances_created_per_90": <number>,
      "defensive_actions_per_90": <number>
    }
  },
  
  "comparison_analysis": {
    "similar_players": [
      {
        "name": "<pro player name>",
        "similarity": "<percentage>",
        "comparison_notes": "<1-2 sentences>"
      }
    ],
    "ceiling_comparison": "<best case pro player comparison>",
    "floor_comparison": "<worst case comparison>"
  },
  
  "development_pathway": {
    "current_level": "<Academy/Reserve/First Team Ready/Elite Ready>",
    "projected_level_2_years": "<level>",
    "projected_level_5_years": "<level>",
    "key_development_areas": [
      {
        "area": "<skill>",
        "priority": "<Critical/High/Medium>",
        "timeline": "<months>",
        "recommendation": "<specific training recommendation>"
      }
    ]
  },
  
  "market_assessment": {
    "current_value_estimate": "<range in currency>",
    "potential_value_estimate": "<range in currency>",
    "contract_recommendation": "<years>",
    "competition_level": "<Low/Medium/High - other clubs interested>"
  },
  
  "recommendation": {
    "action": "<Sign Immediately/Monitor Closely/Development Loan/Pass>",
    "confidence": "<High/Medium/Low>",
    "risk_level": "<Low/Medium/High>",
    "detailed_recommendation": "<3-4 sentences explaining the recommendation>"
  },
  
  "additional_notes": "<any other relevant observations>"
}`;

    const userPrompt = `Generate a professional scouting report for this player:

Player Information:
${JSON.stringify(playerData, null, 2)}

Video Analysis Data:
${JSON.stringify(analysisData, null, 2)}

Create a comprehensive, professional scouting report suitable for club directors. Be realistic and objective in assessments. Return ONLY valid JSON.`;

    console.log("Generating scouting report...");

    const response = await callLovableAI([
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ]);

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      return createErrorResponse("No content in AI response", 500);
    }

    const report = parseAIResponse(content);

    // Save to database
    const { data: savedReport, error: saveError } = await supabase
      .from("scouting_reports")
      .insert({
        user_id: user.id,
        player_id: playerId || null,
        video_analysis_id: videoAnalysisId || null,
        report_data: report,
        scout_classification: report.scout_classification,
        recommendation_action: report.recommendation?.action,
      })
      .select()
      .single();

    if (saveError) {
      console.error("Error saving report:", saveError);
      // Continue even if save fails
    }

    console.log("Scouting report generated:", {
      report_id: savedReport?.id,
      classification: report.scout_classification,
      action: report.recommendation?.action,
    });

    return createSuccessResponse({
      report,
      report_id: savedReport?.id,
    });
  } catch (error) {
    console.error("generate-scouting-report error:", error);
    return createErrorResponse(error as Error);
  }
});
