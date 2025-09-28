"use client";
import React from "react";

interface TagProps {
  text: string;
  color?: string;
}

export default function Tag({
  text,
  color = "bg-gray-200 text-gray-700",
}: TagProps) {
  return (
    <span
      className={`inline-flex items-center text-sm font-medium px-3 py-1 rounded-xl mr-2 border-3 border-current/80   ${color}`}
    >
      {text}
    </span>
  );
}
