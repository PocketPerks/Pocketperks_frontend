"use client";

import { formatINR } from "../format";

export function MoneyPill({ amount }: { amount: number }) {
  return (
    <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
      <div className="inline-flex items-center rounded-xl bg-gray-50 h-10 sm:h-12 px-3 sm:px-4 whitespace-nowrap border border-gray-200">
        <span className="text-lg sm:text-xl font-bold text-gray-900">{formatINR(amount)}</span>
      </div>
    </div>
  );
}