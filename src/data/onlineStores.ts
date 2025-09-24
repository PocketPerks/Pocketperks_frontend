// Online stores dataset
export interface OnlineStore {
  id: number;
  name: string;
  status: string;
  category: string[];
  dateRegistered: string;
  balance: number;
  logo: string;
}

export const onlineStores: OnlineStore[] = [
  {
    id: 1,
    name: "Amazon",
    status: "Active Partner",
    category: ["Commerce", "Pharma"],
    dateRegistered: "20-04-2025",
    balance: 120,
    logo: "/logos/amazon.png",
  },
  {
    id: 2,
    name: "Flipkart",
    status: "Active Partner",
    category: ["Commerce", "Electronics"],
    dateRegistered: "15-03-2025",
    balance: 80,
    logo: "/logos/flipkart.png",
  },
  {
    id: 3,
    name: "Tata 1Mg",
    status: "Active Partner",
    category: ["Healthcare", "Pharma"],
    dateRegistered: "01-01-2025",
    balance: 45,
    logo: "/logos/tata1mg.png",
  },
  {
    id: 4,
    name: "Myntra",
    status: "Active Partner",
    category: ["Fashion", "E-commerce"],
    dateRegistered: "12-02-2025",
    balance: 60,
    logo: "/logos/myntra.jpg",
  },
];
