'use client'
import Link from "next/link";
import { motion, Variants } from 'framer-motion'
import { useEffect, useState } from "react";
import axios from "axios";

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
  const [getcategories , setgetchategories] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/categories", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setgetchategories(res.data);
        console.log(res.data.message || "fetch successfully");
      } catch (error) {
        console.log("failed to fetch", error);
      }
    };

    fetchdata();
  }, []);
  return (
    <>
    <motion.section
      initial="hidden"
      variants={container}
      whileInView="show"
      viewport={{ once: true }}
      className="relative py-16 bg-white text-black overflow-hidden"
    >
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl text-black font-extrabold drop-shadow-sm mb-4">
            ✨ Top Categories
          </h2>
          <p className="text-lg text-black/40 max-w-2xl mx-auto">
            Explore our wide range of categories and grab the hottest deals!
          </p>
        </div>

        <motion.div
          variants={container}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5"
        >
          {getcategories.map((category) => (
            <motion.div
              key={category.id}
              variants={item}
              whileHover={{ rotateY: 8, rotateX: -8, scale: 1.05 }}
              whileInView='show'

              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative group"
            >
              {/* soft glow border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 blur-md opacity-20 group-hover:opacity-40 transition"></div>

              <Link href={`/Categories/${category.id}`}>
                <div className="relative bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-5 text-center cursor-pointer shadow-lg overflow-hidden">
                  <div  className="relative z-10 text-4xl flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <img  className="h-15 " src={category.image_url}/>
                  </div>
                  <h3 className="relative z-10 text-sm font-semibold text-gray-200 group-hover:text-pink-400 transition-colors">
                    {category.category_name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
    <div>
      

    </div>
    </>
  )
}

export default Categories;
