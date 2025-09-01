'use client'
import BrandDealCard from './BrandDealCard';
import { motion } from "framer-motion";

const cards = [
  {
    brandName: "amazon.in",
    logo: "🛍️",
    offerText: "Up to 80% Off",
    subText: "Across Categories",
    cashbackText: "Up to 5% Rewards",
    bgClass: "from-sky-500 to-blue-600",
  },
  {
    brandName: "Flipkart",
    logo: "📦",
    offerText: "50-90% Off",
    subText: "Across Categories",
    cashbackText: "Up to 7% Cashback",
    bgClass: "from-blue-700 to-blue-800",
  },
  {
    brandName: "AJIO",
    logo: "👗",
    offerText: "50-90% Off",
    subText: "+ Flat 10% AJIO Supercash",
    cashbackText: "Up to 8% Cashback",
    bgClass: "from-orange-500 to-orange-600",
  },
];

const BrandDealsRow = () => {
  return (
    <section className="py-12 bg-gray-900 relative overflow-hidden text-white">
      
      {/* soft floating gradient orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-600 rounded-full blur-2xl opacity-15 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { 
              opacity: 1, 
              y: 0,
              transition: { staggerChildren: 0.2, ease: "easeOut" }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.brandName}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="relative group"
            >
              {/* subtle soft glow border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 blur-lg opacity-40 group-hover:opacity-60 transition"></div>

              <div className="relative bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg overflow-hidden">
                <BrandDealCard
                  href="#"
                  brandName={card.brandName}
                  logo={<span className="text-2xl">{card.logo}</span>}
                  offerText={card.offerText}
                  subText={card.subText}
                  cashbackText={card.cashbackText}
                  bgClass={card.bgClass}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandDealsRow;
