import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase-admin";
import { webhookEventSchema } from "@/lib/validation";
import crypto from "crypto";

function verifySignature(payload: string, signature: string): boolean {
  const secret = process.env.POLAR_WEBHOOK_SECRET;
  if (!secret) return false;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-polar-signature") ?? "";

    if (!verifySignature(rawBody, signature)) {
      return NextResponse.json(
        { data: null, error: "Invalid signature" },
        { status: 401 }
      );
    }

    const body: unknown = JSON.parse(rawBody);
    const parsed = webhookEventSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { data: null, error: "Invalid webhook payload" },
        { status: 400 }
      );
    }

    const event = parsed.data;
    const supabase = createAdminClient();

    if (
      event.type === "subscription.created" ||
      event.type === "subscription.updated"
    ) {
      const subscription = event.data.subscription;
      if (!subscription) {
        return NextResponse.json(
          { data: null, error: "No subscription data" },
          { status: 400 }
        );
      }

      const tier =
        subscription.status === "active" ? "pro" : "free";

      await supabase
        .from("user_credits")
        .update({ subscription_tier: tier })
        .eq("id", subscription.customer_id);
    }

    if (event.type === "subscription.canceled") {
      const subscription = event.data.subscription;
      if (subscription) {
        await supabase
          .from("user_credits")
          .update({ subscription_tier: "free" })
          .eq("id", subscription.customer_id);
      }
    }

    return NextResponse.json({ data: { received: true }, error: null });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Webhook processing failed";
    return NextResponse.json({ data: null, error: message }, { status: 500 });
  }
}
