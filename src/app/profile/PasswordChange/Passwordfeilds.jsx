'use client'
import Link from "next/link" 
import NavChnagefeilds from "../NavChangefeilds"

export default function Passwordfeilds(){
  return(
    <div className="w-full max-w-lg">
      <div className="bg-white/50 shadow-lg backdrop-blur-lg mt-15 rounded-lg p-6 flex flex-col">
      <NavChnagefeilds/>
       
      <form className="space-y-6 mt-5">
        <div>
<div className="flex gap-5">
           <div className="relative  w-full">
      <input
        type="text"
        id="contact"
        placeholder=" "
        onChange={(e) => setcontect(e.target.value)}
className="peer border border-gray-400 rounded-md text-white px-5 pt-6 pb-2  w-full focus:border-blue-500 focus:outline-none"
      />
      <label
        htmlFor="contact"
        className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
        peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
        peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-500 
        peer-focus:text-sm"
      >
       Current Password
      </label>
    </div>
            </div>
        </div>
        <div>
          <div className="relative mb-4 w-full">
      <input
        type="text"
        id="contact"
        placeholder=" "
        onChange={(e) => setcontect(e.target.value)}
className="peer border border-gray-400 rounded-md text-white px-2 pt-3 pb-4  w-full focus:border-blue-500 focus:outline-none"
      />
      <label
        htmlFor="contact"
        className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
        peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
        peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-500 
        peer-focus:text-sm"
      >
        New Password
      </label>
    </div>
            
        </div>
        <div>
         <div className="flex gap-5">
           <div className="relative mb-6 w-full">
      <input
        type="text"
        id="contact"
        placeholder=" "
        onChange={(e) => setcontect(e.target.value)}
className="peer border border-gray-400 rounded-md text-white px-3 pt-5 pb-2  w-full focus:border-blue-500 focus:outline-none"
      />
      <label
        htmlFor="contact"
        className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
        peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
        peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-500 
        peer-focus:text-sm"
      >
       Conform Password
      </label>
    </div>
            </div>
        </div>
        <div>
          <button className="bg-orange-400 w-full h-10 rounded-md text-white font-semibold hover:bg-orange-500 transition">
            Save Changes
          </button>
        </div>
        </form>

      </div>
    </div>
  )
}
