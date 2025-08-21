'use client'
import { useState } from "react";

export default function PopularDeals() {
    const [show , setshow] = useState(null)
  return (
    <div onMouseEnter={() => setshow("showpage")}
    onMouseLeave={() => setshow(null)}
    >
        <label>Show</label>
        { show === 'showpage' && (
    <div className="flex flex-wrap bg-gradient-to-r from-[#a8edea] to-[#fed6e3]
 rounded-xl gap-4 justify-end ml-4 md:ml-10 lg:ml-20">
        

        
      
      <ul className="flex flex-col gap-3 w-full sm:w-[12rem]">
        <li className="font-bold text-xl">Department Store</li>
        <li><a>Amazon</a></li>
        <li><a>Flipkart</a></li>
        <li><a>Shopclues</a></li>
        <li><a>BuyKaro</a></li>
      </ul>

      <ul className="flex flex-col gap-3 w-full sm:w-[12rem]">
        <li className="font-bold text-xl">Electronics</li>
        <li><a>Croma</a></li>
        <li><a>Samsung</a></li>
        <li><a>Dell</a></li>
        <li><a>BoAt</a></li>
        <li><a>Lenovo</a></li>
      </ul>

      <ul className="flex flex-col gap-3 w-full sm:w-[12rem]">
        <li className="font-bold text-xl">Popular Fashion</li>
        <li><a>Zara</a></li>
        <li><a>H&M</a></li>
        <li><a>Nike</a></li>
        <li><a>Adidas</a></li>
        <li><a>Puma</a></li>
      </ul>

      <ul className="flex flex-col gap-3 w-full sm:w-[12rem]">
        <li className="font-bold text-xl">More Deals</li>
        <li><a>Brand 1</a></li>
        <li><a>Brand 2</a></li>
        <li><a>Brand 3</a></li>
        <li><a>Brand 4</a></li>
        <li><a>Brand 5</a></li>
      </ul>
       <ul className="flex flex-col gap-3 w-full sm:w-[12rem]">
        <li className="font-bold text-xl">More Deals</li>
        <li><a>Brand 1</a></li>
        <li><a>Brand 2</a></li>
        <li><a>Brand 3</a></li>
        <li><a>Brand 4</a></li>
        <li><a>Brand 5</a></li>
      </ul>
       <ul className="flex flex-col gap-3 w-full sm:w-[12rem]">
        <li className="font-bold text-xl">More Deals</li>
        <li><a>Brand 1</a></li>
        <li><a>Brand 2</a></li>
        <li><a>Brand 3</a></li>
        <li><a>Brand 4</a></li>
        <li><a>Brand 5</a></li>
      </ul>
       <ul className="flex flex-col gap-3 w-full sm:w-[12rem]">
        <li className="font-bold text-xl">More Deals</li>
        <li><a>Brand 1</a></li>
        <li><a>Brand 2</a></li>
        <li><a>Brand 3</a></li>
        <li><a>Brand 4</a></li>
        <li><a>Brand 5</a></li>
      </ul> <ul className="flex flex-col gap-3 w-full sm:w-[12rem]">
        <li className="font-bold text-xl">More Deals</li>
        <li><a>Brand 1</a></li>
        <li><a>Brand 2</a></li>
        <li><a>Brand 3</a></li>
        <li><a>Brand 4</a></li>
        <li><a>Brand 5</a></li>
      </ul>

    </div>
)}
    </div>
  );
}
