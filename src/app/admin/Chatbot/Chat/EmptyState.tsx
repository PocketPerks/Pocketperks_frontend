"use client";

import React from "react";

export default function EmptyState({ label = "No contacts" }: { label?: string }) {
  return (
    <div className="text-gray-400 text-center py-8">{label}</div>
  );
}