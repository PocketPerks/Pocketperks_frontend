'use client'
import { useState } from "react";
import NavChnagefeilds from "./NavChangefeilds";

export default function Personal(){
  const [username , setusername] = useState('satyam');//username
  const [editusername , seteditusername] = useState(true)//username
  const [email , setemail] = useState("example@gmial.com")//email
  const [editemail , seteditemail] = useState(true)//email
  const [number , setnumber] = useState('1234567689')//edit
  const [editnumber , seteditnumber] = useState(true)//edit



  const handlechanges = (e) => {
    e.preventDefault()
    seteditusername(false)
    seteditemail(false)
    seteditnumber(false)

  }

  return(
    <div className="w-full p-16 pr-10 max-w-3xl">
      <div className="bg-white/50 shadow-lg backdrop-blur-lg rounded-lg p-6 flex flex-col">
            <NavChnagefeilds/>

      <form className="space-y-6 mt-5">
        <div>
<label className="block mb-2 text-black font-medium">UserName:</label>
<div className="flex gap-5">
          <input
            type="text"
            placeholder=" "
            readOnly = {editusername}
            value={username}
            onChange={(e) => setusername(e.target.value)}
            className="border border-gray-400 rounded-md text-center text-xl py-3 w-full focus:border-blue-500 focus:outline-none"/>
            <div onClick={handlechanges} className="bg-orange-400 cursor-pointer text-center pt-4 h-15 w-15 rounded-lg">Edit</div>
            </div>
        </div>
        <div>
          <label className="block mb-2 text-black font-medium">Email:</label>
          <div className="flex gap-5">
          <input
            type="text"
            placeholder=" "
            readOnly = {editemail}
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="border border-gray-400 rounded-md text-center text-xl py-3 w-full focus:border-blue-500 focus:outline-none"/>
            <div onClick={handlechanges} className="bg-orange-400 cursor-pointer text-center pt-4 h-15 w-15 rounded-lg">Edit</div>
            </div>
        </div>
        <div>
          <label className="block mb-2 text-black font-medium">Phone:</label>
         <div className="flex gap-5">
          <input
            type="text"
            placeholder=" "
            readOnly = {editnumber}
            value={number}
            onChange={(e) => setnumber(e.target.value)}
            className="border border-gray-400 rounded-md text-center text-xl py-3 w-full focus:border-blue-500 focus:outline-none"/>
            <div onClick={handlechanges} className="bg-orange-400 text-center pt-4 h-15 w-15 rounded-lg cursor-pointer">Edit</div>
            </div>
        </div>
        <div>
          <button className="bg-orange-400 w-full h-10 rounded-md text-white font-semibold hover:bg-orange-500 transition">
            Save Changes
          </button>
        </div>
        <div className="text-center text-red-500 font-medium cursor-pointer">
          Delete Account
        </div>
        </form>

      </div>
    </div>
  )
}
