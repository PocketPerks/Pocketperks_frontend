"use client";

import { User as UserIcon } from "lucide-react";
import { statusChipClass } from "../format";

export function Identity({ name, status, role }: { name: string; status: string; role?: string }) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{name}</h2>
      <div className="mt-1 flex items-center gap-2 text-xs">
        <span className={statusChipClass(status)}>{status}</span>
        {role && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs border bg-gray-50 text-gray-700 border-gray-200">
            <UserIcon className="w-3.5 h-3.5" /> {role}
          </span>
        )}
      </div>
    </div>
  );
}