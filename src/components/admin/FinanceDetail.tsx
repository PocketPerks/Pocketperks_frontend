"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Wallet,
  ArrowDownCircle,
  ArrowUpCircle,
  Users,
  BarChart3,
} from "lucide-react";

export default function Finance() {
  const router = useRouter();

  const [transactions] = useState([
    {
      id: "TXN001",
      user: "John Doe",
      partner: "Amazon",
      amount: 1200,
      cashback: 120,
      status: "Approved",
      date: "2025-09-21",
    },
    {
      id: "TXN002",
      user: "Aditi Sharma",
      partner: "Flipkart",
      amount: 800,
      cashback: 80,
      status: "Pending",
      date: "2025-09-20",
    },
  ]);

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br text-black from-gray-100 via-gray-50 to-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
        Company Finance
      </h1>

      {/* Back button */}
      <button
        onClick={() => router.push("/admin#finance")}
        className="px-5 py-2 rounded-lg bg-white/80 backdrop-blur border border-gray-200 shadow-sm hover:shadow-md hover:bg-white transition"
      >
        ← Back to Companies
      </button>

      {/* Company Header */}
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-md p-6 flex flex-col md:flex-row justify-between gap-8 hover:shadow-lg transition">
        {/* Left*/}
        <div className="flex gap-5 items-center">
          <img
            src="/logos/amazon.png"
            alt="Amazon Logo"
            className="w-20 h-20 object-contain rounded-xl border bg-gray-50"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Amazon</h2>
            <p className="text-sm text-gray-600">Industry: Commerce, Pharma</p>
            <p className="text-sm text-gray-600">
              Date of Incorporation: 10-01-2018
            </p>
            <p className="text-sm text-gray-600">Date Registered: 20-04-2025</p>
            <p className="text-sm text-green-600 font-semibold">
              Payment Gateway: Active
            </p>
          </div>
        </div>

        {/*GST*/}
        <div className="flex flex-col justify-between items-end text-sm">
          <div className="text-gray-700">
            <p>
              <span className="font-medium">GST:</span> GST1234ABCD
            </p>
            <p>
              <span className="font-medium">PAN:</span> ABCDE1234F
            </p>
          </div>
          <div className="flex gap-3 mt-4">
            <button className="px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm hover:bg-gray-100 hover:shadow transition">
              E/D
            </button>
            <button className="px-4 py-1.5 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-lg text-sm hover:bg-indigo-100 hover:shadow transition">
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard
          title="Total Revenue"
          value="₹1,20,000"
          icon={<Wallet className="w-6 h-6 text-indigo-600" />}
        />
        <SummaryCard
          title="Cashback Paid"
          value="₹35,000"
          icon={<ArrowDownCircle className="w-6 h-6 text-green-600" />}
        />
        <SummaryCard
          title="Pending Payouts"
          value="₹5,200"
          icon={<ArrowUpCircle className="w-6 h-6 text-red-600" />}
        />
        <SummaryCard
          title="Active Users"
          value="1,024"
          icon={<Users className="w-6 h-6 text-purple-600" />}
        />
      </div>

      {/* Transactions Table */}
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800">
          <BarChart3 className="w-5 h-5 text-indigo-500" /> Transactions
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-700">
                <th className="px-4 py-3 text-left">Txn ID</th>
                <th className="px-4 py-3 text-left">User</th>
                <th className="px-4 py-3 text-left">Partner</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Cashback</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Aproval</th>
                <th className="px-4 py-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr
                  key={txn.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">{txn.id}</td>
                  <td className="px-4 py-3">{txn.user}</td>
                  <td className="px-4 py-3">{txn.partner}</td>
                  <td className="px-4 py-3 font-medium">₹{txn.amount}</td>
                  <td className="px-4 py-3 text-green-600 font-medium">
                    ₹{txn.cashback}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        txn.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {txn.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{txn.date}</td>
                  <td className="px-4 py-3 text-gray-600">{txn.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Report */}
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Reports & Analytics
        </h2>
        <div className="h-64 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
          [Charts Placeholder – integrate Recharts or Chart.js]
        </div>
      </div>
    </div>
  );
}

function SummaryCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg hover:scale-[1.02] transition">
      <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl shadow-inner">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
}
