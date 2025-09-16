"use client";

import { Star, Eye, Pencil } from "lucide-react";

interface CompanyCardProps {
  logo?: string;
  name: string;
  foundedYear?: string;
  founder?: string;
  ceo?: string;
  website?: string;
  email?: string;
  phone?: string;
  address?: string;
  companyCashbackRate?: string;
  maxCashback?: string;
  productName?: string;
  productCashbackRate?: string;
  deeplink?: string;
  description?: string;
  categories?: { category: string; rate: string }[];
  status: "Active" | "Inactive";
  rating?: number;
}

export default function CompanyCard({
  logo,
  name,
  foundedYear,
  ceo,
  companyCashbackRate,
  maxCashback,
  productName,
  productCashbackRate,
  description,
  categories,
  status,
  rating,
}: CompanyCardProps) {
  return (
    <div className="flex gap-4 bg-white shadow rounded-2xl p-4 border hover:shadow-md transition">
      {/* Logo */}
      <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
        {logo ? (
          <img src={logo} alt={name} className="object-contain w-full h-full" />
        ) : (
          <span className="text-gray-400 text-sm">No Logo</span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Header */}
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-black">{name}</h3>
          {rating && (
            <div className="flex items-center gap-1 px-2 text-black py-1 bg-gray-100 rounded-lg text-sm">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              {rating}
            </div>
          )}
        </div>

        {/* Meta info */}
        {foundedYear && (
          <p className="text-sm text-black">Founded: {foundedYear}</p>
        )}
        {ceo && <p className="text-sm text-gray-500">CEO: {ceo}</p>}

        <p
          className={`text-sm font-medium ${
            status === "Active" ? "text-green-600" : "text-red-600"
          }`}
        >
          Status: {status}
        </p>

        {/* Cashback summary */}
        <div className="mt-2 text-sm text-gray-700">
          {companyCashbackRate && (
            <p>Company Cashback: {companyCashbackRate}</p>
          )}
          {maxCashback && <p>Max Cashback: {maxCashback}</p>}
          {productName && productCashbackRate && (
            <p>
              {productName}: {productCashbackRate}
            </p>
          )}
        </div>

        {/* Categories preview */}
        {categories && categories.length > 0 && (
          <div className="mt-2">
            <p className="text-sm font-semibold text-black">Categories:</p>
            <ul className="text-sm text-gray-600 list-disc ml-4">
              {categories.slice(0, 2).map((c, i) => (
                <li key={i}>
                  {c.category} – {c.rate}
                </li>
              ))}
              {categories.length > 2 && (
                <li className="text-gray-400">+{categories.length - 2} more</li>
              )}
            </ul>
          </div>
        )}

        {/* Optional description */}
        {description && (
          <p className="text-sm text-gray-600 line-clamp-2 mt-1">
            {description}
          </p>
        )}

        {/* Actions */}
        <div className="flex justify-end gap-4 mt-3">
          <button className="flex items-center gap-1 text-black text-sm hover:underline">
            <Eye className="w-4 h-4" /> View
          </button>
          <button className="flex items-center gap-1 text-gray-600 text-sm hover:underline">
            <Pencil className="w-4 h-4" /> Edit
          </button>
        </div>
      </div>
    </div>
  );
}

