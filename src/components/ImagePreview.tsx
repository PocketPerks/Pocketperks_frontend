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
      <div className="bg-white shadow rounded-lg flex items-center justify-center mb-4 overflow-hidden">
        <Image
          src={preview}
          alt="Product Preview"
          width={800}   // adjust based on expected image size
          height={600}  // adjust based on expected image size
          className="object-contain w-full h-auto rounded"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setPreview(img)}
            className={`bg-white shadow rounded-lg flex-1 flex items-center justify-center cursor-pointer border-2 transition transform hover:scale-105 ${
              preview === img
                ? "border-black ring-2 ring-black"
                : "border-transparent"
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              width={100}
              height={100}
              className="object-contain rounded"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
