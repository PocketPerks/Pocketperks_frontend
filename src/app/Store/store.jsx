'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function Store() {
  const text = "LOCAL STORE".split("")
  const router = useRouter()

  const opencart = () => {
    router.push("/fullstore")

  }

  return (
    <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      
      <div className="absolute inset-0 h-screen bg-white/10 backdrop-blur-[10px]"></div>
    
      <motion.div 
        className="absolute top-10 left-5 sm:left-10 w-24 sm:w-40 h-24 sm:h-40 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"
        animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-5 sm:right-20 w-36 sm:w-56 h-36 sm:h-56 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"
        animate={{ x: [0, -25, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/3 right-10 sm:right-1/4 w-20 sm:w-32 h-20 sm:h-32 bg-pink-500 rounded-full blur-2xl opacity-15 animate-pulse"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />


      <div className="absolute inset-0 flex justify-center items-center z-10">
        <button onClick={() => opencart()} className="bg-purple-400/80 mr-6 rounded-2xl h-[3rem] w-[6rem] sm:w-[7rem] hover:bg-purple-500 hover:scale-105 shadow-xl hover:shadow-2xl text-sm sm:text-lg font-semibold text-white flex items-center justify-center">
          See All 
          {['>', '>', '>'].map((arrow, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.9 }}
              className="mx-0.5 "
            >
              {arrow}
            </motion.span>
          ))}
        </button>
      </div>


      <div className="relative flex justify-center items-center inset-0 z-0">
        <img
          src="/storeimage.png"
          className="h-[25rem] sm:h-[35rem] w-[90%] sm:w-full max-w-[28rem] sm:max-w-[60rem] rounded-2xl object-cover shadow-2xl shadow-purple-500/50"
          alt="store"
        />


        <div className="absolute inset-0 flex justify-center items-start pt-20 sm:pt-32 z-20">
          <div className="flex flex-wrap justify-center">
            {text.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: Math.random() * 1.5,
                  type: "spring",
                  stiffness: 100,
                }}
                className="text-4xl sm:text-7xl font-extrabold text-white relative"
                style={{
                  textShadow: `
                    0 0 2px #fff,
                    0 0 4px #fff,
                    0 0 6px #a855f7,
                    0 0 8px #f472b6
                  `
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
