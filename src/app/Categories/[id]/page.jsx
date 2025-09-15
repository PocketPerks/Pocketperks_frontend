'use client'
import { useState , useEffect } from "react"
import { useParams } from "next/navigation"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import axios from 'axios'

export default function Categories(){
    const [role , setrole] = useState("")
    const {id} = useParams()
    const [getdata , setgetdata] = useState([])


  

     useEffect(() => {
       const fetchdata = async () => {
         try {
           const res = await axios.get(`http://172.30.2.161:4000/api/categories/${id}/brands`, {
             headers: {
               "Content-Type": "application/json",
             },
           });
           // agar res.data.cards nahi mila toh res.data ko hi set karo
           setgetdata(res.data.cards || res.data || []);
           console.log(res.data.message || "fetch successfully");
         } catch (error) {
           console.log("failed to fetch", error);
         }
       };
   
      if(id) fetchdata();
     }, [id]);
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
      getdata.map((item) => (
        <div key={item.id} className="flex flex-col h-[20rem] justify-center items-center gap-8 border rounded-xl bg-white shadow-md p-4 w-[12rem] sm:w-[14rem] md:w-[16rem] lg:w-[18rem] xl:w-[15rem]">
          <img
            className="max-h-[8rem] w-full object-contain"
            src={item.logo}
            alt={`Card`}
          />
          <label>{item.title}</label>
          <a href="#"  className="text-blue-700 underline text-center text-sm md:text-base">
            {item.link}
          </a>
          <button className="bg-blue-600 text-white rounded-xl hover:bg-blue-700 h-10 w-full">
            {item.cashback}
          </button>
        </div>
      ))
    }
  </div>
</div>
<Footer/>


</>

    )
}