"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Heart } from "lucide-react";

export default function ReviewCard({
  name = "Name",
  date = "27-12-2014",
  title = "Ghee & Oil",
  text = "da review",
  imageUrl,
  likes = 32,
  rating = 5,
  avatarUrl,
}: {
  name?: string;
  date?: string;
  title?: string;
  text?: string;
  imageUrl?: string;
  likes?: number;
  rating?: number; // can be 0..5 (supports halves)
  avatarUrl?: string;
}) {
  const renderStars = (value: number) => (
    <div className="flex items-center gap-1 text-amber-500">
      {[1, 2, 3, 4, 5].map((i) => {
        const fillPercent = Math.max(0, Math.min(100, (value - (i - 1)) * 100));
        return (
          <div key={i} className="relative w-4 h-4">
            <Star className="w-4 h-4 text-amber-300" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercent}%` }}>
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            </div>
          </div>
        );
      })}
    </div>
  );

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const toggleLike = () => {
    setLiked((prev) => {
      const next = !prev;
      setLikeCount((c) => Math.max(0, c + (next ? 1 : -1)));
      return next;
    });
  };

  return (
<div className="rounded-2xl border border-gray-200 bg-white shadow p-6 transition hover:shadow-md">
      <div className="flex items-start justify-between">
<div className="flex items-center gap-3">
{avatarUrl ? (
            <Image src={avatarUrl} alt={`${name}'s avatar`} width={56} height={56} className="w-14 h-14 rounded-full object-cover" />
          ) : (
            <div className="w-14 h-14 rounded-full bg-gray-200" />
          )}
          <div>
<div className="font-semibold text-base text-gray-900">{name}</div>
            {renderStars(rating)}
          </div>
        </div>
<div className="text-xs text-gray-500">{date}</div>
      </div>

<div className="mt-4 grid grid-cols-[1fr,120px] gap-4">
        <div>
<div className="font-semibold text-base text-gray-900">{title}</div>
<div className="mt-2 text-gray-800 text-base leading-snug line-clamp-4">{text}</div>
<button className="mt-2 text-sm text-gray-600 hover:text-black">More</button>
        </div>
        <div className="w-full h-24 rounded-xl bg-gray-100 border border-gray-200 overflow-hidden">
          {imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imageUrl} alt="" className="w-full h-full object-cover" />
          )}
        </div>
      </div>

<div className="mt-4 flex items-center gap-2 text-sm text-gray-700">
        <button
          type="button"
          onClick={toggleLike}
          aria-pressed={liked}
          aria-label={liked ? "Unlike review" : "Like review"}
className={`inline-flex items-center justify-center w-10 h-10 rounded-full border transition select-none focus:outline-none focus:ring-2 focus:ring-rose-400/50 ${liked ? 'bg-rose-500 text-white border-rose-500' : 'bg-rose-100 text-rose-600 border-rose-200 hover:bg-rose-200'}`}
        >
<Heart className={`w-5 h-5 ${liked ? 'fill-white text-white' : 'text-rose-500'}`} />
          <span className="sr-only">{liked ? 'Unlike' : 'Like'}</span>
        </button>
        <span>{likeCount} People Liked this review</span>
      </div>
    </div>
  );
}
