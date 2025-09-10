"use client";

import { Home, ShoppingBag, Phone, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Logo</h1>

        {/* Links */}
        <div className="flex items-center space-x-8 text-gray-700 font-medium">
          <a
            href="#"
            className="flex items-center gap-2 hover:text-black transition-colors duration-200"
          >
            <Home className="w-5 h-5" /> Home
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-black transition-colors duration-200"
          >
            <ShoppingBag className="w-5 h-5" /> Shop
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-black transition-colors duration-200"
          >
            <Phone className="w-5 h-5" /> Contact
          </a>
        </div>

        {/* Right Side (Cart) */}
        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          <ShoppingCart className="w-5 h-5" />
          <span className="hidden sm:inline">Cart</span>
        </button>
      </div>
    </nav>
  );
}
