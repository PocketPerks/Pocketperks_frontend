'use client'
import { useState } from "react"
import EarningDashbd from "./EarningDashbd"

export default function MyEarning(){
    const [earning , setearning] = useState('0')
    return(
        <>
        <div className="min-h-screen w-full max-w-3xl ">
            <div className="bg-white shadow-xl flex justify-between rounded-2xl h-20 mt-10">
                <div className="flex flex-col">
                <label className="text-xl p-2">All time earning</label>
                <label className="text-sm pl-2">Your Total Earnings amount includes your Cashback + Rewards + Referral amount.</label>
                </div>
                <div className="pr-3 p-8 pt-5 text-blue-600 font-mono text-5xl">
                   ₹{earning}
                </div>
                </div>
                <EarningDashbd/>
        </div>

        
        </>
    )
}