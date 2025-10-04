"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { companies, Company } from "../Data/Comapany"
import { formatINR } from "./Format"
import { FinanceDetailPanel } from "./FinanceDetails";

type Selected = { id: string; name: string; logo: string; category?: string[]; location?: string; dateRegistered?: string; website?: string };

export default function FinanceCompany() {
  const [activeTab, setActiveTab] = useState<"onlineStores" | "localStores">("onlineStores");
  const [show, setShow] = useState(false);
  const [sel, setSel] = useState<Selected | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) setShow(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setShow(false);
    }
    if (show) {
      document.addEventListener("mousedown", onDown);
      document.addEventListener("keydown", onKey);
    }
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [show]);

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
          {companies.filter(c => c.kind === 'online').map((store: Company) => (
            <div
              key={store.id}
              className="flex justify-between items-center border border-gray-300 rounded-2xl p-4 shadow-sm cursor-pointer hover:shadow-md transition"
onClick={() => { setSel({ id: store.id, name: store.name, logo: store.logo, category: store.meta.category, dateRegistered: store.meta.dateRegistered, website: store.contact?.website }); setShow(true); }}
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
                  <p className="text-sm capitalize">{store.status}</p>
                  {store.meta.category && <p className="text-sm">Category: {store.meta.category.join(", ")}</p>}
                  <p className="text-sm">Date Registered: {store.meta.dateRegistered}</p>
                </div>
              </div>
              <div className="text-xl font-semibold">{formatINR((store.metrics?.revenuePaise ?? 0) / 100)}</div>
            </div>
          ))}
        </div>
      )}

      {/* Local Stores Tab */}
      {activeTab === "localStores" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companies.filter(c => c.kind === 'local').map((store: Company) => (
            <div
              key={store.id}
              className="flex justify-between items-center border border-gray-300 rounded-2xl p-4 shadow-sm cursor-pointer hover:shadow-md transition"
onClick={() => { setSel({ id: store.id, name: store.name, logo: store.logo || "/logos/store-placeholder.png", location: store.locations?.[0]?.city, dateRegistered: store.meta.dateRegistered }); setShow(true); }}
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
                  <p className="text-sm capitalize">{store.status}</p>
                  {store.locations?.[0]?.city && <p className="text-sm">Location: {store.locations[0].city}</p>}
                  <p className="text-sm">Date Registered: {store.meta.dateRegistered}</p>
                </div>
              </div>
              <div className="text-xl font-semibold">{formatINR((store.metrics?.revenuePaise ?? 0) / 100)}</div>
            </div>
          ))}
        </div>
      )}
      {show && sel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div ref={modalRef} className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl p-6 max-h-[90vh] overflow-y-auto">
            <button aria-label="Close" onClick={() => setShow(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">✕</button>
<FinanceDetailPanel companyId={sel.id} companyName={sel.name} logoSrc={sel.logo} category={sel.category} location={sel.location} dateRegistered={sel.dateRegistered} website={sel.website} />
          </div>
        </div>
      )}
    </div>
  );
}