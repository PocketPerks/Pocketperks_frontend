"use client";

import { Calendar, Clock, Pencil, Eye, Ban } from "lucide-react";
import { IconButton } from "./IconButton";

export function Footer({ joined, lastLogin, onEdit, onView, onSuspend }: { joined?: string; lastLogin?: string; onEdit?: () => void; onView?: () => void; onSuspend?: () => void; }) {
  return (
    <div className="mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs text-gray-600 mb-2">
        {joined && (
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>Joined {joined}</span>
          </div>
        )}
        {lastLogin && (
          <div className="flex items-center gap-1 sm:justify-end">
            <Clock className="w-4 h-4" />
            <span>Last login {lastLogin}</span>
          </div>
        )}
      </div>
      <div className="border-t border-gray-300"></div>
      <div className="mt-2 flex items-center justify-center gap-3 pb-0">
        <IconButton title="Edit user" onClick={onEdit}><Pencil className="w-6 h-6 text-gray-600" /></IconButton>
        <IconButton title="View details" onClick={onView}><Eye className="w-6 h-6 text-gray-600" /></IconButton>
        <IconButton title="Suspend user" onClick={onSuspend} variant="danger"><Ban className="w-6 h-6 text-red-600" /></IconButton>
      </div>
    </div>
  );
}
