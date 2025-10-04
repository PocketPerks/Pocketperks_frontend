"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import CashbackBadge from "./CashbackBadge";
import Tag from "./Tags";

interface ProductCardProps {
  imgSrc: string;
  title: string;
  category: string;
  rating: number;
  reviews: number;
  cashbackText: string;
  siteName: string;
  tags?: { text: string; color: string }[];
}

export default function ProductCard({
  imgSrc,
  title,
  category,
  rating,
  reviews,
  cashbackText,
  tags = [],
}: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
          </svg>
        );
      } else if (i - rating <= 0.5) {
        stars.push(
          <svg key={i} className="w-4 h-4" viewBox="0 0 20 20">
            <defs>
              <linearGradient id={`half-grad-${i}`}>
                <stop offset="50%" stopColor="#FBBF24" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#half-grad-${i})`}
              d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z"
            />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="group relative w-72 bg-white rounded-2xl flex flex-col transition-transform duration-200 ease-out hover:-translate-y-1 will-change-transform">
      {/* Image */}
      <div className="relative w-full h-44 rounded-t-2xl overflow-hidden bg-white border-3 rounded-xl ring-gray-200">
        <Image src={imgSrc} alt={title} fill className="object-contain" />

        {/* Badge */}
        <div className="absolute left-0 bottom-3">
          <CashbackBadge text={cashbackText} />
        </div>

        {/* Like */}
        <button
          onClick={() => setLiked((p) => !p)}
          className="absolute top-2 right-2 p-1 transition-transform hover:scale-110"
        >
          <Heart
            className={`w-6 h-6 ${
              liked ? "text-pink-500 fill-pink-500" : "text-gray-600"
            } drop-shadow-md`}
          />
        </button>
      </div>

      {/* Info */}
      <div className="p-2.5 flex flex-col">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex flex-col items-end">
            <div className="flex items-center">{renderStars()}</div>
            <span className="text-sm text-gray-500 flex items-center gap-1 whitespace-nowrap">
              {reviews.toLocaleString()} Reviews
            </span>
          </div>
        </div>

        <p className="mt-2 text-gray-600">{category}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-auto border-t border-gray-300 pt-2 flex flex-wrap gap-1">
            {tags.map((tag, i) => (
              <Tag key={i} text={tag.text} color={tag.color} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}