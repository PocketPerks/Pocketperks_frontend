"use client";

import React from "react";
import Image from "next/image";
import CashbackBadge from "./CashbackBadge";

export type TrendingSite = {
  title: string;
  bannerSrc: string;
  badgeText: string;
};

interface TrendingSitesSectionProps {
  title?: string;
  items: TrendingSite[];
  className?: string;
}

export default function TrendingSitesSection({
  title = "Trending Sites",
  items,
  className = "",
}: TrendingSitesSectionProps) {
  return (
    <section className={`w-full py-2 px-4 bg-transparent ${className}`}>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-center">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
        {items.slice(0, 3).map((site, i) => (
          <div key={i} className="relative flex flex-col items-center pt-6">
            {/* Badge */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
              {/* Badge */}
              <span className="inline-block">
                <CashbackBadge variant="pill" text={site.badgeText} className="scale-[1.15]" />
              </span>
            </div>

            {/* Image */}
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] bg-gray-100">
              <Image src={site.bannerSrc} alt={`${site.title} banner`} fill priority className="object-cover" />
            </div>

            {/* Title */}
            <div className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
              {site.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}