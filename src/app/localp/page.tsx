"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ReviewSubmitSection from "@/components/localp/ReviewSubmit";
import ReviewCard from "@/components/localp/ReviewCard";
import ReviewSummary from "@/components/localp/ReviewSummary";
import { reviews } from "@/components/localp/data/reviews";

export default function LocalPPage() {
  const [visibleCount, setVisibleCount] = useState(2);
  const ratingBreakdown = [
    { label: "5 star", pct: 60 },
    { label: "4 star", pct: 21 },
    { label: "3 star", pct: 9 },
    { label: "2 star", pct: 2 },
    { label: "1 star", pct: 8 },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gray-200 text-black">
      <Navbar />

      <section className="w-full mx-auto px-6 py-8 bg-white rounded-3xl shadow border border-gray-200 my-4 md:my-6 lg:my-8 max-w-[calc(100%-2rem)] md:max-w-[calc(100%-3rem)] lg:max-w-[calc(100%-4rem)]">
        {/* Review submit section (includes avatar + stars) */}
        <ReviewSubmitSection />
        {/* Divider */}
        <div className="my-8 h-px bg-gray-200" />
        {/* Customer reviews + cards */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left: summary graph */}
          <ReviewSummary average={4.2} total={984} breakdown={ratingBreakdown} />

          {/* Middle: first review card */}
          <div className="space-y-6">
            {reviews[0] && <ReviewCard {...reviews[0]} />}
          </div>

          {/* Right: second review card */}
          <div className="space-y-6">
            {reviews[1] && <ReviewCard {...reviews[1]} />}
          </div>
        </div>

        {/* Additional reviews that load below */}
        {visibleCount > 2 && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(2, visibleCount).map((r, idx) => (
              <ReviewCard key={`more-${idx}`} {...r} />
            ))}
          </div>
        )}

        {/* Load more */}
        {visibleCount < reviews.length && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setVisibleCount((n) => Math.min(reviews.length, n + 3))}
              className="px-6 py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 shadow"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
