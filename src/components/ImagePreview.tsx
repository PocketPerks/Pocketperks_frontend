"use client";

import { useState } from "react";
import Image from "next/image";

interface ImagePreviewProps {
  images: string[];
}

export default function ImagePreview({ images }: ImagePreviewProps) {
  const [preview, setPreview] = useState(images[0]);

  return (
    <div>
      {/* Main Preview */}
      <div className="relative rounded-2xl flex items-center justify-center mb-4 bg-white border border-gray-300 shadow-lg hover:shadow-xl transition-all overflow-hidden w-[720px] h-[550px]">
        <Image
          src={preview}
          alt="Product Preview"
          fill
          className="object-contain p-4"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-6">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setPreview(img)}
            className={`flex-1 flex items-center justify-center border-2 rounded-xl overflow-hidden cursor-pointer transition transform hover:scale-105 ${
              preview === img
                ? "border-black ring-2 ring-black"
                : "border-gray-200"
            }`}
          >
            <div className="relative w-full h-28 bg-gray-100 flex items-center justify-center">
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-contain p-2"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
