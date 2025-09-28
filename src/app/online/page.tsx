"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import SliderBanner from "@/components/online/StoreBanner";
import ProductCard from "@/components/online/ProductCard";
import CarouselSection from "@/components/online/CarouselSection";
import TrendingSitesSection from "@/components/online/TrendingSitesSection";

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

  const products = [
    {
      imgSrc: "/products/product1.jpg",
      title: "FlipKart",
      category: "Electronics & Gaming",
      rating: 3.5,
      reviews: 120,
      cashbackText: "5% Cashback",
      siteName: "FlipKart",
      tags: [
        { text: "Men", color: "bg-blue-100 text-blue-700" },
        { text: "Gadgets", color: "bg-green-100 text-green-700" },
      ],
    },
    {
      imgSrc: "/products/product2.jpg",
      title: "Amazon",
      category: "Makeup & Beauty",
      rating: 5,
      reviews: 89,
      cashbackText: "10% Cashback",
      siteName: "Amazon",
      tags: [
        { text: "Ladies", color: "bg-pink-100 text-pink-700" },
        { text: "Skincare", color: "bg-yellow-100 text-yellow-700" },
      ],
    },
    {
      imgSrc: "/products/product3.jpg",
      title: "Adidas",
      category: "Sports & Footwear",
      rating: 1.5,
      reviews: 45,
      cashbackText: "7% Cashback",
      siteName: "Adidas",
      tags: [
        { text: "Men", color: "bg-blue-100 text-blue-700" },
        { text: "Sports", color: "bg-purple-100 text-purple-700" },
      ],
    },
    // Additional cards to showcase arrow sliders
    {
      imgSrc: "/products/product2.jpg",
      title: "Sony",
      category: "Cameras & Photo",
      rating: 4.5,
      reviews: 231,
      cashbackText: "6% Cashback",
      siteName: "Sony",
      tags: [
        { text: "Pro", color: "bg-indigo-100 text-indigo-700" },
        { text: "Photo", color: "bg-amber-100 text-amber-700" },
      ],
    },
    {
      imgSrc: "/products/product1.jpg",
      title: "Canon",
      category: "Lenses & Gear",
      rating: 4.0,
      reviews: 154,
      cashbackText: "8% Cashback",
      siteName: "Canon",
      tags: [
        { text: "DSLR", color: "bg-blue-100 text-blue-700" },
        { text: "Gear", color: "bg-sky-100 text-sky-700" },
      ],
    },
    {
      imgSrc: "/products/product3.jpg",
      title: "Levi's",
      category: "Men's Wear",
      rating: 3.0,
      reviews: 72,
      cashbackText: "5% Cashback",
      siteName: "Levi's",
      tags: [
        { text: "Men", color: "bg-blue-100 text-blue-700" },
        { text: "Jeans", color: "bg-gray-100 text-gray-700" },
      ],
    },
  ];

  const electronicsProducts = [
    {
      imgSrc: "/products/product1.jpg",
      title: "HP",
      category: "Laptops & PCs",
      rating: 4.2,
      reviews: 210,
      cashbackText: "4% Cashback",
      siteName: "HP",
      tags: [
        { text: "Work", color: "bg-blue-100 text-blue-700" },
        { text: "Office", color: "bg-gray-100 text-gray-700" },
      ],
    },
    {
      imgSrc: "/products/product2.jpg",
      title: "LG",
      category: "Monitors & Displays",
      rating: 4.6,
      reviews: 300,
      cashbackText: "7% Cashback",
      siteName: "LG",
      tags: [
        { text: "4K", color: "bg-purple-100 text-purple-700" },
        { text: "IPS", color: "bg-pink-100 text-pink-700" },
      ],
    },
    {
      imgSrc: "/products/product3.jpg",
      title: "DJI",
      category: "Drones & Action",
      rating: 4.3,
      reviews: 140,
      cashbackText: "6% Cashback",
      siteName: "DJI",
      tags: [
        { text: "Pro", color: "bg-indigo-100 text-indigo-700" },
        { text: "Cam", color: "bg-amber-100 text-amber-700" },
      ],
    },
    {
      imgSrc: "/products/product2.jpg",
      title: "Sony",
      category: "Audio & Video",
      rating: 4.7,
      reviews: 420,
      cashbackText: "5% Cashback",
      siteName: "Sony",
      tags: [
        { text: "Audio", color: "bg-sky-100 text-sky-700" },
        { text: "Video", color: "bg-rose-100 text-rose-700" },
      ],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-black">
      <Navbar />
      <SliderBanner slides={slides} />

      <TrendingSitesSection
        items={[
          {
            title: "Amazon",
            bannerSrc: "/slider/amazonp.jpg",
            badgeText: "Flat 10% Cashback",
          },
          {
            title: "Flipkart",
            bannerSrc: "/slider/flipkart.jpg",
            badgeText: "Upto 12% Cashback",
          },
          {
            title: "Myntra",
            bannerSrc: "/slider/myntra.jpeg",
            badgeText: "Flat 8% Cashback",
          },
        ]}
      />

      <div className="w-full max-w-7xl mx-auto my-3 h-[3px] bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-90" />

      <CarouselSection
        title="Best deals on clothes"
        items={products}
        renderItem={(p) => <ProductCard {...p} />}
      />

      {/* Divider */}
      <div className="w-full max-w-7xl mx-auto my-3 h-[3px] bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-90" />

      <CarouselSection
        title="Treading options for Electronics"
        items={electronicsProducts}
        renderItem={(p) => <ProductCard {...p} />}
      />
    </main>
  );
}
