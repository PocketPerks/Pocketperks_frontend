"use client"
import {motion} from 'framer-motion'
import { useState ,useEffect} from 'react'

export default function verify(){
    const [otp , setotp] = useState(null)
    const [contect , setcontect] = useState('')

   useEffect(() => {
    if (contect === "") {
        setotp(null)
    }
}, [contect])
    

    const handlesubmit = (e) => {
      e.preventDefault()
        const numberpattern = /^[0-9]{10}$/
         const emailpattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(numberpattern.test(contect)){
            setotp("verify")
        }
        else if(otp === ""){
            alert('feild are empty')
            
           
        }
        else if( emailpattern.test(contect)){
            alert("required mobile number")
        }
       
    }
    

    return(
         <>
      <img src="/bgsignup3.jpg" className="h-screen w-screen  absolute inset-0" />
        <div className="h-screen bg-white/20 backdrop-blur-[5px] absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.div
          
           className="rounded-2xl w-full max-w-lg flex flex-col justify-center items-center p-6 sm:p-10 min-h-[28rem] relative">

  <div className="text-3xl md:text-5xl text-white w-[20rem] md:w-[40rem] font-bold mb-8  text-center">
    Enter Mobile Number
<div className="text-xl font-bold mb-8">We will send an otp to verify</div>
  </div>
 
  
<form className="w-full sm:px-[1rem] px-[25px]" >

  
 
    <div className="relative mb-6 w-full">
      <input
        type="text"
        id="contact"
        placeholder=" "
 onChange={(e) => setcontect(e.target.value)}
        className="peer border border-gray-400 text-white rounded-md px-3 pt-5 pb-2  w-full focus:border-blue-500 focus:outline-none"
      />
      <label
        htmlFor="contact"
        className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
        peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
        peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-500 
        peer-focus:text-sm"
      >
       Enter Mobile number
      </label>
    </div>

      {otp === 'verify' && (  
      <div className="relative mb-6">
        <input
          type="password"
          id="password"
          placeholder=" "
          className="peer border text-white border-gray-400 rounded-md px-3 pt-5 pb-2 w-full focus:border-blue-500 focus:outline-none"
        />
        <label
          htmlFor="password"
          className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
          peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
          peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-500 
          peer-focus:text-sm"
        >
          otp
        </label>
       
      <div>

        
        </div>
      </div>
)}
    


  
  <button onClick={handlesubmit} className="bg-orange-500 w-full max-w-[27rem] h-10 rounded-xl hover:bg-orange-400 hover:scale-104">Verify</button>
  </form>
  </motion.div>
  
</div>

</>
    )
}