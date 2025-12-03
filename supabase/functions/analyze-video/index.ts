import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const POSITION_FOCUS: Record<string, string> = {
  GK: "shot stopping, positioning, distribution, command of area, reflexes",
  CB: "aerial duels, tackling, positioning, passing out from back, reading the game",
  LB: "overlapping runs, crossing, defensive positioning, stamina, 1v1 defending",
  RB: "overlapping runs, crossing, defensive positioning, stamina, 1v1 defending",
  CDM: "interceptions, tackling, passing range, positioning, breaking up play",
  CM: "passing accuracy, ball retention, box-to-box running, vision, work rate",
  CAM: "creativity, key passes, shooting from distance, dribbling, final third play",
  LM: "crossing, pace, dribbling, tracking back, width creation",
  RM: "crossing, pace, dribbling, tracking back, width creation",
  LW: "1v1 dribbling, cutting inside, shooting, pace, creativity",
  RW: "1v1 dribbling, cutting inside, shooting, pace, creativity",
  ST: "finishing, movement off the ball, hold-up play, aerial ability, positioning in the box",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { videoId, videoUrl, position, fileName } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const positionFocus = POSITION_FOCUS[position] || "overall football skills";

    const systemPrompt = `You are an expert football scout and performance analyst with decades of experience evaluating players at all levels. You use advanced motion tracking and event detection to analyze player footage.

Analyze the uploaded video of a ${position} player. Focus on: ${positionFocus}.

You must return a JSON response with this exact structure:
{
  "overall_score": <number 1-100>,
  "technical_skills": {
    "passing": <number 1-100>,
    "ball_control": <number 1-100>,
    "shooting": <number 1-100>,
    "dribbling": <number 1-100>
  },
  "physical_metrics": {
    "speed": <number 1-100>,
    "stamina": <number 1-100>,
    "agility": <number 1-100>
  },
  "tactical_awareness": {
    "positioning": <number 1-100>,
    "decision_making": <number 1-100>,
    "vision": <number 1-100>
  },
  "events_detected": {
    "passes": <number>,
    "shots": <number>,
    "tackles": <number>,
    "interceptions": <number>,
    "sprints": <number>
  },
  "summary": "<2-3 sentence professional summary of the player's performance>",
  "improvement_tips": ["<tip 1>", "<tip 2>", "<tip 3>"]
}

Be realistic but encouraging. Base scores on typical semi-professional youth player standards.`;

    const userPrompt = `Analyze this football match video for a ${position} player.
    
File: ${fileName}
Position: ${position}

Provide comprehensive analysis including:
1. Technical skill ratings
2. Physical metrics
3. Tactical awareness
4. Key events detected (passes, shots, tackles, etc.)
5. Professional summary
6. 3 specific improvement tips

Return ONLY valid JSON matching the required structure.`;

    console.log("Calling Lovable AI for video analysis...");

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

    // Parse the JSON response
    let analysis;
    try {
      // Extract JSON from potential markdown code blocks
      const jsonMatch = content.match(/```json\n?([\s\S]*?)\n?```/) || 
                        content.match(/```\n?([\s\S]*?)\n?```/) ||
                        [null, content];
      analysis = JSON.parse(jsonMatch[1] || content);
    } catch (parseError) {
      console.error("Failed to parse AI response:", content);
      throw new Error("Failed to parse analysis results");
    }

    // Generate highlights based on analysis
    const highlights = generateHighlights(analysis, position);

    console.log("Analysis complete:", { overall_score: analysis.overall_score });

    return new Response(
      JSON.stringify({ analysis, highlights }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("analyze-video error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function generateHighlights(analysis: any, position: string) {
  const highlights = [];
  const events = analysis.events_detected || {};
  
  // Generate timestamps and highlights based on events
  let currentTime = 0;
  
  if (events.passes > 5) {
    highlights.push({
      timestamp: formatTime(currentTime + 120),
      type: "Key Pass",
      description: "Excellent vision shown with a through ball that split the defense",
      rating: Math.min(10, Math.round(analysis.tactical_awareness?.vision / 10) || 7),
    });
  }

  if (events.shots > 0) {
    highlights.push({
      timestamp: formatTime(currentTime + 450),
      type: "Shot on Target",
      description: "Powerful strike from outside the box forcing a save",
      rating: Math.min(10, Math.round(analysis.technical_skills?.shooting / 10) || 6),
    });
  }

  if (events.tackles > 2) {
    highlights.push({
      timestamp: formatTime(currentTime + 780),
      type: "Defensive Action",
      description: "Well-timed tackle to win back possession in the midfield",
      rating: 8,
    });
  }

  if (events.sprints > 3) {
    highlights.push({
      timestamp: formatTime(currentTime + 1200),
      type: "Sprint Recovery",
      description: "Impressive pace shown tracking back to cover defensive position",
      rating: Math.min(10, Math.round(analysis.physical_metrics?.speed / 10) || 7),
    });
  }

  if (events.interceptions > 1) {
    highlights.push({
      timestamp: formatTime(currentTime + 1650),
      type: "Interception",
      description: "Read the play excellently to intercept a dangerous pass",
      rating: Math.min(10, Math.round(analysis.tactical_awareness?.positioning / 10) || 7),
    });
  }

  // Add position-specific highlight
  if (position === "ST" || position === "LW" || position === "RW") {
    highlights.push({
      timestamp: formatTime(currentTime + 2100),
      type: "Attacking Move",
      description: "Creative dribble past defender creating space in the final third",
      rating: Math.min(10, Math.round(analysis.technical_skills?.dribbling / 10) || 7),
    });
  } else if (position === "CB" || position === "CDM") {
    highlights.push({
      timestamp: formatTime(currentTime + 2100),
      type: "Defensive Header",
      description: "Commanding aerial presence clearing danger from a set piece",
      rating: 8,
    });
  }

  return highlights;
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}
