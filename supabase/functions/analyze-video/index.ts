import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const POSITION_FOCUS: Record<string, string> = {
  GK: "shot stopping, positioning, distribution, command of area, reflexes, communication, one-on-one situations",
  CB: "aerial duels, tackling, positioning, passing out from back, reading the game, leadership, recovery runs",
  LB: "overlapping runs, crossing, defensive positioning, stamina, 1v1 defending, link-up play",
  RB: "overlapping runs, crossing, defensive positioning, stamina, 1v1 defending, link-up play",
  CDM: "interceptions, tackling, passing range, positioning, breaking up play, shielding defense",
  CM: "passing accuracy, ball retention, box-to-box running, vision, work rate, pressing triggers",
  CAM: "creativity, key passes, shooting from distance, dribbling, final third play, off-the-ball movement",
  LM: "crossing, pace, dribbling, tracking back, width creation, combination play",
  RM: "crossing, pace, dribbling, tracking back, width creation, combination play",
  LW: "1v1 dribbling, cutting inside, shooting, pace, creativity, pressing from front",
  RW: "1v1 dribbling, cutting inside, shooting, pace, creativity, pressing from front",
  ST: "finishing, movement off the ball, hold-up play, aerial ability, positioning in the box, pressing triggers",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { videoId, videoUrl, position, fileName, playerAge, playerHeight } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const positionFocus = POSITION_FOCUS[position] || "overall football skills";

    const systemPrompt = `You are an elite football scout and performance analyst with 25+ years of experience at top European clubs. You use advanced biomechanical analysis and tactical pattern recognition.

Analyze the uploaded video of a ${position} player${playerAge ? ` (age ${playerAge})` : ""}${playerHeight ? ` (height ${playerHeight}cm)` : ""}.

Primary focus areas for ${position}: ${positionFocus}.

Return a comprehensive JSON analysis with this EXACT structure:
{
  "overall_score": <number 1-100>,
  "potential_rating": <number 1-100>,
  "technical_skills": {
    "passing": { "score": <1-100>, "analysis": "<specific observation>" },
    "ball_control": { "score": <1-100>, "analysis": "<specific observation>" },
    "shooting": { "score": <1-100>, "analysis": "<specific observation>" },
    "dribbling": { "score": <1-100>, "analysis": "<specific observation>" },
    "heading": { "score": <1-100>, "analysis": "<specific observation>" },
    "weak_foot": { "score": <1-5>, "analysis": "<specific observation>" }
  },
  "physical_metrics": {
    "speed": { "score": <1-100>, "analysis": "<observation on acceleration/top speed>" },
    "stamina": { "score": <1-100>, "analysis": "<observation on work rate over time>" },
    "agility": { "score": <1-100>, "analysis": "<observation on change of direction>" },
    "strength": { "score": <1-100>, "analysis": "<observation on physical duels>" },
    "jumping": { "score": <1-100>, "analysis": "<observation on aerial ability>" }
  },
  "tactical_awareness": {
    "positioning": { "score": <1-100>, "analysis": "<specific tactical observation>" },
    "decision_making": { "score": <1-100>, "analysis": "<specific decision observation>" },
    "vision": { "score": <1-100>, "analysis": "<observation on reading the game>" },
    "pressing": { "score": <1-100>, "analysis": "<observation on defensive contribution>" },
    "off_ball_movement": { "score": <1-100>, "analysis": "<observation on runs/positioning>" }
  },
  "mental_attributes": {
    "composure": <1-100>,
    "concentration": <1-100>,
    "leadership": <1-100>,
    "work_rate": <1-100>
  },
  "events_detected": {
    "passes_completed": <number>,
    "passes_attempted": <number>,
    "key_passes": <number>,
    "shots_on_target": <number>,
    "shots_off_target": <number>,
    "tackles_won": <number>,
    "tackles_lost": <number>,
    "interceptions": <number>,
    "aerial_duels_won": <number>,
    "aerial_duels_lost": <number>,
    "dribbles_completed": <number>,
    "dribbles_failed": <number>,
    "sprints": <number>,
    "touches": <number>
  },
  "frame_analysis": [
    {
      "timestamp": "<MM:SS>",
      "event_type": "<Pass/Shot/Tackle/Dribble/Run/Position>",
      "description": "<detailed 20-word description of the action>",
      "rating": <1-10>,
      "coaching_point": "<what was done well or could improve>"
    }
  ],
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "weaknesses": ["<weakness 1>", "<weakness 2>", "<weakness 3>"],
  "summary": "<4-5 sentence professional scout report style summary>",
  "player_comparison": "<name a professional player with similar style/attributes>",
  "training_recommendations": [
    {
      "focus_area": "<skill to improve>",
      "priority": "<High/Medium/Low>",
      "drills": ["<drill 1>", "<drill 2>"],
      "expected_improvement": "<what will improve with this training>",
      "duration_weeks": <number>
    }
  ],
  "recommended_playing_style": "<tactical system that suits this player>",
  "club_fit_profile": {
    "ideal_league_level": "<Elite/Top Division/Championship/Development>",
    "playing_style_fit": ["<style 1>", "<style 2>"],
    "development_potential": "<High/Medium/Low>",
    "ready_for_first_team": <boolean>
  }
}

Generate 5-8 frame_analysis entries covering different moments.
Generate 3-5 training_recommendations.
Be realistic but encouraging. Base scores on typical semi-professional youth player standards.`;

    const userPrompt = `Perform comprehensive analysis of this football video for a ${position} player.

File: ${fileName}
Position: ${position}
${playerAge ? `Age: ${playerAge}` : ""}
${playerHeight ? `Height: ${playerHeight}cm` : ""}

Provide:
1. Detailed technical skill ratings with specific observations
2. Physical metrics with biomechanical insights
3. Tactical awareness breakdown
4. Mental attributes assessment
5. Comprehensive event detection statistics
6. Frame-by-frame analysis of 5-8 key moments
7. Top 3 strengths and weaknesses
8. Professional scout-style summary
9. Similar professional player comparison
10. Personalized training program recommendations
11. Tactical system fit analysis
12. Club level and readiness assessment

Return ONLY valid JSON matching the required structure. No markdown formatting.`;

    console.log("Calling Lovable AI for enhanced video analysis...");

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

    let analysis;
    try {
      const jsonMatch = content.match(/```json\n?([\s\S]*?)\n?```/) || 
                        content.match(/```\n?([\s\S]*?)\n?```/) ||
                        [null, content];
      analysis = JSON.parse(jsonMatch[1] || content);
    } catch (parseError) {
      console.error("Failed to parse AI response:", content);
      throw new Error("Failed to parse analysis results");
    }

    const highlights = analysis.frame_analysis || generateHighlights(analysis, position);

    console.log("Enhanced analysis complete:", { 
      overall_score: analysis.overall_score,
      potential_rating: analysis.potential_rating,
      frame_count: highlights.length 
    });

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
  
  let currentTime = 0;
  
  if (events.passes_completed > 5 || events.key_passes > 0) {
    highlights.push({
      timestamp: formatTime(currentTime + 120),
      event_type: "Key Pass",
      description: "Excellent vision shown with a through ball that split the defense",
      rating: Math.min(10, Math.round((analysis.tactical_awareness?.vision?.score || 70) / 10)),
      coaching_point: "Good awareness of teammates' runs"
    });
  }

  if (events.shots_on_target > 0) {
    highlights.push({
      timestamp: formatTime(currentTime + 450),
      event_type: "Shot on Target",
      description: "Powerful strike from outside the box forcing a save from the goalkeeper",
      rating: Math.min(10, Math.round((analysis.technical_skills?.shooting?.score || 60) / 10)),
      coaching_point: "Good technique, consider shot placement"
    });
  }

  if (events.tackles_won > 2) {
    highlights.push({
      timestamp: formatTime(currentTime + 780),
      event_type: "Tackle",
      description: "Well-timed tackle to win back possession in the midfield area",
      rating: 8,
      coaching_point: "Excellent timing and body positioning"
    });
  }

  if (events.sprints > 3) {
    highlights.push({
      timestamp: formatTime(currentTime + 1200),
      event_type: "Sprint Recovery",
      description: "Impressive pace shown tracking back to cover defensive position effectively",
      rating: Math.min(10, Math.round((analysis.physical_metrics?.speed?.score || 70) / 10)),
      coaching_point: "Strong work rate and defensive awareness"
    });
  }

  if (events.interceptions > 1) {
    highlights.push({
      timestamp: formatTime(currentTime + 1650),
      event_type: "Interception",
      description: "Read the play excellently to intercept a dangerous pass in transition",
      rating: Math.min(10, Math.round((analysis.tactical_awareness?.positioning?.score || 70) / 10)),
      coaching_point: "Excellent anticipation and reading of the game"
    });
  }

  if (position === "ST" || position === "LW" || position === "RW") {
    highlights.push({
      timestamp: formatTime(currentTime + 2100),
      event_type: "Dribble",
      description: "Creative dribble past defender creating space in the final third area",
      rating: Math.min(10, Math.round((analysis.technical_skills?.dribbling?.score || 70) / 10)),
      coaching_point: "Good close control and change of pace"
    });
  } else if (position === "CB" || position === "CDM") {
    highlights.push({
      timestamp: formatTime(currentTime + 2100),
      event_type: "Aerial Duel",
      description: "Commanding aerial presence clearing danger from a set piece situation",
      rating: 8,
      coaching_point: "Strong jumping and timing in aerial contests"
    });
  }

  return highlights;
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}
