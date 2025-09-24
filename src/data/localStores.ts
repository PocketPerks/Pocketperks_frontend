// Local stores dataset
export interface LocalStore {
  id: number;
  name: string;
  status: string;
  location: string;
  dateRegistered: string;
  balance: number;
  logo?: string; // optional
}

export const localStores: LocalStore[] = [
  {
    id: 101,
    name: "Store A",
    status: "Open",
    location: "Mumbai",
    dateRegistered: "01-02-2025",
    balance: 30,
    logo: "/logos/store-placeholder.png",
  },
  {
    id: 102,
    name: "Store B",
    status: "Closed",
    location: "Pune",
    dateRegistered: "15-02-2025",
    balance: 20,
    logo: "/logos/store-placeholder.png",
  },
  {
    id: 103,
    name: "Store C",
    status: "Open",
    location: "Delhi",
    dateRegistered: "20-03-2025",
    balance: 25,
    logo: "/logos/store-placeholder.png",
  },
];
