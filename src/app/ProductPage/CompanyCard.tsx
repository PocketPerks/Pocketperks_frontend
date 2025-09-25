"use client";

import React, { useState } from "react";
import Image from "next/image";
import ReviewComment from "./ReviewComment";
import ReviewBadge from "./ReviewBadge";

interface Review {
  user: string;
  comment: string;
  avatar?: string;
}

interface CompanyCardProps {
  logo: string;
  name: string;
  description: string;
  rating: number;
  reviews: number;
  reviewComments?: Review[];
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  logo,
  name,
  description,
  rating,
  reviews,
  reviewComments = [],
}) => {
  const [expanded, setExpanded] = useState(false);
  const [imgSrc, setImgSrc] = useState(logo);

  const handleImageError = () => setImgSrc("/fallback.jpg");

  return (
    <div className="flex flex-col gap-5 bg-white border border-gray-300 rounded-3xl shadow-lg p-5 hover:shadow-xl transition-all w-full max-w-2xl">
      
      {/* Header */}
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gray-100 rounded-xl border border-gray-200 overflow-hidden">
          <Image
            src={imgSrc}
            alt={name}
            width={80}
            height={80}
            className="object-contain"
            onError={handleImageError}
          />
        </div>
        <div className="flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-gray-900">{name}</h3>
          <ReviewBadge rating={rating} reviews={reviews} size="md" />
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm">
        {expanded ? description : description.slice(0, 150) + "..."}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`ml-1 focus:outline-none ${
            expanded ? "text-gray-600 font-medium" : "text-gray-900 font-bold"
          }`}
        >
          {expanded ? "less" : "more"}
        </button>
      </p>

      {/* Reviews Section */}
      {reviewComments.length > 0 && (
        <div className="flex flex-col gap-3 border-t border-gray-200 pt-4">
          {reviewComments.map((r, idx) => (
            <ReviewComment key={idx} {...r} />
          ))}
        </div>
      )}

      {/* visit button */}
      <button className="mt-4 px-5 py-3 bg-black text-white rounded-xl font-medium border-2 border-black shadow 
          hover:bg-white hover:text-black transition">
        Visit Company
      </button>
    </div>
  );
};

export default CompanyCard;