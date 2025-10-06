# Finance Module

This document describes the Finance module under `src/components/admin/finance/`.

## Overview
- Company list (online/local) with INR amounts
- Clicking a card opens a modal (no route navigation)
- Normalized datasets for companies and transactions
- Detail panel shows company header, stats, and transactions table

## File tree
```
src/components/admin/Finance.tsx                     # entrypoint used by Admin tab
src/components/admin/finance/
├─ Companies/
│  └─ FinanceCompany.tsx                             # list view, modal trigger
├─ Details/
│  └─ FinanceDetail.tsx                              # FinanceDetailPanel (+ full-page export)
├─ data/
│  ├─ companies.ts                                   # normalized companies
│  └─ transactions.ts                                # normalized transactions
└─ format.ts                                         # formatINR, formatDate
```

## Data models
### Company (companies.ts)
```
{
  id: string;                 // e.g., "cmp_amazon"
  kind: 'online'|'local';
  name: string;
  status: 'active'|'inactive'|'suspended';
  logo: string;
  contact?: { phone?: string; email?: string; website?: string };
  legal?: { gst?: string; pan?: string };
  meta: { category?: string[]; tags?: string[]; dateRegistered: string }; // ISO
  locations?: { city: string; addressLine1?: string }[];
  metrics?: { revenuePaise?: number; cashbackPaidPaise?: number; pendingPayoutsPaise?: number };
}
```
Exports:
- `companies: Company[]`
- `companiesById: Record<string, Company>`
- `listCompanies()`
- `getCompanyById(id)`

### Transaction (transactions.ts)
```
{
  id: string;
  companyId: string;     // FK to Company.id
  userId: string;
  amountPaise: number;
  cashbackPaise: number;
  status: 'approved'|'pending';
  date: string;          // ISO
}
```
Exports:
- `transactions: Transaction[]`
- `listTransactionsByCompany(companyId)`

## Formatting helpers (format.ts)
- `formatINR(rupees)` => `₹1,20,000` (expects rupees)
- `formatDate(ISO)`   => `20 Apr 2025` (en‑IN)

## Companies list (FinanceCompany.tsx)
- Filters `companies[]` by `kind` to render Online vs Local tabs
- Right-side amount uses INR from metrics: `formatINR((metrics.revenuePaise ?? 0)/100)`
- On card click: opens modal with `<FinanceDetailPanel companyId=... />`
- Modal supports outside-click and ESC to close

## Detail panel (FinanceDetail.tsx)
- `FinanceDetailPanel` props: `{ companyId?; companyName?; logoSrc?; category?; location?; dateRegistered?; website? }`
- If `companyId` provided, loads company via `getCompanyById`
- Header shows: name, category chips, location, formatted registered date, Website link, Active badge
- Stats: from `company.metrics.*Paise` (converted to rupees for display)
- Transactions: `listTransactionsByCompany(companyId)`; zebra rows; CSV button placeholder

## Backend guidance
- Keep money as paise in APIs; convert to rupees in UI (`formatINR(paise/100)`)
- Use stable `companyId` for joins across datasets
- Prefer ISO 8601 dates; format locally via `formatDate`

## Migration notes
- Removed route `src/app/admin/finance/[id]`; detail now opens as a modal
- Moved old data from `src/data/` into the module and normalized
- Added `src/components/admin/Finance.tsx` entrypoint for the Admin tab
