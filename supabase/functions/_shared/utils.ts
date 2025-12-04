// Supabase Edge Functions run on Deno runtime
// @ts-ignore - Deno global is available in Deno runtime
// @deno-types="https://esm.sh/@supabase/supabase-js@2.39.3/dist/module/index.d.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

export function getSupabaseClient(authHeader: string) {
  // @ts-ignore - Deno is available in Deno runtime
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  // @ts-ignore - Deno is available in Deno runtime
  const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  return createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: { Authorization: authHeader },
    },
  });
}

export function getAuthenticatedUser(authHeader: string | null) {
  if (!authHeader) {
    throw new Error("Missing authorization header");
  }

  // Extract JWT token
  const token = authHeader.replace("Bearer ", "");
  if (!token) {
    throw new Error("Invalid authorization header");
  }

  return token;
}

export async function validateRateLimit(
  supabase: any,
  userId: string,
  endpoint: string,
  limit: number = 100
): Promise<{ allowed: boolean; current_count: number }> {
  const today = new Date().toISOString().split("T")[0];

  // Get or create usage record for today
  const { data: usage, error } = await supabase
    .from("api_usage")
    .select("*")
    .eq("user_id", userId)
    .eq("endpoint", endpoint)
    .gte("created_at", today)
    .lt("created_at", new Date(Date.parse(today) + 86400000).toISOString())
    .single();

  if (error && error.code !== "PGRST116") {
    // PGRST116 is "not found" error
    console.error("Rate limit check error:", error);
    return { allowed: true, current_count: 0 }; // Fail open
  }

  if (!usage) {
    // Create new usage record
    await supabase.from("api_usage").insert({
      user_id: userId,
      endpoint: endpoint,
      request_count: 1,
      last_request_at: new Date().toISOString(),
    });
    return { allowed: true, current_count: 1 };
  }

  const currentCount = usage.request_count || 0;

  if (currentCount >= limit) {
    return { allowed: false, current_count: currentCount };
  }

  // Increment usage
  await supabase
    .from("api_usage")
    .update({
      request_count: currentCount + 1,
      last_request_at: new Date().toISOString(),
    })
    .eq("id", usage.id);

  return { allowed: true, current_count: currentCount + 1 };
}

export function validatePosition(position: string): boolean {
  const validPositions = [
    "GK",
    "CB",
    "LB",
    "RB",
    "CDM",
    "CM",
    "CAM",
    "LM",
    "RM",
    "LW",
    "RW",
    "ST",
  ];
  return validPositions.includes(position);
}

export function validateAge(age: number): boolean {
  return age >= 10 && age <= 30;
}

export function validateHeight(height: number): boolean {
  return height >= 140 && height <= 220;
}

export async function callLovableAI(
  messages: Array<{ role: string; content: string }>,
  stream: boolean = false
) {
  // @ts-ignore - Deno is available in Deno runtime
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

  if (!LOVABLE_API_KEY) {
    throw new Error("LOVABLE_API_KEY is not configured");
  }

  const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-2.0-flash-exp",
      messages,
      stream,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("AI gateway error:", response.status, errorText);

    if (response.status === 429) {
      throw new Error("Rate limit exceeded. Please try again later.");
    }
    if (response.status === 402) {
      throw new Error("AI usage limit reached. Please add credits to continue.");
    }

    throw new Error(`AI gateway error: ${response.status}`);
  }

  return response;
}

export function parseAIResponse(content: string): any {
  try {
    // Try to extract JSON from code blocks
    const jsonMatch =
      content.match(/```json\n?([\s\S]*?)\n?```/) ||
      content.match(/```\n?([\s\S]*?)\n?```/) ||
      [null, content];
    return JSON.parse(jsonMatch[1] || content);
  } catch (parseError) {
    console.error("Failed to parse AI response:", content);
    throw new Error("Failed to parse AI response as JSON");
  }
}

export function createErrorResponse(
  error: Error | string,
  status: number = 500
): Response {
  const message = error instanceof Error ? error.message : error;
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

export function createSuccessResponse(data: any): Response {
  return new Response(JSON.stringify(data), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
