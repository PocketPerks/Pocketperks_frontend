"use client";

import React, { useState } from "react";

const EarningsCardsSection = ({ activeTab }: { activeTab: string }) => {
  const pendingData = [
    { productName: "Product name", companyName: "company name", price: "000" },
    { productName: "Product name", companyName: "company name", price: "000" },
    { productName: "Product name", companyName: "company name", price: "000" },
  ];

  const paidData = [
    { productName: "Product name", companyName: "company name", price: "000" },
    { productName: "Product name", companyName: "company name", price: "000" },
    { productName: "Product name", companyName: "company name", price: "000" },
  ];

  const confirmedData = [
    { productName: "Product name", companyName: "company name", price: "000" },
    { productName: "Product name", companyName: "company name", price: "000" },
    { productName: "Product name", companyName: "company name", price: "000" },
  ];

  const Card = ({
    title,
    status,
    amount,
    items,
  }: {
    title: string;
    status: string;
    amount: string;
    items: { productName: string; companyName: string; price: string }[];
  }) => {
    return (
      <div className="flex flex-col p-4 bg-gray-100 border border-gray-300 rounded-xl shadow-md">
        <div className="flex justify-between items-start mb-4 text-gray-700">
          <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
          <span className="text-sm font-medium uppercase">{status}</span>
        </div>
        <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          ₹{amount}
        </div>
        <div className="flex flex-col space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-200"
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">
                  {item.productName}
                </span>
                <span className="text-xs text-gray-500">
                  {item.companyName}
                </span>
                <a
                  href="#"
                  className="text-xs text-blue-500 hover:underline"
                >
                  Link
                </a>
              </div>
              <span className="text-sm font-semibold text-gray-900">
                ₹{item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      <Card title="Pending" status="in process" amount="0000" items={pendingData} />
      <Card title="Paid" status="collected" amount="0000" items={paidData} />
      <Card title="Confirmed" status="used" amount="0000" items={confirmedData} />
    </div>
  );
};

export default function EarningsPage() {
  const [activeTab, setActiveTab] = useState("Cashbacks");

  const tabs = ["Cashbacks", "Rewards", "Referrals"];

  return (
    <div className="bg-white text-gray-900 p-4 md:p-8 font-sans flex flex-col items-center">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 sm:mb-0">
              Earnings
            </h1>
          </div>
          <div className="flex-1 flex justify-end items-center space-x-4">
            <div className="text-4xl md:text-5xl font-bold">₹{"0000"}</div>
          </div>
        </header>

        {/* Tabs */}
        <nav className="flex items-center space-x-6 md:space-x-8 mb-8 border-b border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 text-lg md:text-xl font-medium relative transition-all duration-300 ${
                activeTab === tab
                  ? "text-gray-900 after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[3px] after:bg-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Cards */}
        <EarningsCardsSection activeTab={activeTab} />
      </div>
    </div>
  );
}
