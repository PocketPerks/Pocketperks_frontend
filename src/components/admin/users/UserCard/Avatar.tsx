"use client";

import Image from "next/image";

export function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-20 h-20">
      <Image src={src} alt={alt} width={80} height={80} className="rounded-full object-cover border border-gray-200" />
    </div>
  );
}
