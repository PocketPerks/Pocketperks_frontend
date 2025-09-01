import ProductCard from './ProductCard';
import { motion, Variants } from 'framer-motion';

const ProductGrid = () => {
  const popularBrands = [
    { title: 'Flipkart', subtitle: 'CB Affoy', cashback: 'Upto 7%', cashbackType: 'Cashback' as const, isSale: true, saleText: 'Sale Live Now', path: '/categoriespage' },
    { title: 'Amazon India', subtitle: '', cashback: 'Upto 5.50%', cashbackType: 'Rewards' as const, isSale: true, saleText: 'Sale Live Now', path: '/categoriespage' },
    { title: 'AJIO', subtitle: '', cashback: 'Upto 8%', cashbackType: 'Cashback' as const, isSale: true, saleText: 'Sale Live Now', path: '/categoriespage' },
    { title: 'Myntra', subtitle: '', cashback: 'Upto 6%', cashbackType: 'Cashback' as const, isSale: true, saleText: 'Sale Live Now', path: '/categoriespage' },
    { title: 'Reliance Digital', subtitle: '', cashback: 'Upto 3%', cashbackType: 'Cashback' as const, discount: '50-80% Off', path: '/categoriespage' },
    { title: 'MamaEarth', subtitle: 'B1G1', cashback: 'Flat 12%', cashbackType: 'Cashback' as const, discount: 'BOGO', path: '/categoriespage' },
    { title: 'Hyugalife', subtitle: '', cashback: 'Upto 10%', cashbackType: 'Cashback' as const, discount: 'Upto 60% Off', path: '/categoriespage' },
    { title: 'Truemeds', subtitle: '', cashback: 'Upto ₹370', cashbackType: 'Cashback' as const, discount: '25% Off Code', path: '/categoriespage' }
  ];

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.25 } }
  };

  const cardVariant: Variants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    show: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 60, damping: 12 } }
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative py-16 bg-gradient-to-b from-purple-900/80 via-indigo-900/70 to-pink-900/80 overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="absolute -top-10 left-10 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-ping"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
            🚀 Most Popular Brands
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Shop from your favorite brands and earn <span className="text-orange-400 font-semibold drop-shadow-md">cashback</span> on every purchase
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {popularBrands.map((brand, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant}
              whileHover={{ scale: 1.05, rotateY: 6 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="relative group"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-orange-500 to-indigo-500 opacity-0 group-hover:opacity-30 blur-lg transition duration-300"></div>

              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                <ProductCard
                  title={brand.title}
                  subtitle={brand.subtitle}
                  cashback={brand.cashback}
                  cashbackType={brand.cashbackType}
                  isSale={brand.isSale}
                  saleText={brand.saleText}
                  discount={brand.discount}
                  path={brand.path}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <div className="text-center mt-14">
          <button className="relative inline-block px-10 py-3 rounded-full font-semibold text-white 
                             bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 
                             shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <span className="relative z-10">View All Brands</span>
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductGrid;
