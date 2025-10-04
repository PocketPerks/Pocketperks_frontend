"use client";

import { DollarSign, Settings, MessageSquareMore, Users } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Earnings from "@/components/profile/Earnings";
import Chat from "@/components/profile/Chat";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Account");
  const tabs = [
    { label: "Account", icon: Users },
    { label: "Chat", icon: MessageSquareMore },
    { label: "Earnings", icon: DollarSign },
    { label: "Settings", icon: Settings },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex flex-1 p-6 gap-6">
        {/* Sidebar */}
        <aside className="w-64 bg-white rounded-2xl shadow p-4 space-y-2 sticky top-16 h-100vh">
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
        <section className="flex-1 bg-white rounded-2xl shadow overflow-y-auto ">
          {activeTab === "Earnings" && <Earnings />}
          {activeTab === "Settings" && <Settings />}
          {activeTab === "Chat" && <Chat />}
          {activeTab === "Users" && <Users />}
        </section>
      </div>
    </main>
  );
}
