"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { onlineStores, OnlineStore } from "@/data/onlineStores";
import { localStores, LocalStore } from "@/data/localStores";

export default function FinanceCompany() {
  const [activeTab, setActiveTab] = useState<"onlineStores" | "localStores">("onlineStores");
  const router = useRouter();

  return (
    <div className="w-full p-6 text-black font-sans">
      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab("onlineStores")}
          className={`pb-2 px-4 font-medium transition ${
            activeTab === "onlineStores"
              ? "border-b-2 border-black text-black"
              : "text-gray-600 hover:text-gray-700"
          }`}
        >
          Online Stores
        </button>
        <button
          onClick={() => setActiveTab("localStores")}
          className={`pb-2 px-4 font-medium transition ${
            activeTab === "localStores"
              ? "border-b-2 border-black text-black"
              : "text-gray-600 hover:text-gray-700"
          }`}
        >
          Local Stores
        </button>
      </div>

      {/* Online Stores Tab */}
      {activeTab === "onlineStores" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {onlineStores.map((store: OnlineStore) => (
            <div
              key={store.id}
              className="flex justify-between items-center border border-gray-300 rounded-2xl p-4 shadow-sm cursor-pointer hover:shadow-md transition"
              onClick={() => router.push(`/admin/finance/${store.id}`)}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center border rounded-xl overflow-hidden">
                  <Image
                    src={store.logo}
                    alt={`${store.name} logo`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{store.name}</h2>
                  <p className="text-sm">{store.status}</p>
                  <p className="text-sm">Category: {store.category.join(", ")}</p>
                  <p className="text-sm">Date Registered: {store.dateRegistered}</p>
                </div>
              </div>
              <div className="text-xl font-semibold">${store.balance}000</div>
            </div>
          ))}
        </div>
      )}

      {/* Local Stores Tab */}
      {activeTab === "localStores" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {localStores.map((store: LocalStore) => (
            <div
              key={store.id}
              className="flex justify-between items-center border border-gray-300 rounded-2xl p-4 shadow-sm cursor-pointer hover:shadow-md transition"
              onClick={() => router.push(`/admin/finance/${store.id}`)}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center border rounded-xl overflow-hidden">
                  <Image
                    src={store.logo || "/logos/store-placeholder.png"}
                    alt={`${store.name} logo`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{store.name}</h2>
                  <p className="text-sm">{store.status}</p>
                  <p className="text-sm">Location: {store.location}</p>
                  <p className="text-sm">Date Registered: {store.dateRegistered}</p>
                </div>
              </div>
              <div className="text-xl font-semibold">${store.balance}000</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
