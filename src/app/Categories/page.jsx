'use client'
import { useState } from "react"
import { Categories as CategoriesData} from "./Categories"
import Navbar from "../Navbar/Navbar"
export default function Categories(){
    const [role , setrole] = useState("")

   let sorteddata = [...CategoriesData]
   if(role === "Newest"){
    sorteddata.sort((a,b) => b.id - a.id)
   }
   else if(role === 'amount'){
    sorteddata.sort((a , b) => b.amount - a.amount)
   }
    return(
        <>
        <Navbar/>
        <div className="mt-10 text-center text-2xl font-bold">
          Credit card
        </div>
        <div className="flex justify-center">
       <ul className=" border-1 w-full max-w-3xl border-black/50 rounded-md  flex  gap-4">
        <li className="border-r-1 border-black/50 w-full max-w-[9rem] p-3 text-center cursor-pointer"   onClick={(e) => setrole("Newest")}>Newest</li>
        <li className="border-r-1 border-black/50 w-full max-w-[9rem] p-3 text-center cursor-pointer" onClick={(e) => setrole("amount")}>Amount</li>
        <li className="border-r-1 border-black/50 w-full max-w-[9rem] p-3 text-center cursor-pointer" onClick={(e) => setrole("")}>Popularity</li>
        <li className="border-r-1 border-black/50 w-full max-w-[9rem] p-3 text-center cursor-pointer" onClick={(e) => setrole("")}>A-Z</li>
        <li className="w-full border-black/50 max-w-[9rem] text-center p-3 cursor-pointer" onClick={(e) => setrole("")}>Percent</li>
       
       </ul>
       </div>
        <div className="min-h-screen w-full px-4 py-8 bg-gray-100">
            
  <div className="flex flex-wrap justify-center gap-4">
    
    {
      sorteddata.map((item, index) => (
        <div key={index} className="flex flex-col h-[20rem] justify-center items-center gap-8 border rounded-xl bg-white shadow-md p-4 w-[12rem] sm:w-[14rem] md:w-[16rem] lg:w-[18rem] xl:w-[15rem]">
          <img
            className="max-h-[8rem] w-full object-contain"
            src={item.Image}
            alt={`Card ${index}`}
          />
          <a href="#"  className="text-blue-700 underline text-center text-sm md:text-base">
            {item.Link}
          </a>
          <button className="bg-blue-600 text-white rounded-xl hover:bg-blue-700 h-10 w-full">
            {item.Reward}
          </button>
        </div>
      ))
    }
  </div>
</div>

</>

    )
}