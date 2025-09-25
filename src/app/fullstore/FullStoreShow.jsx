'use client'
import { Categories } from './datastore'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Menu, X , Heart , Plus , Star , MessageCircle} from 'lucide-react' // hamburger & close icon

export default function FullStoreHere() {
  const [getcards, setgetcards] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [showFilter, setShowFilter] = useState(false) // 👈 new state
  const [rating , setrating] = useState(2)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get("http://172.30.2.161:4000/api/ourStore/offline-deals", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setgetcards(res.data.cards || res.data || [])
        console.log(res.data.message || "fetch successfully")
      } catch (error) {
        console.log("failed to fetch", error)
      }
    }
    fetchdata()
  }, [])

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId === selectedCategory ? null : catId)
  }

  const itemvar = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemvarient = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 60 } }
  }

  const filteredDeals = selectedCategory
    ? getcards.filter(cat => cat.category_id === selectedCategory)
    : getcards

  return (
    <motion.div initial="hidden" whileInView='show' variants={itemvar} className="relative min-h-screen">
      <div className='relative p-3 z-10'>
        <div className='flex gap-[7rem]'>
        <img
          src='/storeimage.png'
          alt='image'
          className=' w-[15rem] h-[10rem]  object-cover'
        />
        <div className='text-5xl mt-10 p-4 font-bold'>SHOP IN YOUR NEAREST STORE</div>
         
        </div>
        <div className='flex'>
          <button
              className="md:hidden  h-10 top-5 left-5 z-50  text-black p-2 rounded-lg"
              onClick={() => setShowFilter(!showFilter)}
            >
              {showFilter ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* ---------- Sidebar (Filters) ---------- */}
            <div
              className={`
                absolute md:static  left-0 h-auto w-64 md:w-1/4
                bg-white shadow-2xl p-6 rounded-r-2xl md:rounded-2xl 
                transform transition-transform duration-300 z-40
                ${showFilter ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
              `}
            >
              <h2 className="text-lg font-bold mb-4">Shop by Category</h2>
              <ul className='flex flex-col gap-3'>
                {getcards.map((cat) => (
                  <li key={cat.category_id}>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedCategory === cat.category_id}
                        onChange={() => handleCategoryChange(cat.category_id)}
                      />
                      {cat.category_name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

           

        <div className="relative z-10 flex flex-col md:flex-row max-w-7xl mx-auto gap-6 px-4">

          <motion.div variants={itemvar} className='flex gap-8 w-full'>

            <div className="w-full h-auto max-w-8xl md:flex-1 mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gride-cols-5 gap-2 p-4">
  {filteredDeals.flatMap(cat =>
    cat.deals.map((deal) => (
      <motion.div
        key={deal.id}
        whileHover={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-white shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden flex flex-col w-[250px] h-[300px]"
      >
        {/* Image Section */}
        <div className="p-5">
  <div className="relative w-full h-40 bg-gray-200 flex items-center justify-center rounded-xl shadow-md">
    
    {/* ❤️ Heart Icon Top Right Corner */}
    <div  onClick={() => setLiked(!liked)}
     className="absolute top-2 right-2 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer">
      <Heart
        size={30}
        className={liked ? "fill-red-500 text-red-500" : "text-gray-400"}
      />
    </div>

    {/* Product Image */}
    <img
      src={deal.image_url}
      alt="product"
      className="h-32 object-contain"
    />
  </div>
</div>


        {/* Content Section */}
        <div className="flex flex-col  p-2">
          <div>
          <h3 className="font-semibold h-10 flex text-gray-800 text-sm text-center mt-[-20px] line-clamp-2">
            {deal.title}
          </h3>
          <p className='text-[10px] '>Carts</p>
          </div>

          <div className="text-xs text-gray-500 flex   justify-between items-center">
            <div className="flex  cursor-pointer">
      {[1,2,3,4,5].map((star) => (
        <Star
          key={star}
          onClick={() => setRating(star)}
          className={`w-4 h-4 ${
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
          }`}
        />
      ))}
    </div>
            <div className='flex flex-col gap-3 mt-[-30px]'>
          <div className="bg-black h-8 w-8 rounded-full flex items-center justify-center">
  <Plus fill="red" size={16} className="text-white" />
</div>

           </div>
          </div>

          <div className='w-full border-t-1 p-[7.2px] border-black/30 bg-black/10 rounded-b-2xl text-center'>up to 20% cashback</div>
        </div>
      </motion.div>
    ))
  )}
</div>
          </motion.div>
        </div>

         
            </div>

      </div>
    </motion.div>
  )
}
