
"use client";

import React from "react";
import { QuickStats } from "../admin/User/Quickstats";
import { SearchBar } from "../admin/User/Toolbar/SearchBar";
import { SortSelect } from "../admin/User/Toolbar/SortSelect";
import { StatusChips } from "../admin/User/Toolbar/StatusChips";
import { UsersGrid } from "../admin/User/UserGride";
import { mockUsers } from "../admin/User/DataMock/User.mock";
import { useUserFilters } from "../admin/User/hooks/useUserFilters";

// Users Page
const UsersPage: React.FC = () => {
  const { query, setQuery, statusFilter, setStatusFilter, sortBy, setSortBy, counts, filteredSorted } = useUserFilters(mockUsers);

  // counts and filtered list derived by the hook

  return (
    <div className="p-6 text-black">
      <div className="mb-4">
        <h1 className="text-2xl md:text-3xl font-bold">Users</h1>
        <p className="text-sm text-gray-500 mt-1">Manage users, filter by status, and sort by activity.</p>
      </div>

      <QuickStats total={counts.total} active={counts.active} inactive={counts.inactive} suspended={counts.suspended} />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
        <SearchBar value={query} onChange={setQuery} />
        <SortSelect value={sortBy} onChange={setSortBy} />
      </div>

      <div className="mb-5">
        <StatusChips value={statusFilter} counts={counts} onChange={setStatusFilter} />
      </div>

      <UsersGrid users={filteredSorted} />
    </div>
  );
};

export default UsersPage;
