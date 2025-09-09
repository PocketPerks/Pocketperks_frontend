'use client'
import { Opacity } from '@mui/icons-material'
import { Categories as Datafullstore } from './datastore'
import {motion ,} from 'framer-motion'

export default function FullStoreHere() {

    const itemvar= {
        hidden:{},
        show:{
            transition:{staggerChildren:0.1}
        }
    }

    const itemvarient = {
        hidden:{ y:30 , Opacity:0 },
        show:{ y:0 , Opacity:1 , transition:{type:'spring' , stiffness:60}}
    }
  return (
    
    <motion.div initial="hidden" whileInView='show' variants={itemvar} className="relative min-h-screen bg-gradient-to-b from-purple-900/80 via-indigo-900/70 to-blue-500/40 overflow-hidden">
      <div className="absolute -top-20 left-10 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-ping"></div>
      <div className="absolute top-1/3 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>

      <div className='relative z-10'>
        <img
          src='/storeimage.png'
          alt='image'
          className='h-[33rem]  w-full object-cover'
        />
        <div className="absolute inset-0 flex justify-center items-end">
          <div className="bg-white rounded-t-full w-full max-w-6xl mx-auto py-3  shadow-lg flex justify-center">
            <h1 className="text-xl font-bold text-black drop-shadow-lg">Shop</h1>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row max-w-7xl mx-auto  gap-6 px-4">

        <div className='w-full  md:w-1/4 h-[20rem] mt-10 bg-white/20 backdrop-blur-lg p-6 rounded-2xl flex flex-col gap-4'>
          <ul className='flex flex-col gap-3'>
            <li><input type="checkbox" /> Option 1</li>
            <li><input type="checkbox" /> Option 2</li>
            <li><input type="checkbox" /> Option 3</li>
            <li><input type="checkbox" /> Option 4</li>
            <li><input type="checkbox" /> Option 5</li>
          </ul>
        </div>

        <motion.div variants={itemvar}  className="w-full md:w-4/4 grid grid-cols-1 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Datafullstore.map((item, index) => (
            <motion.div variants={itemvarient}
              whileHover={{ scale: 1.05, rotateY: 8 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }} key={index} className='bg-white/20 backdrop-blur-xl p-4 rounded-2xl shadow-md flex flex-col items-center transition hover:scale-105'>
              <img
                src={item.Image}
                alt='product'
                className='w-full h-40 bg-black/30 p-2 object-contain mb-4 rounded-2xl'
              />
              <div className='font-semibold mb-3 text-center'>{item.Reward}</div>
              <div className='flex gap-3 w-full justify-center'>
                <button className='flex-1 bg-purple-500 text-white py-2 p-2 rounded-2xl hover:bg-purple-600 transition text-sm sm:text-[12px]'>Add to Cart</button>
                <button className='flex-1 bg-gray-200 text-gray-800 py-2 rounded-2xl hover:bg-gray-300 transition text-sm sm:text-[12px]'>Wishlist</button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.div>
  )
}
