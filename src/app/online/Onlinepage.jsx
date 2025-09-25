"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import { ChevronRight, Heart, Star } from "lucide-react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import Image from "next/image"
import OnlineSlider from "./OnlineSlider"

export default function Onlinepage() {
  const [getcards, setgetcards] = useState([])
  const [slice, setslice] = useState(6)
  const [rating, setRating] = useState(2)
  const [liked, setLiked] = useState({})
  const [activeIndex, setActiveIndex] = useState(0)

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
  const banners = [
    {
      images: "/Electronic.jpg",
      title: "Amazon",
      description: "Great Indian fest",
      offer: "min 30% off",
      product: "skin care",
    },
    {
      images: "/flipkart.jpg",
      title: "Flipkart",
      description: "Great Indian fest",
      offer: "min 30% off",
      product: "skin care",
    },
    {
      images: "/Cloth.jpg",
      title: "Clothes",
      description: "Great Indian fest",
      offer: "min 30% off",
      product: "skin care",
    },
  ]

  const sites = [
    { name: "Amazon", img: "/filipkaronline2.png", cashback: "Flat 10% Cashback" },
    { name: "Myntra", img: "/filipkaronline2.png", cashback: "Flat 12% Cashback" },
    { name: "Flipkart", img: "/filipkaronline2.png", cashback: "Flat 15% Cashback" },
  ]

  // ✅ Carousel items
  const images = banners.map((images, index) => (
    <img
      key={index}
      src={images.images}
      className="w-full max-w-xl sm:h-[18rem] sm:max-w-3xl h-[8rem] rounded-xl"
    />
  ))

  return (
    <div className="min-h-screen w-full p-2 bg-black/5">      
          <div className="w-full">
            <OnlineSlider/>
          </div>
        

      {/* Sites Section */}
      <div className="w-full px-2 py-[-2rem]">
        <h2 className="text-4xl font-extrabold mb-4">Our Best Trending Sites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sites.map((site, i) => (
            
            <div
              key={i}
              
            > 
            <div  className="rounded-xl shadow-md border  flex flex-col items-center hover:shadow-lg transition">
              <div className="relative w-full h-[13rem] rounded-lg overflow-hidden">
                <Image src={site.img} alt={site.name} fill className="object-cover" />
                <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded-md shadow">
                  {site.cashback}
                </div>
              </div>
              

              </div>
              <p className=" w-full text-center font-semibold">{site.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cards Section */}
      {getcards.slice(0, slice).map((cat, idx) => (
        <div key={idx} className="w-full">
          <div className="border-t p-2 mt-5 text-center w-full ml-2 border-black/10 max-w-[76rem]"></div>
          <div className="w-full bg-white p-3 border-2 border-black/20 rounded-2xl mx-auto">
            {/* Category Title */}
            <div className="flex items-center mb-3">
              <h2 className="text-3xl font-bold capitalize">{cat.name}</h2>
            </div>

            {/* Products Scrollable Row */}
          <div className="flex h-full gap-3 overflow-x-auto rounded-xl scrollbar-hide pb-2">
  {cat.products.map((prod, index) => (
    <div key={prod.id || index} className="flex items-stretch">
      {/* Product Card */}
      <div className="min-w-[18rem] flex flex-col rounded-xl hover:shadow-md bg-white flex-shrink-0 relative">
        {/* Image Section */}
        <div className="relative flex justify-center items-center rounded-2xl w-full h-50">
          <img
            src={prod.image || "/filipkaronline2.png"}
            alt={prod.title}
            className="w-full max-w-[17rem] border h-40 object-cover rounded-2xl"
          />
          {/* Discount / Cashback */}
          {prod.discount && (
            <span className="absolute top-2  bg-red-600 text-white text-xs px-2 py-1 rounded-lg">
              {prod.discount}
            </span>
          )}
          {prod.cashback && (
            <span className="absolute bottom-9 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-lg">
              upto 5% Cashback
            </span>
          )}
          {/* Heart Icon */}
          <div className="absolute top-2 cursor-pointer right-2">
            <Heart
              size={30}
              className={
                liked[prod.id]
                  ? "fill-red-500 border-2 rounded-full p-1 bg-pink-300 text-red-500"
                  : "text-gray-400 border-2 rounded-full bg-white p-1"
              }
              onClick={() =>
                setLiked((prev) => ({ ...prev, [prod.id]: !prev[prod.id] }))
              }
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="p-3 flex h-20 gap-5">
          <h3 className="font-extrabold w-20 mt-[-1.6rem] text-3xl">
            {prod.title}
          </h3>
          <div>
            <div className="flex  mt-[-1rem] ml-25 text-lg text-gray-500">
             {[1, 2, 3, 4, 5].map((star) => (
  <div
    key={star}
    className="relative inline-block cursor-pointer"
    onClick={(e) => {
      const { left, width } = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - left
      if (clickX < width / 2) {
        setRating(star - 0.5) // half star
      } else {
        setRating(star) // full star
      }
    }}
  >
    <Star
      className={`w-5 h-5 ${
        rating >= star
          ? "fill-yellow-400 text-yellow-400"
          : rating >= star - 0.5
          ? "text-yellow-400 relative before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1/2 before:bg-yellow-400"
          : "text-gray-400"
      }`}
    />
  </div>
))}


              <span className=" mt-[-5px] ml-2 text-[1rem]">2.2</span>
              <span>{prod.reviews}</span>
            </div>
            <span className="text-end text-sm ml-25">32 Review</span>
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
        <div className="w-px ml-5 h-[16.5rem] mt-4 bg-gray-300 mx-1"></div>
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
