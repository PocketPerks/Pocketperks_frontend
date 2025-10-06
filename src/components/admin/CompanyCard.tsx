"use client";

import { Star, Eye, Pencil, BadgeCheck } from "lucide-react";

interface Category {
  id?: number;
  name?: string;
}

interface CompanyCardProps {
  brand_name: string;
  logo_url?: string;
  description?: string;
  is_featured?: boolean;
  offer_highlight?: string;
  cashback?: string;
  cashback_type?: string;
  is_sale?: boolean;
  offerLink?: string;
  categories?: Category[];
  rating?: number;
  status?: "Active" | "Inactive"; // optional UI field
}

export default function CompanyCard({
  brand_name,
  logo_url,
  description,
  is_featured,
  offer_highlight,
  cashback,
  cashback_type,
  is_sale,
  offerLink,
  categories,
  rating,
  status = "Active",
}: CompanyCardProps) {
  return (
    <div className="flex gap-4 bg-white shadow rounded-2xl p-4 border hover:shadow-md transition">
      {/* Logo */}
      <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
        {logo_url ? (
          <img
            src={logo_url}
            alt={brand_name}
            className="object-contain w-full h-full"
          />
        ) : (
          <span className="text-gray-400 text-sm">No Logo</span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-black">{brand_name}</h3>
            {is_featured && (
              <BadgeCheck className="w-4 h-4 text-blue-600" title="Featured" />
            )}
          </div>
          {rating && (
            <div className="flex items-center gap-1 px-2 text-black py-1 bg-gray-100 rounded-lg text-sm">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              {rating}
            </div>
          )}
        </div>

        {/* Offer highlight */}
        {offer_highlight && (
          <p className="text-sm text-blue-600 font-medium mt-1">
            {offer_highlight}
          </p>
        )}

        {/* Cashback Info */}
        <div className="mt-2 text-sm text-gray-700">
          {cashback && (
            <p>
              Cashback:{" "}
              <span className="font-semibold text-black">{cashback}</span>{" "}
              {cashback_type && `(${cashback_type})`}
            </p>
          )}
          {is_sale && (
            <p className="text-red-600 font-medium mt-1">🔥 Sale Active</p>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-600 line-clamp-2 mt-2">
            {description}
          </p>
        )}

        {/* Categories */}
        {categories && categories.length > 0 && (
          <div className="mt-2">
            <p className="text-sm font-semibold text-black">Categories:</p>
            <ul className="text-sm text-gray-600 list-disc ml-4">
              {categories.slice(0, 2).map((c, i) => (
                <li key={i}>{c.name || "Unnamed Category"}</li>
              ))}
              {categories.length > 2 && (
                <li className="text-gray-400">
                  +{categories.length - 2} more
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Offer Link */}
        {offerLink && (
          <a
            href={offerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm mt-2 hover:underline"
          >
            Visit Offer →
          </a>
        )}

        {/* Status + Actions */}
        <div className="flex justify-between items-center mt-3">
          <p
            className={`text-sm font-medium ${
              status === "Active" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-1 text-black text-sm hover:underline">
              <Eye className="w-4 h-4" /> View
            </button>
            <button className="flex items-center gap-1 text-gray-600 text-sm hover:underline">
              <Pencil className="w-4 h-4" /> Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}