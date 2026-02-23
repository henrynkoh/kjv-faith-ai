import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase-server";

export async function GET(request: Request) {
  try {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get("code");
    const next = searchParams.get("next") ?? "/";

    if (code) {
      const supabase = await createServerClient();
      const { error } = await supabase.auth.exchangeCodeForSession(code);

      if (!error) {
        // Ensure user_credits row exists
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (user) {
          const { data: existing } = await supabase
            .from("user_credits")
            .select("id")
            .eq("id", user.id)
            .single();

          if (!existing) {
            await supabase
              .from("user_credits")
              .insert({ id: user.id, credits: 10, subscription_tier: "free" });
          }
        }

        return NextResponse.redirect(`${origin}${next}`);
      }
    }

    return NextResponse.redirect(`${origin}/?error=auth`);
  } catch {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
