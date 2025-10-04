"use client";

import { useMemo, useState } from "react";
import { User } from "../types";
import { normalizePhone } from "../format";

export type StatusFilter = "all" | "active" | "inactive" | "suspended";
export type SortBy = "lastLogin" | "joined" | "cashback" | "name";

export function useUserFilters(users: User[]) {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [sortBy, setSortBy] = useState<SortBy>("lastLogin");

  const counts = useMemo(() => {
    return {
      total: users.length,
      active: users.filter((u) => (u.status || "").toLowerCase() === "active").length,
      inactive: users.filter((u) => (u.status || "").toLowerCase() === "inactive").length,
      suspended: users.filter((u) => (u.status || "").toLowerCase() === "suspended").length,
    };
  }, [users]);

  const filteredSorted = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = users
      .filter((u) => {
        const matchesQuery =
          !q ||
          u.name.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q) ||
          (u.phone ? normalizePhone(u.phone).toLowerCase().includes(q.replace(/\s+/g, "")) : false);
        const status = (u.status || "").toLowerCase();
        const matchesStatus = statusFilter === "all" || status === statusFilter;
        return matchesQuery && matchesStatus;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "lastLogin": {
            const aT = a.lastLogin ? new Date(a.lastLogin).getTime() : 0;
            const bT = b.lastLogin ? new Date(b.lastLogin).getTime() : 0;
            return bT - aT;
          }
          case "joined": {
            const aT = a.joined ? new Date(a.joined).getTime() : 0;
            const bT = b.joined ? new Date(b.joined).getTime() : 0;
            return bT - aT;
          }
          case "cashback":
            return (b.cbEarned || 0) - (a.cbEarned || 0);
          case "name":
            return a.name.localeCompare(b.name);
          default:
            return 0;
        }
      });
    return list;
  }, [users, query, statusFilter, sortBy]);

  return { query, setQuery, statusFilter, setStatusFilter, sortBy, setSortBy, counts, filteredSorted };
}