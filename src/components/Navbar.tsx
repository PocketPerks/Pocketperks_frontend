"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, User, ShoppingCart, Shield, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav role="navigation" aria-label="Main" className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-md transition-shadow">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <a href="/home" className="text-2xl font-extrabold text-gray-900 tracking-tight drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-black/30 rounded">
          PocketPerks
        </a>

        {/* Hamburger menu button for mobile */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href="/cart"
            className="flex items-center text-gray-700 hover:text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black/30 rounded"
            aria-label="Cart"
          >
            <ShoppingCart className="w-6 h-6" />
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black/30 rounded"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop and Mobile Menu */}
        <div
          className={`flex-col md:flex-row md:flex items-center md:space-x-8 text-gray-700 font-medium absolute md:static top-full left-0 right-0 bg-white/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-0 border-b md:border-0 border-gray-200 shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
            isMenuOpen ? "flex py-4 opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto md:flex"
          }`}
        >
          <a
            href="/home"
className={`flex items-center gap-2 py-2 px-6 md:py-0 md:px-0 rounded focus:outline-none focus:ring-2 focus:ring-black/30 transition-colors duration-200 hover:text-black hover:bg-transparent ${isActive("/home") ? "text-black font-semibold" : "text-gray-700"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Home className="w-5 h-5" /> Home
          </a>
          <a
            href="/product"
className={`flex items-center gap-2 py-2 px-6 md:py-0 md:px-0 rounded focus:outline-none focus:ring-2 focus:ring-black/30 transition-colors duration-200 hover:text-black hover:bg-transparent ${isActive("/product") ? "text-black font-semibold" : "text-gray-700"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <ShoppingBag className="w-5 h-5" /> Product
          </a>
          <a
            href="/online"
className={`flex items-center gap-2 py-2 px-6 md:py-0 md:px-0 rounded focus:outline-none focus:ring-2 focus:ring-black/30 transition-colors duration-200 hover:text-black hover:bg-transparent ${isActive("/online") ? "text-black font-semibold" : "text-gray-700"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <ShoppingBag className="w-5 h-5" /> Online
          </a>
          <a
            href="/profile"
className={`flex items-center gap-2 py-2 px-6 md:py-0 md:px-0 rounded focus:outline-none focus:ring-2 focus:ring-black/30 transition-colors duration-200 hover:text-black hover:bg-transparent ${isActive("/profile") ? "text-black font-semibold" : "text-gray-700"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <User className="w-5 h-5" /> Profile
          </a>
          <a
            href="/admin"
className={`flex items-center gap-2 py-2 px-6 md:py-0 md:px-0 rounded focus:outline-none focus:ring-2 focus:ring-black/30 transition-colors duration-200 hover:text-black hover:bg-transparent ${isActive("/admin") ? "text-black font-semibold" : "text-gray-700"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Shield className="w-5 h-5" /> Admin
          </a>
          <a
            href="/cart"
className="flex items-center md:hidden gap-2 hover:text-black hover:bg-transparent transition-colors duration-200 py-2 px-6 md:py-0 md:px-0 rounded focus:outline-none focus:ring-2 focus:ring-black/30"
            onClick={() => setIsMenuOpen(false)}
          >
            <ShoppingCart className="w-5 h-5" /> Cart
          </a>
        </div>
        
        {/* Cart button for desktop */}
        <a
          href="/cart"
          className="hidden md:flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-black/30"
          aria-label="Cart"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Cart</span>
        </a>
      </div>
    </nav>
  );
}