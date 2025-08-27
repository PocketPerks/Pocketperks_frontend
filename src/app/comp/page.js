"use client";
import React, { useState } from "react";

export default function CashbackPage() {
  const [store, setStore] = useState("flipkart");

  const flipkartData = {
    storeName: "Flipkart",
    bannerImage:
      "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png",
    couponTitle: "Flipkart Coupon Codes",
    couponDesc: "Flipkart is India's largest marketplace...",
    rating: "⭐ 4.9 / 5",
    reviews: "(1800 Ratings)",
    cashback: "7% Cashback",
    cashbackDesc: "on Fashion, Lifestyle and more",
    btnText: "Earn Cashback on Flipkart →",
    btnLink: "https://www.flipkart.com",
    timeline: [
      { value: "1", label: "Hours Cashback Tracks" },
      { value: "35", label: "Days Cashback Confirms" },
      { value: "YES", label: "Cashback on App Orders" },
    ],
    terms: [
      "Do not add products to your cart before visiting Flipkart via CashKaro.",
      "Cashback is calculated after deducting Supercoins.",
      "Not applicable on Flipkart Health & Flight Bookings.",
    ],
  };

  const amazonData = {
    storeName: "Amazon",
    bannerImage: "https://pngimg.com/uploads/amazon/amazon_PNG11.png",
    couponTitle: "Amazon Coupon Codes",
    couponDesc: "Amazon is the world’s biggest e-commerce platform...",
    rating: "⭐ 4.7 / 5",
    reviews: "(2500 Ratings)",
    cashback: "5% Cashback",
    cashbackDesc: "on Electronics, Grocery and more",
    btnText: "Earn Cashback on Amazon →",
    btnLink: "https://www.amazon.in",
    timeline: [
      { value: "2", label: "Hours Cashback Tracks" },
      { value: "30", label: "Days Cashback Confirms" },
      { value: "YES", label: "Cashback on App Orders" },
    ],
    terms: [
      "Do not use gift cards for Cashback eligibility.",
      "Cashback is calculated on final amount paid.",
      "Not valid on Amazon Prime subscription.",
    ],
  };

  const data = store === "flipkart" ? flipkartData : amazonData;

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Black Box */}
        <div className="bg-black h-64 md:h-80 rounded-xl flex items-center justify-center text-white text-xl font-bold">
          <img
            src={data.bannerImage}
            alt={`${data.storeName} banner`}
            className="h-full w-full object-contain rounded-xl"
          />
        </div>

        {/* Right Two Boxes */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {/* Box 1 */}
          <div className="border rounded-xl p-4 shadow">
            <h2 className="text-lg font-semibold">{data.couponTitle}</h2>
            <p className="text-sm text-gray-600">{data.couponDesc}</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-yellow-500">{data.rating}</span>
              <span className="text-sm text-gray-500">{data.reviews}</span>
            </div>
          </div>

          {/* Box 2 */}
          <div className="border rounded-xl p-4 shadow">
            <h2 className="text-xl font-bold">
              Upto <span className="text-red-600">{data.cashback}</span>
            </h2>
            <p className="text-sm text-gray-600">{data.cashbackDesc}</p>
            <button
              onClick={() => window.open(data.btnLink, "_blank")}
              className="mt-3 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              {data.btnText}
            </button>
          </div>
        </div>
      </div>

      {/* Timeline Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {data.timeline.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow text-center"
          >
            <h3 className="text-2xl font-bold">{item.value}</h3>
            <p className="text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Terms & Conditions */}
      <div className="border rounded-xl p-6 shadow mt-8">
        <h2 className="text-lg font-semibold mb-2">
          Important Terms & Conditions
        </h2>
        <ul className="list-disc pl-6 text-sm text-gray-600 space-y-1">
          {data.terms.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>
        <a href="#" className="text-blue-600 mt-2 inline-block">
          View All Terms & Conditions →
        </a>
      </div>

      {/* Store Switcher Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => setStore("flipkart")}
          className={`px-4 py-2 rounded-lg ${
            store === "flipkart"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Flipkart
        </button>
        <button
          onClick={() => setStore("amazon")}
          className={`px-4 py-2 rounded-lg ${
            store === "amazon"
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Amazon
        </button>
      </div>
    </div>
  );
}
