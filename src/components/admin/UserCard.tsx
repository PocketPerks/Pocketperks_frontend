"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Pencil, Eye, Ban, X, User, Calendar, Clock } from "lucide-react";

export interface User {
  id: number;
  name: string;
  email: string;
  status: string;
  cbEarned: number;
  avatar: string;
  role?: string;
  joined?: string;
  lastLogin?: string;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [showView, setShowView] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const statusLower = user.status.toLowerCase();
  const isActive = statusLower === "active";

  const ringColor = isActive
    ? "from-green-400 to-green-600"
    : "from-red-400 to-red-600";

  const dotColor = isActive ? "bg-green-500" : "bg-red-500";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowView(false);
      }
    }
    if (showView) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showView]);

  return (
    <>
      {/* Card */}
      <div
        className="relative flex items-center justify-between bg-white/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 p-5 border border-gray-200 cursor-pointer"
      >
        {/* Avatar */}
        <div className="flex-shrink-0 relative w-16 h-16">
          <div className={`rounded-full p-1 bg-gradient-to-tr ${ringColor}`}>
            <Image
              src={user.avatar}
              alt={user.name}
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 px-5">
          <h2 className="text-lg font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
            {user.name}
          </h2>
          <p className="text-xs text-gray-400">ID: {user.id}</p>

          <div className="flex items-center gap-2 mt-1">
            <p className="text-sm text-gray-500 truncate">{user.email}</p>
            <span className={`w-2.5 h-2.5 rounded-full ${dotColor}`} />
            <p className="text-sm text-gray-500 truncate">MobileNo.</p>
          </div>

          <div className="mt-2 flex flex-wrap gap-4 text-xs text-gray-500">
            {user.role && (
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" /> {user.role}
              </div>
            )}
            {user.joined && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {user.joined}
              </div>
            )}
            {user.lastLogin && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {user.lastLogin}
              </div>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-shrink-0 text-right space-y-2">
          <div>
            <p className="text-gray-400 text-sm">Cashback</p>
            <p className="text-xl font-bold text-gray-900">
              ${user.cbEarned.toLocaleString()}
            </p>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setShowEdit(true)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <Pencil className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => setShowView(true)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <Eye className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition">
              <Ban className="w-5 h-5 text-red-600" />
            </button>
          </div>
        </div>
      </div>

      {/* View Modal */}
      {showView && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4 overflow-auto">
          <div
            ref={modalRef}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl p-6 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowView(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-6 gap-6">
              <div className="flex items-center gap-4 md:pr-6 md:border-r border-gray-200 flex-1">
                <div className="w-24 h-24 rounded-full border-2 border-gray-300 overflow-hidden">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">#{user.id}</p>
                  <h2 className="text-2xl font-bold">{user.name}</h2>
                  <p className="text-sm text-gray-600">{user.email}</p>
                  <p className="text-sm">
                    Status:{" "}
                    <span className={`font-semibold ${isActive ? "text-green-600" : "text-red-600"}`}>
                      {user.status}
                    </span>
                  </p>
                </div>
              </div>
              <div className="text-3xl md:text-5xl font-bold text-gray-800 mt-4 md:mt-0 md:pl-6 flex-shrink-0">
                ${user.cbEarned.toLocaleString()}
              </div>
            </div>

            {/* Transactions + Stores Grid */}
            <div className="mt-6 flex flex-col gap-6">

              {/* Transactions Table */}
              <div className="w-full space-y-2">
                <h3 className="text-lg font-semibold mb-2">Transactions</h3>

                {/* Table Header */}
                <div className="grid grid-cols-4 gap-4 px-4 py-2 bg-gray-50 border-b border-gray-200 font-medium text-gray-600 rounded-t-xl">
                  <div>ID</div>
                  <div>Product / Store</div>
                  <div>Date</div>
                  <div className="text-right">Amount</div>
                </div>

                {/* Transaction Rows */}
                {[
                  { id: "TX1001", name: "Product A", date: "2025-09-20", amount: 20 },
                  { id: "TX1002", name: "Product B", date: "2025-09-22", amount: 30 },
                  { id: "TX1003", name: "Product C", date: "2025-09-23", amount: 10 }
                ].map((tx, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-4 gap-4 px-4 py-3 border-b last:border-b-0 hover:bg-gray-50 transition cursor-pointer"
                  >
                    <div className="text-gray-500 font-mono">{tx.id}</div>
                    <div className="font-medium">{tx.name}</div>
                    <div className="text-gray-500 text-sm">{tx.date}</div>
                    <div className="text-green-600 font-semibold text-right">+ ${tx.amount}</div>
                  </div>
                ))}
              </div>

              {/* Stores & Sites Visited Grid */}
              <div className="w-full">
                <h3 className="text-lg font-semibold mb-3">Stores & Sites Visited</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((_, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col justify-between border border-gray-300 shadow-sm rounded-xl p-4 hover:shadow-md transition"
                    >
                      <div>
                        <p className="font-medium">Store / Product {idx + 1}</p>
                        <p className="text-xs text-gray-500">Company Name</p>
                        <p className="text-xs text-indigo-500 underline cursor-pointer">
                          Store link
                        </p>
                      </div>
                      <div className="mt-2 text-center">
                        <p className="font-mono bg-gray-100 px-3 py-1 rounded-md">
                          Code
                        </p>
                        <p className="text-[10px] text-gray-500 mt-1">
                          Valid till July 27
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserCard;
