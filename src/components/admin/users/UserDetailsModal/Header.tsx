"use client";

import Image from "next/image";
import { Mail, User as UserIcon } from "lucide-react";
import { statusChipClass, formatINR } from "../format";
import { User } from "../types";
import { formatId6 } from "../format";

export function Header({ user }: { user: User }) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-6 gap-6">
      <div className="flex items-center gap-4 md:pr-6 md:border-r border-gray-200 flex-1">
        <div className="w-24 h-24 rounded-full border-2 border-gray-300 overflow-hidden">
          <Image src={user.avatar} alt={user.name} width={96} height={96} className="object-cover" />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-gray-500">#{formatId6(user.id)}</p>
          <h2 className="text-2xl font-bold truncate">{user.name}</h2>
          <div className="mt-1 flex items-center gap-2 text-xs">
            <span className={statusChipClass(user.status)}>{user.status}</span>
            {user.role && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs border bg-gray-50 text-gray-700 border-gray-200">
                <UserIcon className="w-3.5 h-3.5" /> {user.role}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-gray-600 flex items-center gap-1"><Mail className="w-4 h-4" /> {user.email}</p>
        </div>
      </div>
      <div className="flex-shrink-0 md:pl-6 mt-4 md:mt-0">
        <div className="inline-flex items-center rounded-xl bg-gray-50 px-4 py-2 border">
          <span className="text-3xl md:text-5xl font-bold text-gray-800">{formatINR(user.cbEarned)}</span>
        </div>
      </div>
    </div>
  );
}
