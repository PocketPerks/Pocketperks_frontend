
"use client";

import { CheckCircle, MinusCircle, Users as UsersIcon, Ban } from "lucide-react";

export function QuickStats({ total, active, inactive, suspended }: { total: number; active: number; inactive: number; suspended: number; }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/60 backdrop-blur p-4 shadow-sm">
        <div className="w-9 h-9 rounded-lg bg-gray-100 grid place-items-center text-gray-700">
          <UsersIcon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-gray-500">Total users</p>
          <p className="text-lg font-semibold">{total}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/60 backdrop-blur p-4 shadow-sm">
        <div className="w-9 h-9 rounded-lg bg-green-50 grid place-items-center text-green-600">
          <CheckCircle className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-gray-500">Active</p>
          <p className="text-lg font-semibold">{active}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/60 backdrop-blur p-4 shadow-sm">
        <div className="w-9 h-9 rounded-lg bg-amber-50 grid place-items-center text-amber-600">
          <MinusCircle className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-gray-500">Inactive</p>
          <p className="text-lg font-semibold">{inactive}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/60 backdrop-blur p-4 shadow-sm">
        <div className="w-9 h-9 rounded-lg bg-red-50 grid place-items-center text-red-600">
          <Ban className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-gray-500">Suspended</p>
          <p className="text-lg font-semibold">{suspended}</p>
        </div>
      </div>
    </div>
  );
}