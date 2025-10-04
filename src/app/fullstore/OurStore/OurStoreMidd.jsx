"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductGrid() {
  const [visible, setVisible] = useState(6);

  const products = [
    { id: 1, name: "Ghee & oil", cashback: "Flat 10% Cashback", img: "/oil.jpg" },
    { id: 2, name: "Ghee & oil", cashback: "Flat 10% Cashback", img: "/oil.jpg" },
    { id: 3, name: "Ghee & oil", cashback: "Flat 10% Cashback", img: "/oil.jpg" },
    { id: 4, name: "Masalas", cashback: "Flat 10% Cashback", img: "/oil.jpg" },
    { id: 5, name: "Atta, rice & Daal", cashback: "Flat 10% Cashback", img: "/oil.jpg" },
    { id: 6, name: "Milk, Dairy", cashback: "Flat 10% Cashback", img: "/oil.jpg" },
    { id: 7, name: "Snacks", cashback: "Flat 10% Cashback", img: "/oil.jpg" },
    { id: 8, name: "Cold Drinks", cashback: "Flat 10% Cashback", img: "/oil.jpg" },
  ];

  return (
    <div className="h-auto py-2 w-full  flex flex-col  items-center p-10 px-2">
      {/* Product Grid */}
      <div className="grid p-3 grid-cols-1 rounded-2xl  bg-white sm:grid-cols-2 md:grid-cols-3 gap-6 w-full ">
        {products.slice(0, visible).map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md border-2 border-black/10 hover:shadow-lg transition p-2"
          >
            <div className="relative p-1 rounded-lg ">
              <Image
                src={product.img}
                alt={product.name}
                width={400}
                height={250}
                className="rounded-lg object-cover"
              />
              
              <span className="  bg-white absolute top-0  ml-[8.6rem] text-xs font-semibold px-2 py-1 rounded-md shadow">
                {product.cashback}
              </span>
            </div>
            <p className="text-center mt-2 font-medium text-lg">{product.name}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visible < products.length && (
        <button
          onClick={() => setVisible((prev) => prev + 3)}
          className="mt-6 w-full py-3 bg-white rounded-lg shadow hover:shadow-md border"
        >
          Load More
        </button>
      )}
    </div>
  );
}
