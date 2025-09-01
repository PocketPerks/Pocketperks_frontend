'use client'
import { motion , Variants} from "framer-motion";

const stats = [
  { label: 'Happy Users', value: '10M+' },
  { label: 'Cashback Paid', value: '₹500Cr+' },
  { label: 'Partner Stores', value: '1000+' },
  { label: 'User Rating', value: '4.5★' },
];

const Hero = () => {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
  };

  const item : Variants= {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{once:true}}

      variants={container}
      className="relative bg-gradient-to-r from-orange-50 to-yellow-50 overflow-hidden"
    >
      {/* Banner */}
      <motion.div
        variants={item}
        className="relative h-96 md:h-[500px] flex items-center justify-center bg-gradient-to-r from-orange-400 to-yellow-400"
      >
        <motion.div 
          className="text-center px-4"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
            India's Best Cashback & Coupons Site
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
            Shop online and earn cashback on every purchase. Get the best deals and save money!
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Start Shopping Now
          </button>
        </motion.div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div 
        variants={container}
        className="bg-white py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05, rotateY: 6, rotateX: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-white/10 backdrop-blur-md border border-gray-200 rounded-2xl p-5 shadow-lg cursor-pointer"
              >
                <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Hero;
