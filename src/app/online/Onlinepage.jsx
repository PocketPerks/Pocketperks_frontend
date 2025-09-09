'use client'
import { useState } from "react"
import { BankData, electronicData, MakeupData, OnlineData, ReachrgeData } from "./OnlineData"
import { motion } from "framer-motion"
import Link from "next/link";
import { title } from "process";

export default function Onlinepage() {
  const [viewaall , setviewall] = useState(2)

  const allCarts = [
    { title:"Shopping", slider: OnlineData },
    { title:"Makeup", slider: MakeupData },
    { title:"Bank Offers", slider: BankData },
    { title:"Recharge", slider: ReachrgeData },
    {title:"Electronic" , slider:electronicData}
  ]

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

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
  }

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } }
  }

  // har slider ke liye ek index rakhega (initial 0)
  const [indexes, setIndexes] = useState(Array(allCarts.length).fill(0));

  const handleNext = (sliderIndex, length) => {
    setIndexes(prev => {
      const newIndexes = [...prev];
      if (newIndexes[sliderIndex] + 3 < length) {
        newIndexes[sliderIndex] += 1;
      }
      return newIndexes;
    });
  };

  const handlePrev = (sliderIndex) => {
    setIndexes(prev => {
      const newIndexes = [...prev];
      if (newIndexes[sliderIndex] > 0) {
        newIndexes[sliderIndex] -= 1;
      }
      return newIndexes;
    });
  };

  return (
    <div className="relative p-8 min-h-screen flex flex-col items-start bg-gray-900 text-white overflow-hidden">
      
      {/* Soft floating orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-500 rounded-full blur-2xl opacity-15 animate-pulse"></div>

      {/* Multiple Sliders */}
      {allCarts.slice(0 , viewaall).map((cart, idx) => (
        <div key={idx} className="w-full mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-violet-400 mb-8 drop-shadow-lg">
            {cart.title}
          </h1>
          <div className="overflow-hidden w-full max-w-full relative">
            <motion.div
              className="flex gap-8"
              animate={{ x: -indexes[idx] * 320 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {cart.slider.map((item, index) => (
                <div key={index} className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-2xl p-10 w-[300px] flex-shrink-0 hover:scale-105 transition-transform duration-300 shadow-lg">
                  <h2 className="text-xl font-semibold text-violet-300">{item.title}</h2>
                  <p className="text-sm text-gray-300 mt-2">{item.data}</p>
                  <div className="mt-4 text-pink-400 font-medium">{item.offer}</div>
                  <div className="mt-2 text-green-400 font-bold">{item.cashback}</div>
                </div>
              ))}
            </motion.div>
          </div>
          {/* Prev & Next Buttons */}
          <div className="flex justify-between w-full mt-4">
            <button
              className="px-6 py-2 rounded-full text-white font-semibold shadow-md bg-white/30"
              onClick={() => handlePrev(idx)}
            >
              ←
            </button>
            <button
              className="px-6 py-2 rounded-full text-white font-semibold shadow-md bg-white/30"
              onClick={() => handleNext(idx, cart.slider.length)}
            >
              →
            </button>
          </div>

          

        </div>
      ))}
      <div className="flex justify-center w-full">
            <button className="bg-white/30 h-10 rounded-full w-30" onClick={() => setviewall(viewaall + 2)}>View All</button>
            </div>

      {/* Categories Section */}
      <motion.section
        initial="hidden"
        variants={container}
        whileInView="show"
        viewport={{ once: true }}
        className="relative py-16 bg-gray-900 text-white overflow-hidden"
      >
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
    </div>
  )
}
