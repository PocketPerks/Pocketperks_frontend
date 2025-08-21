import Navbar from "@/app/Navbar/Navbar";
import DetailsBar from "../DetailsBar";
import MyReferal from "./MyReferal";


export default function PasswordChange(){
    return(
        <>
      <Navbar />
      <div className="flex  min-h-screen bg-gradient-to-br from-[#E0EAFC] to-[#CFDEF3]">
      <DetailsBar />
      <MyReferal/>
      
      </div>
      </>
    )
}