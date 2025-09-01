"use client";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {motion} from 'framer-motion'

const Page = () => {
  const carouselItems = [
    <div className="bg-white p-1 h-auto w-full max-w-sm rounded-2xl shadow-md flex flex-col items-center justify-center">
      <img
        src="product.png"
        alt="Item 1"
        className=" w-full h-[15rem] rounded-xl object-cover"
      />
    </div>,
    <div className="bg-white p-1 h-auto w-full max-w-sm rounded-2xl shadow-md flex flex-col items-center justify-center">
      <img
        src="https://i.ibb.co/4F2yR9y/phone.png"
        alt="Item 2"
        className="w-full h-[15rem] rounded-xl object-cover"
      />
    </div>,
    <div className="bg-white p-1 h-auto w-full max-w-sm rounded-2xl shadow-md flex flex-col items-center justify-center">
      <img
        src="https://i.ibb.co/ysx4GdQ/fashion.png"
        alt="Item 3"
        className="w-full h-[15rem] rounded-xl object-cover"
      />
    </div>,
  ];


  return (
    <>
    <div className="font-[Poppins] bg-gradient-to-br from-[#f9fafc] via-[#fdfdfd] to-[#f1f5f9] min-h-screen">
     <Navbar/>
      {/* 🔹 Hero Banner */}
      <section className="relative bg-gray-800 text-white rounded-3xl h-[34rem] max-w-6xl mx-auto shadow-lg p-10">
        <div>
           <div className="flex flex-col absolute left-0 md:left-[40rem] w-full max-w-md gap-4">
            <motion.div initial={{x:100 , opacity:0}} viewport={{once:true}} whileInView={{x:0 , opacity:1}}  transition={{type:'spring' , stiffness:20,staggerChildren:0.2}} className="bg-white border rounded-2xl p-5 shadow hover:shadow-md transition">
              <div className="text-2xl font-extrabold text-[#00129b]">72h</div>
              <div className="text-xs font-semibold absolute text-black">Rewards Track In</div>
            </motion.div>
            <motion.div initial={{x:100 , opacity:0}} viewport={{once:true}} whileInView={{x:0 , opacity:1}}  transition={{type:'spring' , stiffness:20,staggerChildren:0.5}} className="bg-white border rounded-2xl p-5 shadow hover:shadow-md transition">
              <div className="text-2xl font-extrabold text-[#00129b]">30d</div>
              <div className="text-xs font-semibold text-black mt-1">Rewards Confirm In</div>
            </motion.div>
            <motion.div initial={{x:100 , opacity:0}} viewport={{once:true}} whileInView={{x:0 , opacity:1}}  transition={{type:'spring' , stiffness:20,staggerChildren:0.5}} className="bg-white border rounded-2xl p-5 shadow hover:shadow-md transition">
              <div className="text-2xl font-extrabold text-green-600">✅ YES</div>
              <div className="text-xs font-semibold text-black mt-1">App Orders Eligible</div>
            </motion.div>
          </div>
          <p className="text-sm mb-2 opacity-80">⚡ Reminder</p>
          <h1 className="font-extrabold text-4xl leading-snug">
            Clear your Amazon Cart <br /> Before Shopping →
          </h1>
          <p className="text-sm mt-3 opacity-80">
            Wishlist & Save for later section bhi clear kar lo!
          </p>
        </div>
        <div>
        {/* 🔹 Alice Carousel Added */}
        <div className="mt-10 w-full max-w-md">
          <AliceCarousel
            mouseTracking
            items={carouselItems}
            autoPlay
            autoPlayInterval={3000}
            infinite
            disableDotsControls={true}
            disableButtonsControls={true}
          />
        </div>

       
          </div>
      </section>

      {/* 🔹 Content Grid */}
      <div className="max-w-6xl mx-auto mt-18 grid md:grid-cols-3 gap-8">
        {/* Amazon Promo Card */}
        <motion.div initial={{x:-100 , opacity:0}} viewport={{once:true}} whileInView={{x:0 , opacity:1}} transition={{type:'spring' , stiffness:20}} className="col-span-1 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition">
          <div className="flex justify-between items-center mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon logo"
              className="h-7"
            />
            <span className="text-xs text-gray-500">⭐ 4.8 | 1875 Ratings</span>
          </div>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Amazon India’s largest marketplace, offering electronics, fashion,
            beauty & more at the best prices.
          </p>
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-5 font-bold text-gray-800 mb-5">
            Upto <span className="text-[#FF6600]">4%</span> Cashback <br />
            + <span className="text-[#0059ff]">5% Rewards</span> <br />
            on Fashion, Mobiles & More
          </div>
          <a
            href="#"
            className="block w-full text-center bg-[#FF6600] text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            🎁 Claim Rewards on Amazon →
          </a>
        </motion.div>

        {/* Side Info */}
        <div className="col-span-2 flex flex-col gap-6">
          {/* Top Amazon Offers */}
          <motion.div initial={{x:100 , opacity:0}} viewport={{once:true}} whileInView={{x:0 , opacity:1}}  transition={{type:'spring' , stiffness:20,staggerChildren:0.5}} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
            <h3 className="font-bold text-lg text-gray-800">🔥 Top Amazon Offers</h3>
            <p className="mt-2 text-sm text-gray-600">
              Get up to 80% Off + Extra 5% CashKaro Rewards on Fashion,
              Electronics, Home, Beauty & more.
            </p>
            <a
              href="#"
              className="inline-block mt-2 text-[#0059ff] text-sm font-medium hover:underline"
            >
              See Offer Details →
            </a>
          </motion.div>

          {/* Timelines */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white border rounded-2xl p-5 shadow hover:shadow-md transition">
              <div className="text-2xl font-extrabold text-[#00129b]">72h</div>
              <div className="text-xs font-semibold mt-1">Rewards Track In</div>
            </div>
            <div className="bg-white border rounded-2xl p-5 shadow hover:shadow-md transition">
              <div className="text-2xl font-extrabold text-[#00129b]">30d</div>
              <div className="text-xs font-semibold mt-1">Rewards Confirm In</div>
            </div>
            <div className="bg-white border rounded-2xl p-5 shadow hover:shadow-md transition">
              <div className="text-2xl font-extrabold text-green-600">✅ YES</div>
              <div className="text-xs font-semibold mt-1">App Orders Eligible</div>
            </div>
          </div>

          {/* Terms */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
            <h3 className="font-bold text-lg">📜 Important Terms</h3>
            <ul className="mt-3 list-disc pl-6 text-sm text-gray-600 space-y-2">
              <li>
                Do not add items in Cart/Wishlist before visiting via CashKaro.
              </li>
              <li>Seller/Merchant/Affiliate accounts not eligible.</li>
              <li>GST/Business users not eligible for mobile rewards.</li>
              <li>
                Rewards calculated on final amount (excluding GST/charges).
              </li>
            </ul>
            <a
              href="#"
              className="inline-block mt-3 text-[#0059ff] text-sm font-medium hover:underline"
            >
              View All Terms →
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Page;
