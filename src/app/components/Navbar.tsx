"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Home, User, ShoppingCart, Shield, Menu, X, Search, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openExplore, setOpenExplore] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [query, setQuery] = useState("");
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const pill = (active: boolean) =>
    `inline-flex items-center gap-2 px-2 py-1 rounded ${active ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'} transition`;

  return (
    <nav role="navigation" aria-label="Main" className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-md">
      <div className="w-full max-w-7xl mx-auto">
        <div className="px-6 py-3 flex items-center gap-3">
          {/* Logo */}
          <a href="/home" className="text-2xl font-extrabold text-gray-900 tracking-tight hover:opacity-80">
            PocketPerks
          </a>
          {/* Search */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="relative w-full max-w-xl">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') window.location.href = `/product?search=${encodeURIComponent(query)}`; }}
                placeholder="Search products, stores..."
                className="w-full bg-gray-100 text-gray-900 placeholder-gray-500 rounded-xl pl-4 pr-10 py-2 shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="button"
                aria-label="Search"
                onClick={() => { window.location.href = `/product?search=${encodeURIComponent(query)}`; }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-0"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navlinks */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <a href="/home" className={pill(isActive("/home"))}>Home</a>

            {/* Pages */}
            <div className="relative">
              <button onClick={() => setOpenExplore((o) => !o)} className={pill(false)} aria-expanded={openExplore}>
                Pages <ChevronDown className="w-4 h-4" />
              </button>
              {openExplore && (
                <div className="absolute right-0 mt-2 w-44 rounded-xl bg-white text-gray-800 shadow-lg border border-gray-200 overflow-hidden">
                  <a href="/product" className="block px-4 py-2 hover:bg-gray-50">Product</a>
                  <a href="/localp" className="block px-4 py-2 hover:bg-gray-50">LocalP</a>
                  <a href="/online" className="block px-4 py-2 hover:bg-gray-50">Online</a>
                </div>
              )}
            </div>

            {/* Profile */}
            <a href="/profile" className={pill(isActive("/profile"))}>Profile</a>

            {/* Admin */}
            <a href="/Register" className={pill(isActive("/admin"))}>Log in</a>

            {/* Cart */}
            <a href="/cart" className="ml-8 inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800">
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3 ml-auto">
            <button onClick={() => setIsMenuOpen((o) => !o)} aria-label="Toggle menu" className="text-gray-900">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Panel */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <div className="relative w-full">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') { window.location.href = `/product?search=${encodeURIComponent(query)}`; setIsMenuOpen(false);} }}
                placeholder="Search..."
                className="w-full bg-gray-100 text-gray-900 rounded-xl pl-4 pr-10 py-2 shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="button"
                aria-label="Search"
                onClick={() => { window.location.href = `/product?search=${encodeURIComponent(query)}`; setIsMenuOpen(false); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 p-0"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-3 grid gap-2">
              <a href="/home" className="px-4 py-2 rounded-xl border border-gray-200 text-gray-800 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Home</a>
              <details className="rounded-xl border border-gray-200 open:bg-gray-50 text-gray-800">
                <summary className="list-none px-4 py-2 rounded-xl cursor-pointer flex items-center justify-between">Pages <ChevronDown className="w-4 h-4" /></summary>
                <div className="px-2 pb-2 grid gap-1">
                  <a href="/product" className="px-3 py-2 rounded-lg hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Product</a>
                  <a href="/localp" className="px-3 py-2 rounded-lg hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>LocalP</a>
                  <a href="/online" className="px-3 py-2 rounded-lg hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Online</a>
                </div>
              </details>
              <a href="/profile" className="px-4 py-2 rounded-xl border border-gray-200 text-gray-800 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Profile</a>
              <a href="/admin" className="px-4 py-2 rounded-xl border border-gray-200 text-gray-800 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Admin</a>
              <a href="/cart" className="px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>
                <div className="flex items-center gap-2"><ShoppingCart className="w-5 h-5" /> Cart</div>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}