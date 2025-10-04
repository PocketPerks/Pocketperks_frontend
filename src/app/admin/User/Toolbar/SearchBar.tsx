"use client";

import { Search } from "lucide-react";

export function SearchBar({ value, onChange, placeholder = "Search by name, email or phone" }: { value: string; onChange: (v: string) => void; placeholder?: string; }) {
  return (
    <div className="relative flex-1 max-w-xl">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        aria-label="Search users"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-10 pl-10 pr-3 rounded-lg border border-gray-300 bg-white focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition"
      />
    </div>
  );
}