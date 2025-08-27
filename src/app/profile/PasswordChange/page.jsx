import Navbar from "@/app/components/Navbar";
import DetailsBar from "../DetailsBar";
import Passwordfeilds from "./Passwordfeilds";


export default function PasswordChange(){
    return(
        <>
      <Navbar />
      <div className="flex gap-[12rem] min-h-screen bg-gradient-to-br from-[#E0EAFC] to-[#CFDEF3]">
      <DetailsBar />
      <Passwordfeilds/>
      
      </div>
      </>
    )
}