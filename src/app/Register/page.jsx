'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Signup(){
    const [contact , setcontect] = useState('')
    const [show , setshow] = useState(null)
    const [content , setcontent] = useState("Login or Signup")
    const [buttoncontent , setbuttoncontent] = useState('Signup')
    const [info , setinfo] = useState('We will send an otp to verify')
    const router = useRouter()
    
  

    const handlesubmit = (e) => {
      e.preventDefault()
      if(show === 'Password'){
      router.push("/Register/Verify")
      }
    }
   

    useEffect(() => {
        const emailpattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const numberpattern = /^[0-9]{10}$/

        if(emailpattern.test(contact)){
            setshow('Password')
            setcontent('Now set a password')
            setinfo('In order to sign up via email')
        }
        else if(numberpattern.test(contact)){
            setshow('Number')
            setcontent('OTP verify ')
            setbuttoncontent('Verify')
            setinfo(`Otp sent to given number`)
        }
        else if (contact === ""){
            setshow(null)
            setbuttoncontent('Signup')
            setcontent('Login or Signup')
            setinfo('We will send an otp to verify')
        }
        },[contact])

    
    
    return(
      <>
      <img src="/bgsignup.jpg" className="h-screen w-screen object-cover absolute inset-0" />
        <div className="h-screen w-screen bg-white/20 backdrop-blur-[5px] absolute inset-0 flex flex-col items-center justify-center px-4">
          
          <div className="rounded-2xl w-full max-w-lg flex flex-col justify-center items-center p-6 sm:p-10 min-h-[28rem] relative">


  <div className="text-3xl md:text-5xl text-white w-[20rem] md:w-[30rem] font-bold mb-8  text-center">
    {content}
<div className="text-xl font-bold mb-8">{info}</div>
  </div>

  

<form className="w-full sm:px-[1rem] px-[25px] ">
  
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
        Email or Phone
      </label>
    </div>

    {show === "Password" && (
        
      <div className="relative mb-6 w-full">
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
          Password
        </label>
       
      <div>
        
        </div>
      </div>
    
    )}

    {show === "Number" && (
      <div className="relative mb-6">
        <input
          type="text"
          id="otp"
          placeholder=" "
          className="peer border text-white border-gray-400 rounded-md px-3 pt-5 pb-2 w-full focus:border-blue-500 focus:outline-none"
        />
        <label
          htmlFor="otp"
          className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
          peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
          peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-500 
          peer-focus:text-sm"
        >
          OTP
        </label>
      </div>
      
    )}

  <button onClick={handlesubmit} className="bg-orange-500 mt-5 w-full max-w-[30rem] h-10 rounded-xl hover:bg-orange-400 hover:scale-110">{buttoncontent}</button>
   </form>
     <div>
      
    <img src="google.jpeg" className=" h-10 w-full ml-[1.8rem] mt-[30px] max-w-[40px] rounded-full "/>
  </div>
  </div>


  
 
</div>
</>


    )
}

