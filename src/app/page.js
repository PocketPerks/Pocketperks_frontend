"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// 👇 Heavy / neeche wale components ko dynamic import kar
const BrandDealsRow = dynamic(() => import("./components/BrandDealsRow"), {
  ssr: false,
});
const Categories = dynamic(() => import("./components/Categories"), {
  ssr: false,
});
const ProductGrid = dynamic(() => import("./components/ProductGrid"), {
  ssr: false,
});
const AllStore = dynamic(() => import("./components/AllStore"), {
  ssr: false,
});
const Cards = dynamic(() => import("./components/Cards"), {
  ssr: false,
});
const HowItWorks = dynamic(() => import("./components/HowItWorks"), {
  ssr: false,
});
const Hero = dynamic(() => import("./components/Hero"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("./components/Testimonials"), {
  ssr: false,
});
const Footer = dynamic(() => import("./components/Footer"), {
  ssr: false,
});

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar onOpenSidebar={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div>
        <BrandDealsRow />
        <Categories />
        <ProductGrid />
        <AllStore />
        <Cards />
        <HowItWorks />
        <Hero />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
