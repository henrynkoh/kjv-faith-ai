"use client";

import { useState } from "react";
import { Sparkles, Loader2, AlertCircle } from "lucide-react";
import type { GenerateResponse } from "@/types/database";
import Link from "next/link";

export default function GeneratePage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<GenerateResponse["data"]>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: input || "rightly dividing the word of truth",
        }),
      });

      const data: GenerateResponse = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setResult(data.data);
      }
    } catch {
      setError("Failed to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="text-center mb-8">
        <Sparkles className="mx-auto h-10 w-10 text-indigo-600 mb-3" />
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
          AI Insight Generator
        </h1>
        <p className="text-gray-500">
          Enter a Bible reference or keyword for a KJV-rooted explanation,
          application &amp; prayer.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
        <label
          htmlFor="prompt-input"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Bible reference or keyword
        </label>
        <input
          id="prompt-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='e.g. "Psalm 23", "study", "truth"...'
          className="w-full p-3 border border-gray-200 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none transition-all"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !loading) handleGenerate();
          }}
          maxLength={500}
        />
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Dividing the Word...
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5" />
              Divide Truth
            </>
          )}
        </button>
      </div>

      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-red-700 text-sm">{error}</p>
            {error.includes("subscribe") && (
              <Link
                href="/subscribe"
                className="text-indigo-600 text-sm font-medium hover:underline mt-1 inline-block"
              >
                Subscribe for unlimited insights &rarr;
              </Link>
            )}
          </div>
        </div>
      )}

      {result && (
        <div className="mt-8 space-y-6">
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
            <h3 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">
              Explanation
            </h3>
            <p className="text-gray-800 leading-relaxed">
              {result.explanation}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-6">
            <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">
              Life Application
            </h3>
            <p className="text-gray-800 leading-relaxed">
              {result.application}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
            <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-2">
              Prayer
            </h3>
            <p className="text-gray-800 leading-relaxed italic">
              {result.prayer}
            </p>
          </div>

          {result.imageUrl && (
            <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-4">
              <h3 className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-3">
                Verse Imagery
              </h3>
              <img
                src={result.imageUrl}
                alt="AI-generated verse scene"
                className="w-full rounded-xl"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
