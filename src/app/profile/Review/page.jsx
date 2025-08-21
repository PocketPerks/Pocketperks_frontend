import Navbar from "@/app/Navbar/Navbar"
import DetailsBar from "../DetailsBar"
import Rcomments from "./Rcomments"
export default function Review(){
    return(
         <>
      <Navbar />
      <div className="flex gap-[6rem] min-h-screen pl-[5rem] p-20  bg-gradient-to-br from-[#E0EAFC] to-[#CFDEF3]">
      <Rcomments/>
     
      
      </div>
      </>
    )
}