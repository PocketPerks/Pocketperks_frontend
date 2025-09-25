"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  const slides = [
    {
      src: "/slider/amazonp.jpg",
      gradient:
        "linear-gradient(135deg, rgba(251,146,60,0.95) 0%, rgba(249,115,22,0.95) 50%, rgba(253,230,138,0.95) 100%)",
      title: "Amazon Great Indian Fest",
      subtitle: "Min. 30% Off",
      text: "On Skin Care",
    },
    {
      src: "/slider/flipkart.jpg",
      gradient:
        "linear-gradient(135deg, rgba(96,165,250,0.95) 0%, rgba(37,99,235,0.95) 50%, rgba(30,58,138,0.95) 100%)",
      title: "Mega Electronics Sale",
      subtitle: "Up to 50% Off",
      text: "On Latest Gadgets",
    },
    {
      src: "/slider/myntra.jpeg",
      gradient:
        "linear-gradient(135deg, rgba(236,72,153,0.95) 0%, rgba(219,39,119,0.95) 50%, rgba(236,72,153,0.95) 100%)",
      title: "Festive Fashion Deals",
      subtitle: "Flat 40% Off",
      text: "On Top Brands",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  const cards = [
    {
      id: 1,
      img: "/slider/amazonp.jpg",
      title: "Amazon",
      subtitle: "50–65% Off",
      category: "Shoes & Footwear",
      reviews: 34,
      href: "#",
    },
    {
      id: 2,
      img: "/slider/flipkart.jpg",
      title: "Flipkart",
      subtitle: "Flat 40% Off",
      category: "Clothing & Fashion",
      reviews: 27,
      href: "#",
    },
    {
      id: 3,
      img: "/slider/myntra.jpeg",
      title: "Myntra",
      subtitle: "Up to 70% Off",
      category: "Top Brands",
      reviews: 58,
      href: "#",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />
      {/* Slider */}
      <section className="relative max-w-full h-[28rem] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row m-4 md:m-6">
        {/* Left: gradient + text */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-start px-6 md:px-12 py-8 md:py-0">
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
              <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                {slides[currentIndex].title}
              </h1>
              <p className="mt-4 text-lg md:text-2xl font-semibold text-white/90">
                {slides[currentIndex].subtitle}
              </p>
              <p className="mt-1 text-sm md:text-lg text-white/85">
                {slides[currentIndex].text}
              </p>

              <button className="mt-6 md:mt-8 inline-block px-6 md:px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-lg hover:scale-105 transition transform">
                Explore Now
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right: image */}
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
    </main>
  );
}
