"use client";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useParams } from "next/navigation";

export default function CategoriesLoad() {
  const [brandData, setBrandData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://172.30.2.161:4000/api/brands/${id}/details`,
          { headers: { "Content-Type": "application/json" } }
        );
        setBrandData(res.data);
        console.log("Data fetched successfully");
      } catch (error) {
        console.log("Failed to fetch", error);
      }
    };
    if (id) fetchData();
  }, [id]);

  if (!brandData) return <div>Loading...</div>;

  const carouselItems = brandData.carousel_images.map((img) => (
    <div
      key={img.id}
      className="bg-white p-1 h-auto w-full max-w-sm rounded-2xl shadow-md flex flex-col items-center justify-center"
    >
      <img
        src={img.image_url}
        alt={`Carousel ${img.id}`}
        className="w-full h-[15rem] rounded-xl object-cover"
      />
    </div>
  ));

  return (
    <>
      <div className="font-[Poppins] bg-gradient-to-br from-[#f9fafc] via-[#fdfdfd] to-[#f1f5f9] min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white rounded-3xl h-[34rem] max-w-6xl mx-auto shadow-lg p-10">
          <div>
            <div className="flex flex-col absolute left-0 md:left-[40rem] w-full max-w-md gap-4">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 20 }}
                className="bg-white border rounded-2xl p-5 shadow hover:shadow-md transition"
              >
                <div className="text-2xl font-extrabold text-[#00129b]">
                  {brandData.rewards[0]?.rewards_track_in || "N/A"}
                </div>
                <div className="text-xs font-semibold absolute text-black">
                  Rewards Track In
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 20 }}
                className="bg-white border rounded-2xl p-5 shadow hover:shadow-md transition"
              >
                <div className="text-2xl font-extrabold text-[#00129b]">
                  {brandData.rewards[0]?.vouchers_taken || "N/A"}
                </div>
                <div className="text-xs font-semibold text-black mt-1">
                  Rewards Confirm In
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 20 }}
                className="bg-white border rounded-2xl p-5 shadow hover:shadow-md transition"
              >
                <div className="text-2xl font-extrabold text-green-600">
                  ✅ {brandData.rewards[0]?.reward_used || "N/A"}
                </div>
                <div className="text-xs font-semibold text-black mt-1">
                  App Orders Eligible
                </div>
              </motion.div>
            </div>

            <p className="text-sm mb-2 opacity-80">⚡ Reminder</p>
            <h1 className="font-extrabold text-4xl leading-snug">
              Clear your {brandData.brand_name} Cart <br /> Before Shopping →
            </h1>
            <p className="text-sm mt-3 opacity-80">
              Wishlist & Save for later section bhi clear kar lo!
            </p>
          </div>

          {/* Carousel */}
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
        </section>

        {/* Content Grid */}
        <div className="max-w-6xl mx-auto mt-18 grid md:grid-cols-3 gap-8">
          {/* Promo Card */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 20 }}
            className="col-span-1 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition"
          >
            <div className="flex justify-between items-center mb-4">
              <img
                src={brandData.logo_url}
                alt={brandData.brand_name}
                className="h-7"
              />
              <span className="text-xs text-gray-500">
                ⭐ {brandData.rating} | {brandData.ratingsCount} Ratings
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {brandData.description}
            </p>
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-5 font-bold text-gray-800 mb-5">
              {brandData.cashback} {brandData.cashback_type} <br />
              + <span className="text-[#0059ff]">{brandData.rewards[0]?.reward_used}</span>
            </div>
            <a
              href={brandData.offerLink}
              target="_blank"
              className="block w-full text-center bg-[#FF6600] text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
            >
              🎁 Claim Rewards on {brandData.brand_name} →
            </a>
          </motion.div>

          {/* Side Info */}
          <div className="col-span-2 flex flex-col gap-6">
            {brandData.categories.map((cat) => (
              <motion.div
                key={cat.category.id}
                initial={{ x: 100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 20 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md"
              >
                <h3 className="font-bold text-lg text-gray-800">
                  📌 {cat.category.category_name}
                </h3>
              </motion.div>
            ))}

            {/* Rewards / Terms */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-lg">📜 Rewards Info</h3>
              <ul className="mt-3 list-disc pl-6 text-sm text-gray-600 space-y-2">
                {brandData.rewards.map((reward, idx) => (
                  <li key={idx}>
                    Track: {reward.rewards_track_in}, Used: {reward.reward_used}, Vouchers: {reward.vouchers_taken}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}
