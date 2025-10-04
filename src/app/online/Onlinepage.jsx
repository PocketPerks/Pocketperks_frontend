"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import { ChevronRight, Heart, Star } from "lucide-react"
import "react-alice-carousel/lib/alice-carousel.css"
import Image from "next/image"
import OnlineSlider from "./OnlineSlider"
import OnlineHeart from './OnlineHeart'
import Link from "next/link"

export default function Onlinepage() {
  const [getcards, setgetcards] = useState([])
  const [slice, setslice] = useState(6)
  const [ratings, setRatings] = useState({})


  const handleView = () => {
    setslice((prev) => prev + 4)
  }

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get("http://172.30.2.161:4000/api/online/offers", {
          headers: { "Content-Type": "application/json" },
        })
        setgetcards(res.data || [])
      } catch (error) {
        console.log("failed to fetch", error)
      }
    }
    fetchdata()
  }, [])

  // ✅ Banner images
  

  const sites = [
    { name: "Amazon", img: "/filipkaronline2.png", cashback: "Flat 10% Cashback" },
    { name: "Myntra", img: "/filipkaronline2.png", cashback: "Flat 12% Cashback" },
    { name: "Flipkart", img: "/filipkaronline2.png", cashback: "Flat 15% Cashback" },
  ]

  // ✅ Carousel items
 
  

  return (
    <div className="min-h-screen w-full p-2 bg-black/5">      
          <div className="w-full">
            <OnlineSlider/>
          </div>
        

      {/* Sites Section */}
      <div className="w-full px-2 py-[-2rem]">
        <h2 className="text-4xl font-extrabold mb-4">Our Best Trending Sites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 p-6 md:grid-cols-3 gap-6">
          {sites.map((site, i) => (
            
            <div
              key={i}
              
            > 
            <div  className="rounded-xl shadow-md border  flex flex-col items-center hover:shadow-lg transition">
              <div className="relative w-full h-[15rem] rounded-lg ">
                <Image src={site.img} alt={site.name} fill className="object-cover rounded-xl" />
                  <div className="absolute top-[-10px] p-4  left-30 bg-white text-sm  w-full max-w-[10rem] py-2 rounded-md shadow">
                    <p className="w-full text-center font-bold">{site.cashback}</p>
                  </div>
              </div>
              

              </div>
              <p className=" w-full text-center text-2xl  font-bold">{site.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cards Section */}
      {getcards.slice(0, slice).map((cat, idx) => (
        <div key={idx} className="w-full">
          <div className="border-t p-2 mt-5 text-center w-full  border-black/10 max-w-[76rem]"></div>
          <div className="w-full bg-white p-3 border-2 border-black/20 rounded-2xl mx-auto">
            {/* Category Title */}
            <div className="flex items-center mb-3">
              <h2 className="text-4xl font-extrabold capitalize">{cat.name}</h2>
            </div>

            {/* Products Scrollable Row */}
          <div className="flex h-full gap-3 overflow-x-auto rounded-xl scrollbar-hide pb-2">
  {cat.products.map((prod, index) => (
    <div key={prod.id || index} className="flex items-stretch">
      
      {/* Product Card */}
      <div className="min-w-[17rem] flex flex-col rounded-xl hover:shadow-md bg-white flex-shrink-0 relative">
        {/* Image Section */}
        <Link href="/ProductPage">
        <div className="relative flex justify-center ml-3 items-center rounded-2xl w-full min-w-[15rem] h-50">
          <img
            src={prod.image || "/filipkaronline2.png"}
            alt={prod.title}
            className="w-full max-w-[17rem] border-2  h-40 object-cover rounded-2xl"
          />
          {/* Discount / Cashback */}
          {prod.discount && (
            <span className="absolute top-2  bg-red-600 text-white text-xs px-2 py-1 rounded-lg">
              {prod.discount}
            </span>
          )}
          {prod.cashback && (
            <span className="absolute bottom-9 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded-lg">
              upto 5% Cashback
            </span>
          )}
          {/* Heart Icon */}
       <OnlineHeart/>
        </div>
        </Link>

        {/* Details Section */}
        <div className="p-3 flex h-20 gap-5">
          <h3 className="font-bold w-20 mt-[-1.6rem] text-3xl">
            {prod.title}
          </h3>
          <div>
          <div className="flex mt-[-1.7rem] ml-15 text-lg text-gray-500">
  {[1, 2, 3, 4, 5].map((star) => (
    <div
      key={star}
      className="relative inline-block"
    >
      {/* Base Empty Star (Gray) */}
      <Star className="w-5 h-5 text-gray-300" />

      {/* Full Yellow Star Overlay */}
      {ratings[prod.id] >= star && (
        <Star className="w-4 h-4 text-yellow-400 absolute left-0 top-0 fill-yellow-400" />
      )}

      {/* Half Yellow Star Overlay */}
      {ratings[prod.id] === star - 0.5 && (
        <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        </div>
      )}
    </div>
  ))}








              <span className="mt-[-5px] ml-2 text-[1rem]">
  {ratings[prod.id] ? ratings[prod.id].toFixed(1) : "0.0"}
</span>
              <span>{prod.reviews}</span>
            </div>
          </div>
        </div>

        {/* Offer Tags */}
        <div className="mt-[-4rem] p-2">
          <p className="text-sm text-gray-800">{prod.offer}</p>
          <div className="w-full max-w-[15rem] border-t text-[10px]">
  <ul className="flex gap-1 pt-1 pb-3">
    <li className="bg-pink-300 px-2 py-0.5 text-[9px] rounded border">Ladies</li>
    <li className="bg-blue-300 px-2 py-0.5 text-[9px] rounded border">Man</li>
    <li className="bg-yellow-200 px-2 py-0.5 text-[9px] rounded border">Children</li>
    <li className="bg-pink-200 px-2 py-0.5 text-[9px] rounded border">Ladies</li>
    <li className="bg-pink-200 px-2 py-0.5 text-[9px] rounded border">Ladies</li>
  </ul>
</div>

        </div>
      </div>

      {/* Separator Line (last card ke baad na ho) */}
      {index !== cat.products.length - 1 && (
        <div className="w-px h-[16.5rem] mt-4 ml-3 bg-gray-300 mx-1"></div>
      )}
    </div>
  ))}


              {/* Sideways Arrow */}
              <div className="flex items-center h-10 justify-center">
  <ChevronRight size={20} className="text-gray-600" />
</div>

            </div>
          </div>
        </div>
      ))}

      {/* View More Button */}
      <div className="w-full max-w-md mx-auto flex justify-center mt-4">
        <button
          onClick={handleView}
          className="px-6 py-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition text-sm md:text-base"
        >
          View More +
        </button>
      </div>
    </div>
  )
}
