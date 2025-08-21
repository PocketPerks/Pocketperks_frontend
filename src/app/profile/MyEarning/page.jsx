import Navbar from "@/app/Navbar/Navbar"
import DetailsBar from "../DetailsBar"
import MyEarning from "./MyEarning"
export default function MyEarningSet(){
    return(
         <>
      <Navbar />
      <div className="flex gap-[6rem] min-h-screen bg-gradient-to-br from-[#E0EAFC] to-[#CFDEF3]">
      <DetailsBar />
      <MyEarning/>
      
      </div>
      </>
    )
}