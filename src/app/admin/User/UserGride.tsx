"use client";

import React from "react";
import { User } from "./types";
import { UserCard } from "./UserCard/UserCard";

export function UsersGrid({ users }: { users: User[] }) {
  if (users.length === 0) {
    return <div className="rounded-xl border border-gray-200 bg-white p-10 text-center text-gray-600">No users match your filters.</div>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {users.map((u) => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  );
}