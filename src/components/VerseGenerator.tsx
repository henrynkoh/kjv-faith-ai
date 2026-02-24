"use client";

import { useState, useCallback } from "react";
import { kjvVerses, type KJVVerse } from "@/lib/verses";
import { BookOpen, RefreshCw } from "lucide-react";
import ComparisonBox from "./ComparisonBox";

export default function VerseGenerator() {
  const [verse, setVerse] = useState<KJVVerse>(kjvVerses[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const generate = useCallback(() => {
    setIsAnimating(true);
    const random = kjvVerses[Math.floor(Math.random() * kjvVerses.length)];
    setVerse(random);
    setTimeout(() => setIsAnimating(false), 500);
  }, []);

  return (
    <section className="text-center py-12 px-4">
      <div className="mb-8">
        <BookOpen className="mx-auto h-12 w-12 text-blue-600 mb-4" />
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
          Rightly Dividing the Word of Truth
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          &ldquo;Study to shew thyself approved unto God&rdquo; &mdash; 2
          Timothy 2:15 KJV
        </p>
      </div>

      <button
        onClick={generate}
        className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200 inline-flex items-center gap-2"
      >
        <RefreshCw
          className={`h-5 w-5 ${isAnimating ? "animate-spin" : ""}`}
        />
        Generate Truth Divider Verse
      </button>

      <div
        className={`mt-10 p-8 bg-white shadow-lg rounded-2xl max-w-2xl mx-auto border border-blue-100 transition-opacity duration-300 ${
          isAnimating ? "opacity-50" : "opacity-100"
        }`}
      >
        <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-3">
          {verse.theme}
        </span>
        <p className="text-xl font-semibold text-gray-900 mb-3">{verse.ref}</p>
        <p className="text-gray-700 italic leading-relaxed">{verse.text}</p>
      </div>

      <ComparisonBox />
    </section>
  );
}
