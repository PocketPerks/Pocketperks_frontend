'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AllStore() {
  return (
    <div className="bg-white backdrop-blur-lg  p-10 flex flex-col md:flex-row items-center justify-around gap-10 w-full ">

      {/* Left Side: Text + Animated Arrows */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black drop-shadow-2xl">
          Shop Top Brands & Earn Cashback
        </h1>

        <div className="flex justify-center md:justify-start items-center space-x-2 mt-2">
          {['>', '>', '>'].map((arrow, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: [0.2, 1, 0.2], y: [0, -8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }}
              className="text-black text-3xl font-bold"
            >
              {arrow}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Right Side: Image */}
      <div 
        className="w-full max-w-sm rounded-2xl overflow-hidden"
        
      >
        <Link href=""/>
        <img
          className="object-cover drop-shadow-xl w-full h-full"
          src="/storeimage.png"
          alt="store image"
        />
      </div>

    </div>
  )
}
