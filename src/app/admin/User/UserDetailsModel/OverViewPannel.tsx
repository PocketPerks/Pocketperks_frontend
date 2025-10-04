
"use client";

import { Hash, Mail, User as UserIcon, Calendar } from "lucide-react";
import { formatINR , formatId6 , statusChipClass } from "../format";
import { User } from "../types";

export function OverviewPanel({ user }: { user: User }) {
  return (
    <div className="mt-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl border p-4"><p className="text-xs text-gray-500">Total cashback</p><p className="text-xl font-semibold">{formatINR(user.cbEarned)}</p></div>
        <div className="rounded-xl border p-4"><p className="text-xs text-gray-500">Status</p><div className="mt-1"><span className={statusChipClass(user.status)}>{user.status}</span></div></div>
        <div className="rounded-xl border p-4"><p className="text-xs text-gray-500">Joined</p><p className="text-sm">{user.joined || '-'}</p></div>
        <div className="rounded-xl border p-4"><p className="text-xs text-gray-500">Last login</p><p className="text-sm">{user.lastLogin || '-'}</p></div>
      </div>
      <div className="rounded-xl border p-4">
        <h3 className="text-base font-semibold mb-2">About user</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-2"><Hash className="w-4 h-4" /><span>#{formatId6(user.id)}</span></div>
          <div className="flex items-center gap-2"><Mail className="w-4 h-4" /><span className="break-all">{user.email}</span></div>
          {user.role && <div className="flex items-center gap-2"><UserIcon className="w-4 h-4" /><span>{user.role}</span></div>}
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{user.joined || '-'}</span></div>
        </div>
      </div>
    </div>
  );
}
