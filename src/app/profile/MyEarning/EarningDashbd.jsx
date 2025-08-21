import { useState } from "react"

export default function EarningDashbd(){
    const [Cashback , setCashBack] = useState('0')
    return(
        <div className="h-auto rounded-xl shadow-xl p-10 bg-white mt-20">
            <div className="flex  justify-around ">
                <div className="flex flex-col w-full max-w-[13rem] text-center  text-blue-500 font-bold  ">
                <label className="font-normal text-black">Cashback</label>
                Total: {Cashback}
                </div>
                <div className="flex flex-col w-full max-w-[13rem] text-center text-blue-500 font-bold ">
                <label className="font-normal text-black">Reward</label>
                Total: {Cashback}
                </div>
                  <div className="flex flex-col w-full max-w-[13rem] text-center  text-blue-500 font-bold">
                <label className="font-normal text-black">Referrals</label>
                Total: {Cashback}
                </div>
            </div>

             <div className="flex  justify-around pt-10">
                <div className="flex flex-col w-full max-w-[13rem] text-center text-blue-500 font-bold">
                <label className="font-normal text-black">Pending</label>
                Total: {Cashback}
                </div>
                <div className="flex flex-col w-full max-w-[13rem] text-center text-blue-500 font-bold ">
                <label className="font-normal text-black">Pending</label>
               Total: {Cashback}
                </div>
                  <div className="flex flex-col w-full max-w-[13rem] text-center text-blue-500 font-bold ">
                <label className="font-normal text-black">Pending</label>
               Total: {Cashback}
                </div>
            </div>
              <div className="flex  justify-around pt-10">
                <div className="flex flex-col w-full max-w-[13rem] text-center text-blue-500 font-bold">
                <label className="font-normal text-black">Paid</label>
                Total: {Cashback}
                </div>
                <div className="flex flex-col w-full max-w-[13rem] text-center text-blue-500 font-bold ">
                <label className="font-normal text-black">Paid</label>
                Total: {Cashback}
                </div>
                  <div className="flex flex-col w-full max-w-[13rem] text-center text-blue-500 font-bold ">
                <label className="font-normal text-black">Paid</label>
                Total: {Cashback}
                </div>
            </div>
              <div className="flex  justify-around pt-10">
                <div className="flex flex-col w-full max-w-[13rem] text-center text-blue-500 font-bold">
                <label className="font-normal text-black">Confirmed</label>
                Total: {Cashback}
                </div>
                <div className="flex flex-col w-full max-w-[13rem] text-center text-blue-500 font-bold ">
                <label className="font-normal text-black">Confirmed</label>
                Total: {Cashback}
                </div>
                  <div className="flex flex-col w-full max-w-[13rem] text-center text-blue-500 font-bold ">
                <label className="font-normal text-black">Confirmed</label>
                Total: {Cashback}
                </div>
            </div>

        </div>
    )
}