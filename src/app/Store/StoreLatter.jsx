"use client"
import {motion} from 'framer-motion'
export default function StoreEffect(){
    const text = "LOCAL STORE".split("")
    
    return(
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
    )
}