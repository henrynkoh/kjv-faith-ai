"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase-browser";
import { Coins } from "lucide-react";
import Link from "next/link";

interface CreditInfo {
  credits: number;
  subscription_tier: string;
}

export default function CreditDisplay() {
  const [info, setInfo] = useState<CreditInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCredits() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from("user_credits")
        .select("credits, subscription_tier")
        .eq("id", user.id)
        .single();

      if (data) {
        setInfo(data);
      }
      setLoading(false);
    }

    fetchCredits();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-1 text-sm text-gray-400">
        <Coins className="h-4 w-4" />
        <span>...</span>
      </div>
    );
  }

  if (!info) return null;

  const isPro = info.subscription_tier === "pro";

  return (
    <div className="flex items-center gap-2">
      {isPro ? (
        <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full">
          <Coins className="h-4 w-4" />
          Pro — Unlimited
        </span>
      ) : (
        <>
          <span
            className={`inline-flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full ${
              info.credits <= 3
                ? "bg-red-50 text-red-700"
                : "bg-blue-50 text-blue-700"
            }`}
          >
            <Coins className="h-4 w-4" />
            {info.credits} credits
          </span>
          {info.credits <= 3 && (
            <Link
              href="/subscribe"
              className="text-xs text-indigo-600 hover:underline"
            >
              Upgrade
            </Link>
          )}
        </>
      )}
    </div>
  );
}
