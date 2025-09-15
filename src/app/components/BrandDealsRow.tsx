'use client'
import { useEffect, useState } from 'react';
import BrandDealCard from './BrandDealCard';
import { motion } from "framer-motion";
import axios from 'axios';

const BrandDealsRow = () => {
  const [getcards , setgetcards] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get("http://172.30.2.161:4000/api/credit-cards", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        // agar res.data.cards nahi mila toh res.data ko hi set karo
        setgetcards(res.data.cards || res.data || []);
        console.log(res.data.message || "fetch successfully");
      } catch (error) {
        console.log("failed to fetch", error);
      }
    };

    fetchdata();
  }, []);

  return (
    <section className="py-12 bg-white relative overflow-hidden text-white">
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { 
              opacity: 1, 
              y: 0,
              transition: { staggerChildren: 0.2, ease: "easeOut" }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {getcards.map((card) => (
            <motion.div
              key={card.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="relative group"
            >
              {/* subtle soft glow border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 blur-lg opacity-40 group-hover:opacity-60 transition"></div>

              <div className="relative bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg overflow-hidden">
                <BrandDealCard
                  href={card.link || "#"}
                  brandName={card.bank_name}
                  logo={
                    <img 
                      src={card.image_url} 
                      alt={card.bank_name || "card image"} 
                      className="w-10 h-10 object-contain rounded-full"
                    />
                  }
                  offerText={`${card.cashback_percent || 0}% Cashback`}
                  subText={card.joining_offer || "No Joining Offer"} 
                  cashbackText={card.benefits || "No Extra Benefits"} 
                  bgClass="from-indigo-500 to-purple-600"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandDealsRow;
