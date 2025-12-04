import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { playerData, analysisData } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
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

    let report;
    try {
      const jsonMatch = content.match(/```json\n?([\s\S]*?)\n?```/) || 
                        content.match(/```\n?([\s\S]*?)\n?```/) ||
                        [null, content];
      report = JSON.parse(jsonMatch[1] || content);
    } catch (parseError) {
      console.error("Failed to parse AI response:", content);
      throw new Error("Failed to parse scouting report");
    }

    console.log("Scouting report generated:", { 
      classification: report.scout_classification,
      action: report.recommendation?.action 
    });

    return new Response(
      JSON.stringify({ report }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("generate-scouting-report error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
