"use client";

import { useState } from "react";
import { DollarSign, Heart, ArrowRight, X } from "lucide-react";

export default function ActionButtons() {
  const [saved, setSaved] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [closing, setClosing] = useState(false);

  const cashbackRates = [
    {
      rate: "12%",
      description:
        "Cashback for New Users of AJIO (Excluding Gold/Silver Fine Jewellery: 0.25% Cashback)",
    },
    {
      rate: "10%",
      description:
        "Cashback for Existing Users of AJIO (Excluding Gold/Silver Fine Jewellery: 0.25% Cashback)",
    },
  ];

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setShowSidebar(false);
      setClosing(false);
    }, 300); 
  };

  return (
    <div className="border rounded-3xl p-5 inline-block space-y-4 flex-col gap-5 bg-white border-gray-300 shadow-lg hover:shadow-xl transition-all w-full max-w-2xl">
      
      {/* Rewards Button */}
      <button
        onClick={() => setShowSidebar(true)}
        className="text-blue-600 font-medium flex items-center gap-1 hover:underline"
      >
        View Rewards Rates
        <ArrowRight className="w-4 h-4" />
      </button>

      {/* Buttons row */}
      <div className="flex gap-3">
        {/* Earn Button */}
        <button
          className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-xl 
          border-2 border-black font-medium shadow 
          hover:bg-white hover:text-black transition"
        >
          <DollarSign className="w-5 h-5" />
          Earn
        </button>

        {/* Save Button */}
        <button
          onClick={() => setSaved(!saved)}
          className={`flex items-center justify-center px-4 py-3 rounded-xl border-2 shadow transition ${
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

      {/* popup sidebar */}
      {showSidebar && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
              closing ? "opacity-0" : "opacity-100"
            }`}
            onClick={handleClose}
          />

          {/* Sidebar */}
          <div
            className={`relative bg-white w-[400px] h-full shadow-2xl transform transition-transform duration-300 ${
              closing ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <h2 className="text-lg font-bold text-gray-800">Cashback Rates</h2>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-black"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* List */}
            <div className="divide-y divide-gray-200">
              {cashbackRates.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 px-6 py-5 hover:bg-gray-50 transition"
                >
                  <span className="text-orange-600 font-bold text-lg min-w-[3rem]">
                    {item.rate}
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
