"use client";

import { SlidersHorizontal } from "lucide-react";
import { SortBy } from "../hooks/useUserFilters";

export function SortSelect({ value, onChange }: { value: SortBy; onChange: (v: SortBy) => void }) {
  return (
    <div className="flex items-center gap-2">
      <SlidersHorizontal className="w-4 h-4 text-gray-500" />
      <label className="text-sm text-gray-600" htmlFor="sortBy">Sort by</label>
      <select
        id="sortBy"
        value={value}
        onChange={(e) => onChange(e.target.value as SortBy)}
        className="h-10 rounded-lg border border-gray-300 bg-white px-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
      >
        <option value="lastLogin">Last login</option>
        <option value="joined">Joined date</option>
        <option value="cashback">Cashback</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
}
