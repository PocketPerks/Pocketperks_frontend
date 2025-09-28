"use client";

import React from "react";
import { StatusFilter } from "../hooks/useUserFilters";

export function StatusChips({ value, counts, onChange }: { value: StatusFilter; counts: { total: number; active: number; inactive: number; suspended: number; }; onChange: (v: StatusFilter) => void; }) {
  const ops: { label: string; value: StatusFilter }[] = [
    { label: `All (${counts.total})`, value: "all" },
    { label: `Active (${counts.active})`, value: "active" },
    { label: `Inactive (${counts.inactive})`, value: "inactive" },
    { label: `Suspended (${counts.suspended})`, value: "suspended" },
  ];
  return (
    <div className="flex flex-wrap items-center gap-2">
      {ops.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-3 py-1.5 rounded-full text-sm border transition ${
            value === opt.value ? "bg-black text-white border-transparent shadow-sm" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
