"use client";

import {
  Building2,
  Users as UsersIcon,
  MessageSquareMore,
  FileChartColumnIncreasing,
} from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Finance from "@/components/admin/Finance";
import Company from "@/components/admin/Company";
import Chat from "@/components/admin/Chat";
import { IoColorPaletteOutline } from "react-icons/io5";
import UsersPage from "@/components/admin/Users";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("Company");
  const tabs = [
    { label: "Company", icon: Building2 },
    { label: "Users", icon: UsersIcon },
    { label: "Chat", icon: MessageSquareMore },
    { label: "Finance", icon: FileChartColumnIncreasing },
    { label: "Customize", icon: IoColorPaletteOutline },
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
        <section className="flex-1 bg-white rounded-2xl shadow">
          {activeTab === "Finance" && <Finance />}
          {activeTab === "Company" && <Company />}
          {activeTab === "Users" && <UsersPage />}
          {activeTab === "Chat" && <Chat />}
          {/* {activeTab === "Customize" && <customize />} */}
        </section>
      </div>
    </main>
  );
}
