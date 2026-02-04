"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import BrandDealsRow from '@/components/BrandDealsRow';
import Categories from '@/components/Categories';
import ProductGrid from '@/components/ProductGrid';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

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
        <HowItWorks />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
