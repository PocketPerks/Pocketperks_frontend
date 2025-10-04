"use client";

import React, { useRef, useState } from "react";
import { Paperclip, Star } from "lucide-react";
import Image from "next/image";

export type ReviewSubmitPayload = {
  text: string;
  file?: File | null;
  previewUrl?: string | null;
  rating?: number;
};

export default function ReviewSubmitSection({ onSubmit }: { onSubmit?: (data: ReviewSubmitPayload) => void }) {
  const [text, setText] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onPaperclipClick = () => fileInputRef.current?.click();
  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const f = e.target.files?.[0] || null;
    if (!f) return;
    setFile(f);
    setPreviewUrl(URL.createObjectURL(f));
  };

  const handleSubmit = () => {
    onSubmit?.({ text, file, previewUrl, rating });
  };

  return (
    <div className="mx-auto max-w-3xl">
      <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={onFileChange} />

      {/* Header */}
      <div className="flex flex-col items-center mb-3">
        <Image src="/logos/pfp.jpg" alt="Profile" width={96} height={96} className="w-24 h-24 rounded-full border border-gray-300 object-cover" />
        <div className="mt-2 flex items-center gap-2" aria-label="Rating" role="radiogroup">
          {[1,2,3,4,5].map(i => {
            const display = hover ?? rating;
            const fillPercent = Math.max(0, Math.min(100, (display - (i - 1)) * 100));
            return (
              <div
                key={i}
                className="relative cursor-pointer"
                style={{ width: 36, height: 36 }}
                role="radio"
                aria-checked={display >= i}
                onMouseMove={(e) => {
                  const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const frac = x / rect.width;
                  const half = frac <= 0.5 ? 0.5 : 1;
                  setHover((i - 1) + half);
                }}
                onMouseLeave={() => setHover(null)}
                onClick={() => setRating(hover ?? i)}
              >
                <Star className="text-amber-500" style={{ width: 36, height: 36 }} />
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercent}%` }}>
                  <Star className="text-amber-500 fill-amber-500" style={{ width: 36, height: 36 }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-start gap-6">
        {/* Input */}
        <div className="flex-1">
          <textarea
            aria-label="Leave your review"
            placeholder="Leave Your Review"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-[220px] rounded-3xl border-3 border-slate-600 bg-white p-5 text-gray-900 placeholder-slate-500/80 resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-black/30"
          />
        </div>

        {/* Upload */}
        <button
          type="button"
          onClick={onPaperclipClick}
          className="w-[220px] shrink-0 self-start group focus:outline-none"
          aria-label="Upload image"
          title="Upload image"
        >
          <div className="w-[220px] h-[220px] rounded-3xl border-3 border-dashed border-slate-600 bg-white overflow-hidden flex items-center justify-center transition-colors group-hover:border-slate-700">
            {previewUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <Paperclip className="w-10 h-10 text-slate-500 group-hover:text-slate-700" />
            )}
          </div>
        </button>
      </div>

      <div className="flex justify-center mt-3">
        <button onClick={handleSubmit} className="w-80 md:w-[28rem] px-8 py-3 rounded-xl bg-black text-white font-semibold shadow hover:bg-gray-800">
          submit
        </button>
      </div>
    </div>
  );
}
