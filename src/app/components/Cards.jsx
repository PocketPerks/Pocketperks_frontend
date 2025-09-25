'use client'
import { useState, useEffect } from "react";
import axios from "axios";

export default function Cards() {
  const [getcards, setgetcards] = useState([]);
  const [viewAll , setViewAll] = useState(18)


  const handleView = () => {
    setViewAll(viewAll + 12)
  }

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get("http://172.30.2.161:4000/api/brands/all-brands", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setgetcards(res.data.cards || res.data || []);
        console.log(res.data.message || "fetch successfully");
      } catch (error) {
        console.log("failed to fetch", error);
      }
    };

    fetchdata();
  }, []);

  return (
    <div
      className="w-full min-h-md bg-cover bg-center flex flex-col gap-6 p-10 pt-15"
    >
      <div className="overflow-y-scroll overflow-hidden scroll-smooth h-[30rem] gap-5 flex flex-col">
        {/* All Cards Grid */}
        <div className="grid grid-cols-2 b sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {getcards.slice(0,viewAll).map((item , index) => (
            <div
            key={index}
              className="backdrop-blur-sm p-4 bg-black/20 shadow-2xl rounded-lg hover:shadow-lg transition-shadow cursor-pointer flex flex-col items-center text-center"
            >
              <img
                src={item.logo_url}
                alt={item.brand_name}
                className="w-24 h-16 object-contain mb-2"
              />
              <h3 className="text-sm font-semibold">{item.brand_name}</h3>
              <p className="text-xs text-blue-600 underline mt-1">
                {item.offer_highlight}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center">
      <button className="bg-black/20 shadow-2xl rounded-2xl p-4" onClick={handleView}>View More+</button>
      </div>
      </div>
    </div>
  );
}
