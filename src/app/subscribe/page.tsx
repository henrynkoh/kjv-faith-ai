"use client";

import { useState } from "react";
import { Crown, Check, Loader2 } from "lucide-react";

const POLAR_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_POLAR_CHECKOUT_URL ?? "#";

const features = [
  "Unlimited AI verse insights",
  "DALL-E generated verse imagery",
  "Priority AI processing",
  "Support ongoing development",
];

export default function SubscribePage() {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = () => {
    setLoading(true);
    if (POLAR_CHECKOUT_URL !== "#") {
      window.location.href = POLAR_CHECKOUT_URL;
    } else {
      setLoading(false);
      alert(
        "Subscription checkout is not configured yet. Set NEXT_PUBLIC_POLAR_CHECKOUT_URL in your .env.local file."
      );
    }
  };

  return (
    <div className="max-w-lg mx-auto py-12 text-center">
      <Crown className="mx-auto h-12 w-12 text-amber-500 mb-4" />
      <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
        Join the Daily Devotion Family
      </h1>
      <p className="text-gray-500 mb-8">
        Study to shew thyself approved &mdash; unlock unlimited AI-powered
        insights for your daily Bible study.
      </p>

      <div className="bg-white rounded-2xl shadow-lg border border-amber-200 p-8">
        <div className="mb-6">
          <span className="text-5xl font-bold text-gray-900">$3.99</span>
          <span className="text-gray-500">/month</span>
        </div>
        <p className="text-sm text-green-600 font-medium mb-6">
          7-day free trial included
        </p>

        <ul className="text-left space-y-3 mb-8">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-gray-700">
              <Check className="h-5 w-5 text-green-500 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleSubscribe}
          disabled={loading}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-4 rounded-xl text-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 shadow-lg shadow-amber-200"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Redirecting...
            </>
          ) : (
            <>
              <Crown className="h-5 w-5" />
              Start Free Trial
            </>
          )}
        </button>

        <p className="text-xs text-gray-400 mt-4">
          Cancel anytime. Powered by Polar. Secure payment processing.
        </p>
      </div>
    </div>
  );
}
