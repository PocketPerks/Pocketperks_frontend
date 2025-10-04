export type CompanyKind = "online" | "local";
export type CompanyStatus = "active" | "inactive" | "suspended";

export interface Company {
  id: string;               // stable id, e.g., "cmp_amazon"
  kind: CompanyKind;        // online or local
  name: string;
  status: CompanyStatus;
  logo: string;
  contact?: {
    phone?: string;
    email?: string;
    website?: string;
  };
  legal?: {
    gst?: string;
    pan?: string;
  };
  meta: {
    category?: string[];
    tags?: string[];
    dateRegistered: string; // ISO yyyy-mm-dd
  };
  locations?: { city: string; addressLine1?: string }[];
  metrics?: {
    revenuePaise?: number;          // store money as minor units
    cashbackPaidPaise?: number;
    pendingPayoutsPaise?: number;
  };
}

export const companies: Company[] = [
  {
    id: "cmp_amazon",
    kind: "online",
    name: "Amazon India",
    status: "active",
    logo: "/logos/amazon.png",
    contact: { website: "https://www.amazon.in" },
    meta: { category: ["Commerce", "Electronics"], tags: ["prime"], dateRegistered: "2025-04-20" },
    metrics: { revenuePaise: 12000000, cashbackPaidPaise: 3500000, pendingPayoutsPaise: 520000 },
  },
  {
    id: "cmp_flipkart",
    kind: "online",
    name: "Flipkart",
    status: "active",
    logo: "/logos/flipkart.png",
    contact: { website: "https://www.flipkart.com" },
    meta: { category: ["Commerce", "Electronics"], tags: ["big-billion-days"], dateRegistered: "2025-03-15" },
    metrics: { revenuePaise: 8000000, cashbackPaidPaise: 2100000, pendingPayoutsPaise: 180000 },
  },
  {
    id: "cmp_myntra",
    kind: "online",
    name: "Myntra",
    status: "active",
    logo: "/logos/myntra.jpg",
    contact: { website: "https://www.myntra.com" },
    meta: { category: ["Fashion", "E-commerce"], tags: ["apparel"], dateRegistered: "2025-02-12" },
    metrics: { revenuePaise: 6000000, cashbackPaidPaise: 1200000, pendingPayoutsPaise: 90000 },
  },
  {
    id: "cmp_verma_elec",
    kind: "local",
    name: "Verma Electronics",
    status: "inactive",
    logo: "/logos/store-placeholder.png",
    contact: { phone: "+91 97650 67890" },
    meta: { dateRegistered: "2025-02-15" },
    locations: [{ city: "Pune" }],
    metrics: { revenuePaise: 2000000, cashbackPaidPaise: 250000, pendingPayoutsPaise: 50000 },
  },
  {
    id: "cmp_gupta_pharma",
    kind: "local",
    name: "Gupta Pharmacy",
    status: "active",
    logo: "/logos/store-placeholder.png",
    contact: { phone: "+91 98110 24680" },
    meta: { dateRegistered: "2025-03-20" },
    locations: [{ city: "Delhi" }],
    metrics: { revenuePaise: 2500000, cashbackPaidPaise: 180000, pendingPayoutsPaise: 60000 },
  },
];

export const companiesById: Record<string, Company> = Object.fromEntries(
  companies.map((c) => [c.id, c])
);

export const listCompanies = () => companies;
export const getCompanyById = (id: string) => companiesById[id];