import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import {
  corsHeaders,
  getSupabaseClient,
  getAuthenticatedUser,
  validateRateLimit,
  callLovableAI,
  createErrorResponse,
} from "../_shared/utils.ts";

serve(async (req) => {
  if (req.method === 'OPTIONS') {
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
      "sports-coach-chat",
      200
    );

    if (!rateLimit.allowed) {
      return createErrorResponse(
        `Rate limit exceeded. Maximum 200 messages per day.`,
        429
      );
    }

    const { messages, intent = 'general', playerId } = await req.json();

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

    const response = await callLovableAI(
      [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
      true // Enable streaming
    );

    // Save user message to database
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.role === "user") {
        await supabase.from("chat_messages").insert({
          user_id: user.id,
          player_id: playerId || null,
          role: "user",
          content: lastMessage.content,
          intent: intent,
        });
      }
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Error in sports-coach-chat:", error);
    return createErrorResponse(error as Error);
  }
});
