'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Wrap Next.js Link for framer-motion animations
const MotionLink = motion(Link);

interface NavbarProps {
  onOpenSidebar?: () => void;
}

const Navbar = ({ onOpenSidebar }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ Left side links (Logo ke pass hamburger)
  const leftLinks = [
    { name: 'BestPrice', path: '/' },
  ];

  // ✅ Centered links
  const centerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Online', path: '/online' },
    { name: 'Our Store', path: '/Store' },
  ];

  // ✅ Right side links
  const rightLinks = [
    { name: 'Refer & Earn', path: '/profile/MyReferal' },
    { name: 'Profile', path: '/profile' },
    { name: 'Signup', path: '/Register' },
  ];

  return (
    <motion.nav
      
      className="sticky top-0 z-50 bg-gray-900 text-white backdrop-blur-md shadow-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Open sidebar"
              onClick={onOpenSidebar}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-400 hover:bg-gray-800/40 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-400"
            >
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-orange-400">BestPrice</h1>
            </div>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex items-center space-x-6">
            {centerLinks.map((link, idx) => (
              <MotionLink
                key={idx}
                href={link.path}
                whileHover={{ scale: 1.08, color: '#fb923c' }}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-200 transition-colors"
                prefetch={true}
              >
                {link.name}
              </MotionLink>
            ))}
          </div>

          {/* Right Links */}
          <div className="hidden md:flex items-center space-x-4">
            {rightLinks.map((link, idx) => (
              <MotionLink
                key={idx}
                href={link.path}
                whileHover={{ scale: 1.08, color: '#fb923c' }}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-200 transition-colors"
              >
                {link.name}
              </MotionLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-400 hover:bg-gray-800/40 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-400"
            >
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gray-900 mt-2 rounded-xl p-3 space-y-1 shadow-lg border border-white/10"
          >
            {[...centerLinks, ...rightLinks].map((link, idx) => (
              <MotionLink
                key={idx}
                href={link.path}
                whileHover={{ scale: 1.05, color: '#fb923c' }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 transition-all"
              >
                {link.name}
              </MotionLink>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
