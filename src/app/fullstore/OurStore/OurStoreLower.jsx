"use client";

import React, { useState } from "react";
import ReviewSubmitSection from "./ReviewSubmit";
import ReviewCard from "./ReviewCard";
import ReviewSummary from "./ReviewSummery";
import { reviews } from "./Review";

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
    <main className="min-h-screen flex flex-col w-full bg-gray-200 text-black px-4 md:px-6 lg:px-8">

      <section className="w-full mx-auto bg-white rounded-3xl shadow border border-gray-200 my-6 p-6 md:p-8 lg:p-10 max-w-[1200px]">
        {/* Review submit section */}
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
