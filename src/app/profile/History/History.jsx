'use client'
import { useState } from "react"

export default function History(){
    const [History , setHistory] = useState("")
    return(
        <div className="w-full  h-auto p-6 sm:p-10 md:p-16 max-w-5xl mx-auto">
      <div className="bg-white/50 shadow-lg rounded-2xl p-6 flex flex-col sm:p-10">
      <label className="text-xl text-center">History</label>
      <div className="flex justify-between border-1 rounded-t-2xl p-5 border-b-black/30">
      <div className="text-xl text-orange-300 ">Amazon</div>
      <label className="text-purple-300">₹1300</label>
      </div>
       <div className="flex justify-between border-1  p-5 border-t-black/30 border-b-black/30">
      <div className="text-xl text-orange-300 ">Flipkart</div> 
      <label className="text-purple-300">₹1400</label>
      </div>
       <div className="flex justify-between border-1  p-5 border-t-black/30 ">
      <div className="text-xl text-orange-300">messho</div>
      <label className="text-purple-300">₹400</label>
      </div>
       <div className="flex justify-between border-1  p-5 border-t-black/30 ">
      <div className="text-xl text-orange-300">Messho</div>
      <label className="text-purple-300">₹400</label>
      </div>
       <div className="flex justify-between border-1  p-5 border-t-black/30 ">
      <div className="text-xl text-orange-300">messho</div>
      <label className="text-purple-300">₹400</label>
      </div>

</div>
      </div>
    )
}