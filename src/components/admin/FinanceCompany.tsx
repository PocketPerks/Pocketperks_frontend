"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const companies = [
  {
    id: 1,
    name: "Amazon",
    status: "Active Partner",
    category: ["Commerce", "Pharma"],
    dateRegistered: "20-04-2025",
    balance: 0,
    logo: "/logos/amazon.png",
  },
  {
    id: 2,
    name: "FlipKart",
    status: "Active Partner",
    category: ["Commerce", "Pharma"],
    dateRegistered: "20-04-2025",
    balance: 0,
    logo: "/logos/flipkart.png",
  },
  {
    id: 3,
    name: "Tata 1Mg",
    status: "Active Partner",
    category: ["Commerce", "Pharma"],
    dateRegistered: "20-04-2025",
    balance: 0,
    logo: "/logos/tata1mg.png",
  },
  {
    id: 4,
    name: "Myntra",
    status: "Active Partner",
    category: ["Commerce", "Pharma"],
    dateRegistered: "20-04-2025",
    balance: 0,
    logo: "/logos/myntra.jpg",
  },
];

export default function FinanceCompany() {
  const router = useRouter();

  return (
    <div id="finance" className="p-6 text-black font-sans">
      <h1 className="text-2xl md:text-3xl font-bold text-black mb-6 ">Company</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {companies.map((company) => (
          <div
            key={company.id}
            className="flex justify-between items-center border border-gray-300 rounded-2xl p-4 shadow-sm cursor-pointer hover:shadow-md transition"
            onClick={() => router.push(`/admin/finance/${company.id}`)}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center border rounded-xl overflow-hidden">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{company.name}</h2>
                <p className="text-sm">{company.status}</p>
                <p className="text-sm">
                  Category: ({company.category.join(", ")})
                </p>
                <p className="text-sm">
                  Date Registered: {company.dateRegistered}
                </p>
              </div>
            </div>
            <div className="text-xl font-semibold">${company.balance}000</div>
          </div>
        ))}
      </div>
    </div>
  );
}
