'use client'
import {motion} from 'framer-motion'
import { useRouter } from 'next/navigation'
export default function ArrowEffect(){
    const router = useRouter()
      const opencart = () => {
    router.push("/fullstore")
      

  }
    return(
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
    )
}