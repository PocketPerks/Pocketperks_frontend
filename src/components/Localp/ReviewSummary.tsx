"use client";

import React from "react";
import { Star } from "lucide-react";

export type BreakdownRow = { label: string; pct: number };

export default function ReviewSummary({ average, total, breakdown }: { average: number; total: number; breakdown: BreakdownRow[] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold">Customer reviews</h2>
      <div className="mt-2 flex items-center gap-2">
        <div className="flex text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-500" />
          ))}
        </div>
        <span className="text-gray-700">{average.toFixed(1)} out of 5</span>
      </div>
      <div className="text-sm text-gray-500 mt-1">{total.toLocaleString()} global ratings</div>

      <div className="mt-4 space-y-2">
        {breakdown.map((r) => (
          <div key={r.label} className="flex items-center gap-3 text-sm">
            <div className="w-12 text-gray-700">{r.label}</div>
            <div className="flex-1 h-4 rounded bg-gray-100 border border-gray-200 overflow-hidden">
              <div className="h-full bg-orange-500" style={{ width: `${r.pct}%` }} />
            </div>
            <div className="w-10 text-right text-gray-600">{r.pct}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
