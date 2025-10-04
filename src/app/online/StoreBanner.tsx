"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Slide {
  src: string;
  gradient: string;
  title: string;
  subtitle: string;
  text: string;
}

interface SliderBannerProps {
  slides: Slide[];
}

export default function SliderBanner({ slides }: SliderBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative max-w-full h-[21rem] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row m-4 md:m-6">
      {/* Left */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-start px-6 md:px-12 py-6 md:py-0 overflow-hidden">
        {slides.map((s, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            animate={{ opacity: i === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            style={{ background: s.gradient }}
          />
        ))}

        <div className="relative z-10 text-left max-w-md">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl md:text-5xl font-extrabold text-white leading-snug drop-shadow-lg max-w-[38ch]">
              {slides[currentIndex].title}
            </h1>
            <p className="mt-4 text-lg md:text-2xl font-semibold text-white/90">
              {slides[currentIndex].subtitle}
            </p>
            <p className="mt-1 text-sm md:text-lg text-white/85">
              {slides[currentIndex].text}
            </p>

            <button className="mt-4 md:mt-6 inline-block px-6 md:px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-lg hover:scale-105 transition transform">
              Explore Now
            </button>
          </motion.div>
        </div>
      </div>

      {/* Right */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
        {slides.map((s, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            animate={{ opacity: i === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={s.src}
              alt={s.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        ))}
      </div>

      {/* indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-6 md:w-8 h-2.5 md:h-3.5 rounded-lg transition-transform ${
              i === currentIndex ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}