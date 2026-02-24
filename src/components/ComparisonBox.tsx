"use client";

import { useState, useCallback } from "react";
import { comparisons, type LawGospelComparison } from "@/lib/comparisons";
import { Scale, RefreshCw } from "lucide-react";

export default function ComparisonBox() {
  const [comparison, setComparison] = useState<LawGospelComparison>(
    comparisons[0]
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const generate = useCallback(() => {
    setIsAnimating(true);
    const random =
      comparisons[Math.floor(Math.random() * comparisons.length)];
    setComparison(random);
    setTimeout(() => setIsAnimating(false), 400);
  }, []);

  return (
    <div className="mt-10 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <Scale className="mx-auto h-8 w-8 text-gray-600 mb-2" />
        <h3 className="text-2xl font-serif font-bold text-gray-900">
          Moses&rsquo; Law vs Paul&rsquo;s Gospel
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          Rightly dividing the word of truth &mdash; comparing the two programs
        </p>
      </div>

      <div
        className={`transition-opacity duration-300 ${
          isAnimating ? "opacity-30" : "opacity-100"
        }`}
      >
        <div className="text-center mb-4">
          <span className="inline-block bg-gray-100 text-gray-800 text-sm font-semibold px-4 py-1.5 rounded-full">
            {comparison.topic}
          </span>
          <p className="text-gray-600 italic mt-2 text-sm">
            {comparison.title}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Moses' Law */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <h4 className="text-sm font-bold uppercase tracking-wide text-amber-800">
                Moses&rsquo; Law
              </h4>
            </div>
            <p className="text-amber-900 font-semibold text-sm mb-2">
              {comparison.law.ref}
            </p>
            <p className="text-amber-800 text-sm leading-relaxed italic">
              &ldquo;{comparison.law.text}&rdquo;
            </p>
          </div>

          {/* Paul's Gospel */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <h4 className="text-sm font-bold uppercase tracking-wide text-emerald-800">
                Paul&rsquo;s Gospel
              </h4>
            </div>
            <p className="text-emerald-900 font-semibold text-sm mb-2">
              {comparison.gospel.ref}
            </p>
            <p className="text-emerald-800 text-sm leading-relaxed italic">
              &ldquo;{comparison.gospel.text}&rdquo;
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={generate}
          className="bg-gray-800 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-900 active:scale-95 transition-all shadow-md inline-flex items-center gap-2"
        >
          <RefreshCw
            className={`h-4 w-4 ${isAnimating ? "animate-spin" : ""}`}
          />
          Generate Comparison
        </button>
      </div>
    </div>
  );
}
