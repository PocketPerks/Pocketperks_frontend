"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { User } from "./UserCard"; // assuming User type is exported

interface UserDetailViewProps {
  user: User;
  onClose: () => void;
}

const UserDetailView: React.FC<UserDetailViewProps> = ({ user, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 p-4">
      {/* Modal box */}
      <div
        ref={modalRef}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full border-2 border-gray-300 overflow-hidden">
              <Image
                src={user.avatar}
                alt={user.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">#{user.id}</p>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm">
                status :{" "}
                <span
                  className={`font-semibold ${
                    user.status.toLowerCase() === "active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {user.status}
                </span>
              </p>
            </div>
          </div>
          <div className="text-4xl font-bold text-gray-800">
            ${user.cbEarned.toLocaleString()}
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Left side – Earned products */}
          <div className="space-y-4">
            {[20, 30, 10].map((amount, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border rounded-xl p-4"
              >
                <div>
                  <p className="font-medium">Product name</p>
                  <p className="text-xs text-gray-500">Company name</p>
                  <p className="text-xs text-indigo-500 underline cursor-pointer">
                    Product link
                  </p>
                </div>
                <p className="text-lg font-bold text-gray-700">+ ${amount}</p>
              </div>
            ))}
          </div>

          {/* Right side – Stores visited */}
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Online & Local Stores Visited
            </p>
            {[1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border rounded-xl p-4"
              >
                <div>
                  <p className="font-medium">Product name</p>
                  <p className="text-xs text-gray-500">Store / Company name</p>
                  <p className="text-xs text-indigo-500 underline cursor-pointer">
                    Store link
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-mono bg-gray-100 px-3 py-1 rounded-md">
                    "Code"
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
  );
};

export default UserDetailView;
