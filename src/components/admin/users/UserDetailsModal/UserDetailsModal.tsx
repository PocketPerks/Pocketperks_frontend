"use client";

import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { User } from "../types";
import { Header } from "./Header";
import { Tabs, TabKey } from "./Tabs";
import { OverviewPanel } from "./OverviewPanel";
import { TransactionsTable, Tx } from "./TransactionsTable";
import { VisitsGrid } from "./VisitsGrid";

export function UserDetailsModal({ user, onClose }: { user: User; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<TabKey>("overview");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const rows: Tx[] = [
    { id: "TX1001", name: "Product A", date: "2025-09-20", amount: 20 },
    { id: "TX1002", name: "Product B", date: "2025-09-22", amount: 30 },
    { id: "TX1003", name: "Product C", date: "2025-09-23", amount: 10 },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4 overflow-auto">
      <div ref={modalRef} className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl p-6 max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" aria-label="Close">
          <X className="w-6 h-6" />
        </button>
        <Header user={user} />
        <Tabs value={tab} onChange={setTab} />
        {tab === "overview" && <OverviewPanel user={user} />}
        <div className={tab === "transactions" ? "mt-6" : "hidden"}>
          <TransactionsTable rows={rows} />
        </div>
        <div className={tab === "visits" ? "mt-6" : "hidden"}>
          <VisitsGrid />
        </div>
      </div>
    </div>
  );
}
