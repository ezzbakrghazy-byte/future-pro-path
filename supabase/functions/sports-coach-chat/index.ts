import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, intent = 'general' } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Define system prompts based on intent
    const systemPrompts = {
      pitch: "You are an expert football agent helping young players craft compelling pitch messages to professional clubs. Focus on highlighting achievements, potential, and professionalism. Keep responses concise and actionable. Format the pitch message in a professional structure.",
      evaluation: "You are a professional football scout analyzing player potential. Provide honest, constructive evaluations focusing on technical skills, physical attributes, mental strength, and areas for improvement. Be encouraging but realistic.",
      improvement: "You are an experienced football coach providing personalized training advice. Give specific, actionable tips that players can implement immediately. Focus on technical skills, tactical awareness, physical conditioning, and mental preparation.",
      profile: "You are a career advisor for young footballers. Help players understand what makes a strong profile: quality videos, detailed stats, professional presentation, and how to showcase their unique strengths to clubs."
    };

    const systemPrompt = systemPrompts[intent as keyof typeof systemPrompts] || 
      "You are في ضهرك AI Coach, an expert football development assistant. Help players with pitch writing, evaluation, improvement tips, and profile building. Be supportive, professional, and specific in your guidance.";

    console.log(`Processing chat request with intent: ${intent}`);

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
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI usage limit reached. Please add credits to continue." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI gateway error");
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Error in sports-coach-chat:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
