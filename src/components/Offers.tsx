"use client";

import { useState } from "react";
import { Percent, Tag, Copy, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Offers() {
  const [copied, setCopied] = useState(false);
  const couponCode = "BANK123";

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Offer 1 */}
      <Link
        href="/offers/discount"
        className="flex flex-col items-center justify-center gap-2 bg-yellow-50 border border-yellow-200 
        rounded-xl p-5 shadow-sm hover:shadow-md hover:scale-105 transition"
      >
        <span className="bg-yellow-200 p-2 rounded-full">
          <Percent className="w-6 h-6 text-yellow-800" />
        </span>
        <h3 className="font-semibold text-yellow-900">Upto 10%!!</h3>
        <p className="text-sm text-yellow-700">Save big on your next order</p>
      </Link>

      {/* Offer 2 */}
      <Link
        href="/offers/special-deal"
        className="flex flex-col items-center justify-center gap-2 bg-green-50 border border-green-200 
        rounded-xl p-5 shadow-sm hover:shadow-md hover:scale-105 transition"
      >
        <span className="bg-green-200 p-2 rounded-full">
          <Tag className="w-6 h-6 text-green-800" />
        </span>
        <h3 className="font-semibold text-green-900">Special Deal</h3>
        <p className="text-sm text-green-700">On electronics & clothes</p>
      </Link>

      {/* Offer 3 - Copiable Coupon */}
      <div
        className="flex flex-col items-center justify-center gap-2 bg-blue-50 border border-blue-200 
        rounded-xl p-5 shadow-sm hover:shadow-md hover:scale-105 transition"
      >
        <h3 className="font-semibold text-blue-900">Bank Offer</h3>
        <p className="text-sm text-blue-700">Use code below for instant discount</p>

        <div className="flex items-center gap-2 mt-2">
          <span className="px-3 py-1 border rounded bg-white font-mono text-sm">
            {couponCode}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-sm px-2 py-1 rounded-lg bg-black text-white border-2 border-black font-medium shadow 
        hover:bg-white hover:text-black transition"
          >
            {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-1">Verified | 5k+ users used this</p>
      </div>
    </div>
  );
}
