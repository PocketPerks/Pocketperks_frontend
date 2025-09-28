"use client";
import React from "react";

interface CashbackBadgeProps {
  text: string;
  variant?: "ribbon" | "pill"; // variant
  className?: string;
}

export default function CashbackBadge({ text, variant = "ribbon", className = "" }: CashbackBadgeProps) {
  const cls =
    variant === "pill"
      ? "bg-white/95 text-gray-900 border border-gray-300 rounded-2xl px-5 py-1.5 shadow-lg text-lg font-semibold"
      : "bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-br-lg rounded-tr-lg shadow-md";

  return <div className={`${cls} ${className}`.trim()}>{text}</div>;
}
