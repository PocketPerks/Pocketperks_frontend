"use client";
import { useState , useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import axios from "axios";

export default function StorePage() {
  const [activeSlide, setActiveSlide] = useState(0);
   const [rating , setrating] = useState(2)
   const [data , setdata] = useState({})

  const slides = [
    "/banner1.png",
    "/banner2.png",
    "/banner2.png",
  ];
   useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const fetchdata = async() => {
     try {
       const res = await axios.get("http://localhost:/3000/" , {
         headers:{
           "Content-Type" : "application/json"
         }
 
       })

       setdata(res.data || [])
       console.log("data fatched")
     } catch (error) {
      console.log("data not fetch" , error)
     }
    }

    fetchdata()
  })

  return (
    
   <div className="h-auto  w-full p-4">
    <div className="flex gap-5">
        
        <div className="bg-white px-6 h-[30rem] rounded-xl shadow-xl p-4 flex flex-col items-center">
               <div className="relative w-[600px] h-[40rem] rounded-lg">
            {/* Images with motion */}
            {slides.map((slide, i) => (
              <Image
                key={i}
                src={slide}
                alt={`Slide ${i}`}
                fill
                className={`object-cover rounded-2xl transition-all duration-700 ${
                  activeSlide === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            </div>
          {/* Slide Dots */}
          <div className="flex gap-2 mt-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`w-3 h-3 rounded-full ${
                  activeSlide === i ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/*Stationary part */}
        <div>
            <div className=" border-2 border-black/10  rounded-2xl shadow-xl h-full w-full">
                
                <div className=" h-[45rem]  bg-white rounded-2xl max-w-full">
                    <div className="h-full w-full">
        <div className=" p-5  gap-10 flex">
                    <div className=" p-3 bg-black/10 rounded-2xl border">
                        <h3>LOGO</h3>
                        </div>
                    <div className="w-full max-w-[40rem]">
                        <h2 className="text-4xl w-full font-mono">Stationary Store</h2>
                        <p className="text-black/30 ">Owner</p>
                      </div>
      </div>
      {/*Review Star*/}
                     <div className="flex p-5 mt-[-4rem] h-20 ml-[25rem] cursor-pointer">
                         
      {[1,2,3,4,5].map((star) => (
        <Star
          key={star}
          onClick={() => setRating(star)}
          className={`w-6 h-6 ${
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
          }`}
        />
      ))}

      <div className="mt-4 ml-[-55px]">Review</div>
    </div>

      {/* Address */}
    <div className="p-5">
        <h2>Address</h2>
        <h3>Mahaveer Pura Morena (mp)</h3>
    </div>
    
    {/* How to use */}
         <div className="p-4 border-t-1 border-black/20">
            <h3 className="font-medium mb-2">How to Use?</h3>
            <div className="border-black/20 border-2 rounded-2xl h-auto p-5">
            <ul className="list-decimal ml-5 space-y-3  text-sm text-gray-600">
              <li>Step one</li>
              <li>Step two</li>
              <li>Step three</li>
              <li>Step four</li>
            </ul>
            </div>
          </div>
                 {/*Coupon */}
                  <div className="mt-6 border-t-1 border-black/10 p-10  flex flex-col items-center">
            <div className="border-2 px-15 bg-black/10 py-2 rounded-lg text-xl font-bold tracking-wider">
              GD787JF2
            </div>
            <p className="text-xs text-gray-500 mt-1">Valid till December 10</p>
            <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl shadow">
              Claim Now
            </button>
          </div>
          </div>
          </div>
            </div>
        </div>
         </div>
         {/*CONTECT*/}
        <div className="h-full w-full  mt-[-14rem]">
            <div className="h-[13rem] w-[40rem] rounded-2xl bg-white shadow-2xl flex justify-around items-center border">
            
                <div className="p-10 border-r-1 h-full ">
                    <h2 className="p-10"> contect</h2>
                </div>
                <div className="p-10 border-r-1 h-full ">
                    <h2 className="p-10">Maps</h2>
                </div>
                <div className="p-10 h-full">
                    <h2 className="p-10">Adress</h2>
                </div>
                </div>
            
        </div>
   
   </div>
  );
}
