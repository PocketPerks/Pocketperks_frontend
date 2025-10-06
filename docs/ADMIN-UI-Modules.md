# Admin UI Modules Documentation

Last updated: 2025-09-28

This document explains the Admin UI modules we refactored today: Users and Finance. It covers folder structure, public APIs, data models, formatting helpers, and integration notes for backend developers.

Contents
- Users module
- Finance module
- Chat module
- Shared conventions
- Migration notes & changelog

---

## Users module

Location: `src/components/admin/users/`

### What changed
- Split a monolithic Users page into a composable module with clearly scoped components.
- Added client‑side filtering, status chips, and sorting.
- Elevated card design (INR money pill, status/role chips, divider with dates, larger actions).
- Converted all currency to INR (₹, `en-IN` grouping); 6‑digit user IDs; optional phone support.
- Extracted a full “View details” modal with tabs (Overview, Transactions, Visits).

### Directory structure
```
src/components/admin/users/
├─ index.ts                      # barrel exports
├─ types.ts                      # User, Status, etc.
├─ format.ts                     # formatId6, formatINR, normalizePhone, statusChipClass
├─ data/
│  └─ users.mock.ts              # sample users (Indian names, phone numbers)
├─ hooks/
│  └─ useUserFilters.ts          # query/status/sort, counts, derived list
├─ QuickStats.tsx                # Total/Active/Inactive/Suspended
├─ Toolbar/
│  ├─ SearchBar.tsx
│  ├─ SortSelect.tsx
│  └─ StatusChips.tsx
├─ UsersGrid.tsx                 # responsive grid for cards
├─ UserCard/
│  ├─ UserCard.tsx               # composition wrapper
│  ├─ Avatar.tsx                 # PFP only (no ring/dot)
│  ├─ Identity.tsx               # name + status/role chips
│  ├─ ContactMeta.tsx            # 6-digit ID, phone, email
│  ├─ MoneyPill.tsx              # top-right INR pill (no icon)
│  ├─ Footer.tsx                 # dates above divider + centered actions
│  └─ IconButton.tsx
└─ UserDetailsModal/
   ├─ UserDetailsModal.tsx       # shell + tab switching
   ├─ Header.tsx                 # avatar, chips, email, INR pill
   ├─ Tabs.tsx
   ├─ OverviewPanel.tsx          # quick stats + about user
   ├─ TransactionsTable.tsx
   └─ VisitsGrid.tsx
```

### Public exports
From `src/components/admin/users/index.ts`:
- Types: `User` (and `Status`)
- Helpers: `formatINR`, `formatId6`, `normalizePhone`
- Hook: `useUserFilters`
- Components: `QuickStats`, `SearchBar`, `SortSelect`, `StatusChips`, `UsersGrid`, `UserCard`, `UserDetailsModal`

### Data model (types.ts)
- `User`:
  - `id: number` (displayed with `formatId6`)
  - `name, email, phone?`
  - `status: string` (Active/Inactive/Suspended)
  - `role?, joined?, lastLogin?`
  - `cbEarned: number` (rupees)
  - `avatar: string`

### Formatting helpers (format.ts)
- `formatId6(id) => "000123"`
- `formatINR(n) => "₹1,20,000"` (uses `en-IN` locale)
- `normalizePhone("+91 98765 43210") => "+919876543210"`
- `statusChipClass(status)` returns Tailwind classes for status chips

### Hook: `useUserFilters`
Returns:
- `query, setQuery`
- `statusFilter, setStatusFilter` (`"all" | "active" | "inactive" | "suspended"`)
- `sortBy, setSortBy` (`"lastLogin" | "joined" | "cashback" | "name"`)
- `counts` (total/active/inactive/suspended)
- `filteredSorted` (derived user list)

### Page integration example
Use `src/components/admin/Users.tsx` (already refactored) or compose from the module:
- `QuickStats` under the header
- Toolbar: `SearchBar`, `SortSelect`, `StatusChips`
- Results: `UsersGrid` of `UserCard`

### Card and modal UX
- Card: name + chips, phone/email, top-right INR pill; dates sit above a gray divider; large centered actions.
- Modal: consistent header, big INR pill; tabs for Overview / Transactions / Visits; INR formatting and 6-digit IDs throughout; ESC and outside-click close handled by the modal component.

### Backend handoff tips
- Replace `data/users.mock.ts` with your API call, then adapt `useUserFilters` to consume the API data.
- Keep INR formatting in the UI (don’t send formatted strings from the backend).
- Ensure IDs are numeric in data; apply `formatId6` only at display time.

---

## Finance module

Location: `src/components/admin/finance/`

### What changed
- Removed dynamic route; clicking a company card opens a modal window with details.
- Normalized datasets for companies and transactions (backend-friendly).
- INR formatting across cards and detail stats; improved header with category/location/date/website.
- Modal supports outside-click and ESC to close; zebra rows and CSV button placeholder in transactions.

### Directory structure
```
src/components/admin/Finance.tsx            # entrypoint for Admin tab
src/components/admin/finance/
├─ Companies/
│  └─ FinanceCompany.tsx                    # lists online/local companies; opens modal
├─ Details/
│  └─ FinanceDetail.tsx                     # FinanceDetailPanel + full-page export
├─ data/
│  ├─ companies.ts                          # normalized dataset + map/getters
│  └─ transactions.ts                       # normalized transactions + listByCompany
└─ format.ts                                # formatINR, formatDate
```

### Entry point
- Import in Admin tab: `import Finance from "@/components/admin/Finance";`
- Old route `src/app/admin/finance/[id]/page.tsx` was removed; no navigation needed.

### Normalized data
- `companies.ts`
  - `Company` fields: `id`, `kind` (online/local), `status`, `logo`, `contact { phone/email/website }`, `legal { gst/pan }`, `meta { category[], tags[], dateRegistered }`, `locations[]`, `metrics { revenuePaise, cashbackPaidPaise, pendingPayoutsPaise }`
  - Exports: `companies[]`, `companiesById`, `listCompanies()`, `getCompanyById(id)`
- `transactions.ts`
  - `Transaction` fields: `id`, `companyId`, `userId`, `amountPaise`, `cashbackPaise`, `status ('approved'|'pending')`, `date (ISO)`
  - Exports: `transactions[]`, `listTransactionsByCompany(companyId)`

### Formatting helpers (format.ts)
- `formatINR(rupees)` for UI (converts rupees, not paise)
- `formatDate(ISO)` => en-IN short date (e.g., 20 Apr 2025)

### Companies list (FinanceCompany.tsx)
- Two tabs (online/local) filter from `companies[]`.
- Right-side amount uses `formatINR((metrics.revenuePaise ?? 0)/100)`.
- Clicking a card opens a modal with `FinanceDetailPanel` and passes `companyId` (along with name/logo/category/location/date/website for immediate display).
- Modal closes with ESC and outside click.

### Finance detail panel (FinanceDetail.tsx)
- If `companyId` is provided, loads full company via `getCompanyById`.
- Header: avatar/logo, name, category chips, location, registered date (formatted), website link, “Payment Gateway: Active” badge.
- Stats: Total Revenue / Cashback Paid / Pending Payouts from `metrics.*Paise` (converted to rupees for display).
- Transactions: loaded from `listTransactionsByCompany(companyId)`; zebra rows; CSV button placeholder.

### Backend handoff tips
- Keep amounts in minor units (paise) in your APIs; convert to rupees in the UI with `formatINR(x/100)`.
- Provide stable `companyId` to join companies and transactions.
- Prefer ISO 8601 dates (YYYY‑MM‑DD) in APIs; use `formatDate` in the UI.

---

## Chat module

Location: `src/components/admin/chat/`

- Modular chat UI with a sidebar (tabs + contacts), message thread, and send box.
- State is encapsulated in `hooks/useChat.ts`; mock data lives under `data/` for easy swapping with APIs.
- Public pieces (from `index.ts`): `ChatPage`, `useChat`, `ChatBubbles`, `ChatInput`, `ChatTabs`, `ContactList`.
- Types: `TabKey`, `Message`, `Contact`, `ConversationMap`.
- Components: `ChatBubbles` (auto‑scroll), `ChatInput`, `ChatTabs`, `ContactList`, `EmptyState`, `Header`.

## Shared conventions
- Tailwind CSS for styling and consistent spacing.
- lucide-react icons.
- All currency displayed as ₹ with `en-IN` locale formatting.
- Escape and outside-click close for modals.

---

## Migration notes & changelog (today)
- Users: introduced `src/components/admin/users/` module; phone support; 6‑digit IDs; INR conversion; redesigned card; extracted modal with tabs.
- Finance: removed `/admin/finance/[id]`; added `Finance.tsx` entry; created normalized `companies.ts` and `transactions.ts`; INR conversion for cards and stats; improved detail panel header.
- Data moved from `src/data/` to `src/components/admin/finance/data/` (and users mock moved under users module earlier).

If you need a PDF, you can convert this Markdown along with the module-specific docs in `docs/admin` using your editor or a CLI (e.g., `pandoc`).
