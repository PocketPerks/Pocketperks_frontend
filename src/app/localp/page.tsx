"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ReviewSubmitSection from "@/components/localp/ReviewSubmit";
import ReviewCard from "@/components/localp/ReviewCard";
import ReviewSummary from "@/components/localp/ReviewSummary";
import { reviews } from "@/components/localp/data/reviews";

export default function LocalPPage() {
  const [visibleCount, setVisibleCount] = useState(2);
  const total = reviews.length;
  const hasMore = visibleCount < total;
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
        {/* Submit */}
        <ReviewSubmitSection />
        {/* Divider */}
        <div className="my-8 h-px bg-gray-200" />
        {/* Reviews */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Summary */}
          <ReviewSummary average={4.2} total={984} breakdown={ratingBreakdown} />

          {/* Card 1 */}
          <div className="space-y-6">
            {reviews[0] && <ReviewCard {...reviews[0]} />}
          </div>

          {/* Card 2 */}
          <div className="space-y-6">
            {reviews[1] && <ReviewCard {...reviews[1]} />}
          </div>
        </div>

        {/* More */}
        {visibleCount > 2 && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(2, visibleCount).map((r, idx) => (
              <ReviewCard key={`more-${idx}`} {...r} />
            ))}
          </div>
        )}

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setVisibleCount((n) => Math.min(total, n + 3))}
            disabled={!hasMore}
            className={`px-6 py-3 rounded-xl border shadow ${hasMore ? 'border-gray-300 bg-white hover:bg-gray-50' : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'}`}
            aria-disabled={!hasMore}
          >
            {hasMore ? 'Load More' : 'No more reviews'}
          </button>
        </div>
      </section>
    </main>
  );
}
