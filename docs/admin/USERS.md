# Users Module

This document describes the Users module we created/refactored under `src/components/admin/users/`.

## Overview
A composable Users module with:
- Quick stats (Total/Active/Inactive/Suspended)
- Search + sort + status filters
- Responsive grid of user cards
- Polished card design with INR money pill, chips, and dates footer
- View details modal with tabs (Overview, Transactions, Visits)

## File tree
```
src/components/admin/users/
├─ index.ts
├─ types.ts
├─ format.ts
├─ data/
│  └─ users.mock.ts
├─ hooks/
│  └─ useUserFilters.ts
├─ QuickStats.tsx
├─ Toolbar/
│  ├─ SearchBar.tsx
│  ├─ SortSelect.tsx
│  └─ StatusChips.tsx
├─ UsersGrid.tsx
├─ UserCard/
│  ├─ UserCard.tsx
│  ├─ Avatar.tsx
│  ├─ Identity.tsx
│  ├─ ContactMeta.tsx
│  ├─ MoneyPill.tsx
│  ├─ Footer.tsx
│  └─ IconButton.tsx
└─ UserDetailsModal/
   ├─ UserDetailsModal.tsx
   ├─ Header.tsx
   ├─ Tabs.tsx
   ├─ OverviewPanel.tsx
   ├─ TransactionsTable.tsx
   └─ VisitsGrid.tsx
```

## Types
- `User` (types.ts):
  - `id: number` (displayed via `formatId6`)
  - `name, email, phone?`
  - `status: string` (Active/Inactive/Suspended)
  - `role?, joined?, lastLogin?`
  - `cbEarned: number` (rupees)
  - `avatar: string`

## Helpers (format.ts)
- `formatId6(id)` => `#000123`
- `formatINR(n)` => `₹1,20,000`
- `normalizePhone(str)`
- `statusChipClass(status)`

## Hook: useUserFilters
- Inputs: users (from mock for now)
- Returns:
  - `query, setQuery`
  - `statusFilter, setStatusFilter` (all/active/inactive/suspended)
  - `sortBy, setSortBy` (lastLogin/joined/cashback/name)
  - `counts` (for QuickStats and chips)
  - `filteredSorted` (derived list)

## UI notes
- UserCard.money: top-right pill `₹` (no icon), `en-IN` formatting
- Status chip colors (green/amber/red); role chip with icon
- Footer: Joined and Last login above gray divider; centered actions (Edit/View/Suspend)
- Modal: header with avatar, chips, email, large INR; tabs for overview/transactions/visits

## Replace mock data
- Swap `data/users.mock.ts` for an API call and pass results into `useUserFilters`.
- Keep amounts in rupees for UI; handle any backend minor-unit conversion before display if needed.

## Accessibility & UX
- Buttons have aria-labels and focus rings
- ESC and outside-click close supported by the modal component
