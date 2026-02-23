import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase-server";
import { generateVerseInsight, generateVerseImage } from "@/lib/openai";
import { generateRequestSchema } from "@/lib/validation";
import type { GenerateResponse } from "@/types/database";

export async function POST(req: Request): Promise<NextResponse<GenerateResponse>> {
  try {
    const body: unknown = await req.json();
    const parsed = generateRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { data: null, error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const supabase = await createServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { data: null, error: "Please sign in to generate insights." },
        { status: 401 }
      );
    }

    const { data: userCredits } = await supabase
      .from("user_credits")
      .select("credits, subscription_tier")
      .eq("id", user.id)
      .single();

    if (!userCredits) {
      // Create default credits row for new user
      await supabase
        .from("user_credits")
        .insert({ id: user.id, credits: 10, subscription_tier: "free" });
    } else if (
      userCredits.subscription_tier === "free" &&
      userCredits.credits <= 0
    ) {
      return NextResponse.json(
        {
          data: null,
          error:
            "No credits remaining. Study to shew thyself approved — subscribe for unlimited insights!",
        },
        { status: 403 }
      );
    }

    const { prompt } = parsed.data;

    const insight = await generateVerseInsight(prompt);

    let imageUrl: string | null = null;
    try {
      imageUrl = await generateVerseImage(prompt);
    } catch {
      // Image generation is optional; continue without it
    }

    // Deduct credit for free tier
    if (!userCredits || userCredits.subscription_tier === "free") {
      const currentCredits = userCredits?.credits ?? 10;
      await supabase
        .from("user_credits")
        .update({ credits: currentCredits - 1 })
        .eq("id", user.id);
    }

    return NextResponse.json({
      data: {
        explanation: insight.explanation,
        application: insight.application,
        prayer: insight.prayer,
        imageUrl,
      },
      error: null,
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "An unexpected error occurred";
    return NextResponse.json({ data: null, error: message }, { status: 500 });
  }
}
