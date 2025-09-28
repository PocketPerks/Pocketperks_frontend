"use client";

import React from "react";

export function IconButton({ title, onClick, variant = "default", children }: { title: string; onClick?: () => void; variant?: "default" | "danger"; children: React.ReactNode; }) {
  const base = "p-3 rounded-xl focus:outline-none focus:ring-2 transition";
  const hover = variant === "danger" ? "hover:bg-red-50 focus:ring-red-200" : "hover:bg-gray-100 focus:ring-black/10";
  return (
    <button aria-label={title} title={title} onClick={onClick} className={`${base} ${hover}`}>
      {children}
    </button>
  );
}
