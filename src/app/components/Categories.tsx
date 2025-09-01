'use client'
import Link from "next/link";
import { motion, Variants } from 'framer-motion'

const categories = [
  { name: 'Credit Cards', icon: '💳', path: '/Categories' },
  { name: 'Biggest Sales', icon: '🔥', path: '/Categories' },
  { name: 'Rakhi Specials', icon: '🎁', path: '/Categories' },
  { name: 'New on CashKaro', icon: '🆕', path: '/Categories' },
  { name: 'Fashion', icon: '👗', path: '/Categories' },
  { name: 'Pharmacy', icon: '💊', path: '/Categories' },
  { name: 'Mobiles', icon: '📱', path: '/Categories' },
  { name: 'Food & Grocery', icon: '🛒', path: '/Categories' },
  { name: 'Beauty & Grooming', icon: '💄', path: '/Categories' },
  { name: 'Flights & Hotels', icon: '✈️', path: '/Categories' },
  { name: 'Health & Wellness', icon: '🏥', path: '/Categories' },
  { name: 'Education', icon: '📚', path: '/Categories' },
  { name: 'Departmental', icon: '🏪', path: '/Categories' },
  { name: 'Electronics', icon: '🔌', path: '/Categories' },
  { name: 'Home & Kitchen', icon: '🏠', path: '/Categories' },
  { name: 'Loans', icon: '💰', path: '/Categories' }
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
}

const item: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } }
}

const Categories = () => {
  return (
    <motion.section
      initial="hidden"
      variants={container}
      whileInView="show"
      viewport={{ once: true }}
      className="relative py-16 bg-gray-900 text-white overflow-hidden"
    >
      {/* soft floating orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-500 rounded-full blur-2xl opacity-15 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow-sm mb-4">
            ✨ Top Categories
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our wide range of categories and grab the hottest deals!
          </p>
        </div>

        <motion.div
          variants={container}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ rotateY: 8, rotateX: -8, scale: 1.05 }}
              whileInView='show'

              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative group"
            >
              {/* soft glow border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 blur-md opacity-20 group-hover:opacity-40 transition"></div>

              <Link href={category.path}>
                <div className="relative bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-5 text-center cursor-pointer shadow-lg overflow-hidden">
                  <div className="relative z-10 text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="relative z-10 text-sm font-semibold text-gray-200 group-hover:text-pink-400 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Categories;
