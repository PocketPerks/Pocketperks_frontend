'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import dynamic from 'next/dynamic'

export default function Store() {
  const StoreLatter = dynamic(() => import("./StoreLatter") ,{
    ssr:false
  })
  const ArrowEffect = dynamic(() => import("./ArrowEffect") ,{
    ssr:false
  })
  const router = useRouter()



  return (
    <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      
      <div className="absolute inset-0 h-screen bg-white/10 backdrop-blur-[10px]"></div>
    
      


      
    <ArrowEffect/>


      <div className="relative flex justify-center items-center inset-0 z-0">
       <Image
       src="/storeimage.png"
          className="h-[25rem] sm:h-[35rem] w-[90%] sm:w-full max-w-[28rem] sm:max-w-[60rem] rounded-2xl object-cover  shadow-purple-500/50"
          alt="store"
          width={960}   // exact pixels
  height={560}
       />


        <StoreLatter/>
      </div>

    </section>
  )
}
