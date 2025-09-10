"use client";

import { useState } from "react";
import { DollarSign, Heart } from "lucide-react";

export default function ActionButtons() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex gap-4">
      {/* Earn Button */}
      <button
        className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-lg 
        border-2 border-black font-medium shadow 
        hover:bg-white hover:text-black transition"
      >
        <DollarSign className="w-5 h-5" />
        Earn
      </button>

      {/* Save / Wishlist Button */}
      <button
        onClick={() => setSaved(!saved)}
        className={`flex items-center justify-center px-4 py-3 rounded-lg border-2 shadow transition ${
          saved
            ? "bg-red-100 border-red-400"
            : "bg-gray-200 border-gray-300 hover:bg-white hover:border-black"
        }`}
      >
        <Heart
          className={`w-5 h-5 transition ${
            saved ? "text-red-500 fill-red-500" : "text-gray-600"
          }`}
        />
      </button>
    </div>
  );
}
