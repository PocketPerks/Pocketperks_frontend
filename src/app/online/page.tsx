"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  const slides = [
    {
      src: "/slider/amazonp.jpg",
      // orange -> yellow
      gradient:
        "linear-gradient(135deg, rgba(251,146,60,0.95) 0%, rgba(249,115,22,0.95) 50%, rgba(253,230,138,0.95) 100%)",
      title: "Amazon Great Indian Fest",
      subtitle: "Min. 30% Off",
      text: "On Skin Care",
    },
    {
      src: "/slider/flipkart.jpg",
      // blue -> dark blue
      gradient:
        "linear-gradient(135deg, rgba(96,165,250,0.95) 0%, rgba(37,99,235,0.95) 50%, rgba(30,58,138,0.95) 100%)",
      title: "Mega Electronics Sale",
      subtitle: "Up to 50% Off",
      text: "On Latest Gadgets",
    },
    {
      src: "/slider/GIF.jpeg",
      gradient:
        "linear-gradient(135deg, rgba(236,72,153,0.95) 0%, rgba(239,68,68,0.95) 50%, rgba(249,115,22,0.95) 100%)",
      title: "Festive Fashion Deals",
      subtitle: "Flat 40% Off",
      text: "On Top Brands",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  const slideCount = slides.length;
  const slidePercent = 100 / slideCount; // percent of track that equals one slide (relative to track)
  const trackX = `-${currentIndex * slidePercent}%`; // translateX for the track (percent of track width)

  return (
    <main className="p-6 bg-gradient-to-b from-orange-50 to-white min-h-screen flex justify-center">
      <section className="relative w-full max-w-full h-[28rem] rounded-2xl overflow-hidden shadow-2xl flex">
        {/* gradient */}
        <div className="w-1/2 relative overflow-hidden">
          {slides.map((s, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              animate={{ opacity: i === currentIndex ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              style={{ background: s.gradient }}
            />
          ))}

          <div className="relative z-10 h-full flex items-center px-12">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-md"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                {slides[currentIndex].title}
              </h1>
              <p className="mt-4 text-2xl font-semibold text-white/90">
                {slides[currentIndex].subtitle}
              </p>
              <p className="mt-1 text-lg text-white/85">
                {slides[currentIndex].text}
              </p>

              <button className="mt-8 inline-block px-7 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-lg hover:scale-105 transition transform">
                Explore Now
              </button>
            </motion.div>
          </div>

          {/* fade on the right edge to merge with image */}
          <div
            aria-hidden
            className="absolute right-0 top-0 bottom-0 pointer-events-none"
            style={{
              width: "20%",
              background:
                "linear-gradient(270deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        {/* image */}
        <div className="w-1/2 relative overflow-hidden">
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

          {/* dark fade */}
          <div
            aria-hidden
            className="absolute left-0 top-0 bottom-0 pointer-events-none"
            style={{
              width: "20%",
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        {/* indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3.5 h-3.5 rounded-full transition-transform ${
                i === currentIndex ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
