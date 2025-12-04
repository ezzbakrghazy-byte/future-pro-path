import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Sample club database - in production this would come from a database
const CLUB_PROFILES = [
  {
    id: "1",
    name: "Elite Youth Academy FC",
    league: "Premier Development League",
    level: "Elite",
    playing_style: ["Possession-based", "High pressing"],
    positions_needed: ["CM", "CB", "RW"],
    age_preference: "16-19",
    development_focus: true,
    location: "England",
    reputation: 85
  },
  {
    id: "2", 
    name: "Technical FC Academy",
    league: "Championship Youth",
    level: "Top Division",
    playing_style: ["Technical football", "Build from back"],
    positions_needed: ["CAM", "ST", "LB"],
    age_preference: "17-21",
    development_focus: true,
    location: "Spain",
    reputation: 78
  },
  {
    id: "3",
    name: "Athletic Development Club",
    league: "First Division U21",
    level: "Championship",
    playing_style: ["Direct play", "Counter-attacking"],
    positions_needed: ["ST", "LW", "CDM"],
    age_preference: "18-22",
    development_focus: true,
    location: "Germany",
    reputation: 72
  },
  {
    id: "4",
    name: "Rising Stars Academy",
    league: "National Youth Premier",
    level: "Development",
    playing_style: ["Balanced", "Flexible formations"],
    positions_needed: ["GK", "RB", "CM", "ST"],
    age_preference: "15-18",
    development_focus: true,
    location: "France",
    reputation: 65
  },
  {
    id: "5",
    name: "Pro Path United",
    league: "Professional Reserve League",
    level: "Top Division",
    playing_style: ["High intensity", "Pressing"],
    positions_needed: ["CB", "CDM", "RW", "LW"],
    age_preference: "19-23",
    development_focus: false,
    location: "Italy",
    reputation: 80
  }
];

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { playerProfile, analysisData, preferences } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
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
${JSON.stringify(CLUB_PROFILES, null, 2)}

Analyze and rank all clubs by suitability. Consider:
1. Position requirements vs player position
2. Playing style compatibility
3. Development philosophy match
4. Age appropriateness
5. Player skill level vs club level
6. Career progression opportunities

Return ONLY valid JSON.`;

    console.log("Running player-club matching...");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required. Please add credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No content in AI response");
    }

    let matchingResults;
    try {
      const jsonMatch = content.match(/```json\n?([\s\S]*?)\n?```/) || 
                        content.match(/```\n?([\s\S]*?)\n?```/) ||
                        [null, content];
      matchingResults = JSON.parse(jsonMatch[1] || content);
    } catch (parseError) {
      console.error("Failed to parse AI response:", content);
      throw new Error("Failed to parse matching results");
    }

    // Add club details to matches
    matchingResults.matches = matchingResults.matches.map((match: any) => {
      const clubDetails = CLUB_PROFILES.find(c => c.id === match.club_id);
      return {
        ...match,
        club_details: clubDetails || null
      };
    });

    console.log("Matching complete:", { 
      matches_count: matchingResults.matches?.length,
      top_match: matchingResults.top_recommendation?.club_id 
    });

    return new Response(
      JSON.stringify(matchingResults),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("player-club-matching error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
