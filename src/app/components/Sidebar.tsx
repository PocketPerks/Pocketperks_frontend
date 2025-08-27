'use client';

import { useState } from 'react';

type Subcategory = { name: string };

type Category = {
  name: string;
  icon: string;
  subcategories?: Subcategory[];
};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories: Category[] = [
  { name: 'Mobiles', icon: '📱', subcategories: [ { name: 'Smartphones' }, { name: 'Feature Phones' }, { name: 'Accessories' } ] },
  { name: 'Headphones', icon: '🎧', subcategories: [ { name: 'In-Ear' }, { name: 'On-Ear' }, { name: 'Over-Ear' }, { name: 'TWS' } ] },
  { name: 'Laptops', icon: '💻', subcategories: [ { name: 'Ultrabooks' }, { name: 'Gaming Laptops' }, { name: '2-in-1' }, { name: 'Accessories' } ] },
  { name: 'Men Fashion', icon: '👔', subcategories: [ { name: 'T-Shirts' }, { name: 'Shirts' }, { name: 'Jeans' }, { name: 'Ethnic Wear' } ] },
  { name: 'Women Fashion', icon: '👗', subcategories: [ { name: 'Kurtis' }, { name: 'Dresses' }, { name: 'Tops' }, { name: 'Sarees' } ] },
  { name: 'Beauty', icon: '💄', subcategories: [ { name: 'Skincare' }, { name: 'Makeup' }, { name: 'Haircare' } ] },
  { name: 'Grocery', icon: '🛒', subcategories: [ { name: 'Food' }, { name: 'Beverages' }, { name: 'Household' } ] },
  { name: 'Electronics', icon: '🔌', subcategories: [ { name: 'TVs' }, { name: 'Appliances' }, { name: 'Cameras' } ] },
  { name: 'Home & Kitchen', icon: '🏠', subcategories: [ { name: 'Cookware' }, { name: 'Decor' }, { name: 'Furniture' } ] },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // Lock body scroll when sidebar is open
  useState(() => {
    if (typeof document === 'undefined') return;
    const body = document.body;
    if (isOpen) body.style.overflow = 'hidden';
    else body.style.overflow = '';
    return () => { body.style.overflow = ''; };
  });

  const toggleCategory = (name: string) => setExpanded(prev => ({ ...prev, [name]: !prev[name] }));

  const panelTransition = 'transform transition-transform duration-300 ease-in-out';
  const panelVisibility = isOpen ? 'translate-x-0' : '-translate-x-full';

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed left-0 right-0 top-16 bottom-0 bg-black/40 z-30"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={[
          'fixed left-0 top-16 h-[calc(100vh-4rem)] w-screen md:w-72 bg-white shadow-xl z-40',
          panelTransition,
          panelVisibility,
        ].join(' ')}
        role="complementary"
        aria-label="Categories sidebar"
      >
        {/* Header with close */}
        <div className="h-12 px-2 flex items-center justify-end border-b sticky top-0 bg-white">
          <button
            aria-label="Close sidebar"
            className="p-2 rounded hover:bg-gray-100"
            onClick={onClose}
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="h-[calc(100%-3rem)] overflow-y-auto px-2 py-3">
          <nav>
            <ul className="space-y-1">
              {categories.map((cat) => {
                const isExpanded = !!expanded[cat.name];
                return (
                  <li key={cat.name}>
                    <button
                      onClick={() => toggleCategory(cat.name)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-orange-50 text-gray-800"
                      aria-expanded={isExpanded}
                      aria-controls={`section-${cat.name}`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xl" aria-hidden>{cat.icon}</span>
                        <span className="text-sm font-medium">{cat.name}</span>
                      </span>
                      <svg
                        className={["w-4 h-4 text-gray-500 transition-transform", isExpanded ? 'rotate-90' : ''].join(' ')}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {/* Subcategories accordion */}
                    <div
                      id={`section-${cat.name}`}
                      className={[
                        'grid transition-all duration-300 ease-in-out',
                        isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                      ].join(' ')}
                    >
                      <div className="overflow-hidden">
                        <ul className="pl-11 pr-3 py-1 space-y-1">
                          {(cat.subcategories || []).map((sub) => (
                            <li key={sub.name}>
                              <a href="#" className="block text-sm text-gray-600 hover:text-orange-600 px-2 py-1 rounded">
                                {sub.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Most Popular Retailers */}
          <div className="mt-4 pt-3 border-t">
            <span className="block text-xs font-semibold text-gray-500 px-3 mb-2">Most Popular Retailers</span>
            <ul className="space-y-1">
              {[
                { name: 'Amazon', icon: '🛍️' },
                { name: 'Flipkart', icon: '📦' },
                { name: 'AJIO', icon: '🧥' },
                { name: 'Myntra', icon: '👚' },
                { name: 'Reliance Digital', icon: '🔊' },
                { name: 'Tata CLiQ', icon: '🛒' },
                { name: 'FirstCry', icon: '🍼' },
                { name: 'Netmeds', icon: '💊' },
                { name: 'Nike', icon: '👟' },
                { name: 'Adidas', icon: '🥇' },
              ].map((r) => (
                <li key={r.name}>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-orange-50 text-gray-800">
                    <span className="text-xl" aria-hidden>{r.icon}</span>
                    <span className="text-sm font-medium">{r.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;