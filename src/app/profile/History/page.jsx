import Navbar from "../../components/Navbar";
import DetailsBar from "../DetailsBar";
import History from "./History";


export default function PasswordChange(){
    
    return(
        <>
      <Navbar />
      <div className="flex min-h-screen bg-gradient-to-br from-[#E0EAFC] to-[#CFDEF3]">
      <DetailsBar />
      <History/>
      
      
      </div>
      </>
    )
}