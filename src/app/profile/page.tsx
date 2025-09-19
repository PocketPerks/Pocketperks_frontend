"use client";

import { DollarSign, Settings, Building2, Users } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Earnings from "@/components/profile/Earnings";
import Company from "@/components/admin/Company";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Earnings");
  const tabs = [
    { label: "Earnings", icon: DollarSign },
    // { label: "Company", icon: Building2 },
    // { label: "Users", icon: Users },
    // { label: "Settings", icon: Settings },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex flex-1 p-6 gap-6">
        {/* Sidebar */}
        <aside className="w-64 bg-white rounded-2xl shadow p-4 space-y-2 sticky top-16 h-[calc(100vh-4rem)]">
          {tabs.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setActiveTab(label)}
              className={`w-full flex items-center gap-3 text-left px-4 py-2 rounded-xl font-medium transition border
                ${
                  activeTab === label
                    ? "bg-black text-white"
                    : "text-gray-700 border-transparent hover:bg-gray-100"
                }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </aside>

        {/* Content */}
        <section className="flex-1 bg-white rounded-2xl shadow p-6 overflow-y-auto h-[calc(100vh-4rem)]">
          {activeTab === "Earnings" && <Earnings />}
          {activeTab === "Settings" && <Settings />}
          {activeTab === "Company" && <Company />}
          {activeTab === "Users" && <Users />}
        </section>
      </div>

      <Footer />
    </main>
  );
}
