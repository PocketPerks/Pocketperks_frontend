"use client";

import { Hash, Mail, Phone } from "lucide-react";
import { formatId6 } from "../format";

export function ContactMeta({ id, phone, email }: { id: number; phone?: string; email: string }) {
  return (
    <div className="mt-2 grid grid-cols-1 gap-1 text-sm text-gray-500">
      <span className="inline-flex items-center gap-1">
        <Hash className="w-4 h-4" />
        <span className="font-mono text-xs">#{formatId6(id)}</span>
      </span>
      {phone && (
        <span className="inline-flex items-center gap-1">
          <Phone className="w-4 h-4" />
          <span className="tracking-wide">{phone}</span>
        </span>
      )}
      <span className="inline-flex items-center gap-1 min-w-0">
        <Mail className="w-4 h-4" />
        <span className="truncate max-w-[18rem]">{email}</span>
      </span>
    </div>
  );
}