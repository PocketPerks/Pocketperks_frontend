"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CarouselSectionProps<T = unknown> = {
  title: string;
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string; // outer
  containerClassName?: string; // container
  itemWidthClass?: string; // width
  gapClass?: string; // gap
  paddingXClass?: string; // padding
  fadeWidthClass?: string; // fades
  stepRatio?: number; // step
  showDividers?: boolean; // dividers
};

export default function CarouselSection<T = unknown>({
  title,
  items,
  renderItem,
  className = "",
  containerClassName = "",
  itemWidthClass = "w-72",
  gapClass = "gap-x-10",
  paddingXClass = "px-10",
  fadeWidthClass = "w-24",
  stepRatio = 0.9,
  showDividers = true,
}: CarouselSectionProps<T>) {
  const carouselRef = React.useRef<HTMLDivElement>(null);

  // rafmap
  const rafMapRef = React.useRef<WeakMap<HTMLElement, number>>(new WeakMap());

  // scroll
  const smoothScrollBy = (
    deltaX: number,
    baseDuration = 420
  ) => {
    const el = carouselRef.current;
    if (!el) return;

    const start = el.scrollLeft;
    const target = start + deltaX;
    const distance = Math.abs(deltaX);
    const duration = Math.max(280, Math.min(600, (distance / el.clientWidth) * baseDuration + 200));

    try {
      el.scrollTo({ left: target, behavior: "smooth" });
      return;
    } catch {}

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const prevId = rafMapRef.current.get(el);
    if (prevId) cancelAnimationFrame(prevId);

    const startTime = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = easeInOutCubic(t);
      el.scrollLeft = start + (target - start) * eased;
      if (t < 1) {
        const id = requestAnimationFrame(step);
        rafMapRef.current.set(el, id);
      } else {
        rafMapRef.current.delete(el);
      }
    };

    const id = requestAnimationFrame(step);
    rafMapRef.current.set(el, id);
  };

  const scrollBy = (direction: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;
    const step = Math.round(el.offsetWidth * stepRatio);
    const delta = direction === "right" ? step : -step;
    smoothScrollBy(delta, 420);
  };

  return (
    <section className={`w-full py-1 px-4 ${className}`}>
      <div className={`relative w-full overflow-hidden bg-white px-4 md:px-6 py-0.5 md:py-1.5 rounded-3xl border border-gray-200 shadow-lg shadow-black/10 ${containerClassName}`}>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-1">{title}</h2>

        <div className="relative">
          <div
            ref={carouselRef}
            className={`flex items-stretch overflow-x-hidden ${gapClass} ${paddingXClass} snap-x snap-mandatory scroll-smooth overscroll-x-contain touch-pan-x`}
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {items.map((item, index) => (
              <div key={index} className={`relative flex-shrink-0 ${itemWidthClass} snap-start md:snap-center`}>
                {renderItem(item, index)}
                {showDividers && index < items.length - 1 && (
                  <div className="hidden lg:block absolute top-8 bottom-8 -right-5 w-px bg-gray-400 opacity-50"></div>
                )}
              </div>
            ))}
          </div>

          {/* Fades */}
          <div className={`pointer-events-none absolute inset-y-0 left-0 ${fadeWidthClass} bg-gradient-to-r from-white to-transparent`} />
          <div className={`pointer-events-none absolute inset-y-0 right-0 ${fadeWidthClass} bg-gradient-to-l from-white to-transparent`} />
        </div>

        {/* Arrows */}
        <button
          onClick={() => scrollBy("left")}
          className="z-30 absolute top-1/2 left-4 -translate-y-1/2 grid place-items-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-black/45 backdrop-blur-sm ring-1 ring-white/30 transition-all duration-200 hover:scale-105 active:scale-95 active:-translate-x-0.5"
          aria-label={`Scroll left ${title}`}
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </button>

        <button
          onClick={() => scrollBy("right")}
          className="z-30 absolute top-1/2 right-4 -translate-y-1/2 grid place-items-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-black/45 backdrop-blur-sm ring-1 ring-white/30 transition-all duration-200 hover:scale-105 active:scale-95 active:translate-x-0.5"
          aria-label={`Scroll right ${title}`}
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </button>
      </div>
    </section>
  );
}