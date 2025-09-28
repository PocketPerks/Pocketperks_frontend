"use client";

import React, { useState } from "react";
import { User } from "../types";
import { Avatar } from "./Avatar";
import { Identity } from "./Identity";
import { ContactMeta } from "./ContactMeta";
import { MoneyPill } from "./MoneyPill";
import { Footer } from "./Footer";
import { UserDetailsModal } from "../UserDetailsModal/UserDetailsModal";

export function UserCard({ user }: { user: User }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition">
      <MoneyPill amount={user.cbEarned} />
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start">
          <Avatar src={user.avatar} alt={user.name} />
          <div className="mt-3 text-center sm:text-left">
            <Identity name={user.name} status={user.status} role={user.role} />
            <ContactMeta id={user.id} phone={user.phone} email={user.email} />
          </div>
        </div>
      </div>
      <Footer joined={user.joined} lastLogin={user.lastLogin} onView={() => setOpen(true)} />
      {open && <UserDetailsModal user={user} onClose={() => setOpen(false)} />}
    </div>
  );
}
