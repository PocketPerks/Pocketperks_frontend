"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Earnings from "@/components/profile/Earnings";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Earnings");
  const tabs = ["Earnings", "Settings"];

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 pt-16">
      <Navbar />

      <div className="flex flex-1 p-6 gap-6">
        {/* Sidebar */}
        <aside className="w-64 bg-white rounded-2xl shadow p-4 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-2 rounded-xl font-medium transition border
                ${
                  activeTab === tab
                    ? "bg-black text-white border-black"
                    : "text-gray-700 border-transparent hover:border-black hover:bg-gray-100"
                }`}
            >
              {tab}
            </button>
          ))}
        </aside>

        {/* Content */}
        <section className="flex-1 bg-white rounded-2xl shadow p-6">
          {activeTab === "Earnings" && <Earnings />}
        </section>
      </div>

      <Footer />
    </main>
  );
}
