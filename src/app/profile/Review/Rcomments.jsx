'use client'
import { useState } from "react"

export default function Rcomments() {
     const [comment, setcomment] = useState(false) // modal open/close
    const [Scomment, setScomment] = useState('') // input value
    const [showcomments , setshowcomments] = useState(["Nice"])  // store multiple comments

    // handle input change
    const handlechanges = (e) => {
        setScomment(e.target.value)
    }

    // save comment
    const handleSaveComment = () => {
        if (Scomment.trim() !== "") {
            setshowcomments([...showcomments, Scomment]) // add new comment in array
        }
        setcomment(false)  // close modal
        setScomment('')    // clear input
    }

    // open modal
    const handlecomment = (e) => {
        e.preventDefault()
        setcomment(true)
    }
    return (
        <>
        <div>
            <div className=" h-screen w-full  pt-5 space-y-5 flex flex-col items-center">
                <div className="text-3xl text-center">PocketParks Review</div>
                <div className="w-full p-9 max-w-7xl flex flex-col gap-10 font-mono">
                    <p>Every day, thousands of Indians choose PocketPerks to make their shopping smarter and more rewarding. Not only do they grab the best discounts, but they also enjoy extra Cashback and perks – credited straight to their bank account. That’s the true PocketPerks advantage.</p>
                    <p>Our users’ reviews highlight how we’ve transformed their shopping experience. Whether it’s fashion, electronics, or groceries – PocketPerks ensures they save more and shop better, every single time.</p>
                    <p>Launched with a simple vision – “Shop more, save smarter” – PocketPerks has already distributed crores in Cashback and helped drive billions in sales for our retail partners.</p>
                    <p>And this is just the beginning 🚀. With a mission to be India’s most trusted savings platform, PocketPerks is here to make sure you always enjoy #PerksOnPerks.</p>
                </div>

                <div className="flex flex-col sm:flex-row w-full max-w-xl mt-5 gap-3 px-4">
                    <label className="w-full mt-2 sm:w-auto text-center sm:text-left">Tell About Your Experience</label>
                    <button
                        onClick={handlecomment}
                        className="bg-orange-400 rounded-xl h-10 w-full  sm:w-auto px-6"
                    >
                        Write Review
                    </button>
                </div>

                {comment && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black/30 z-50">
                        <div className="bg-white rounded-2xl w-[90%] sm:w-[30rem] p-6 shadow-xl flex flex-col">
                            <div
                                onClick={() => setcomment(false)}
                                className="text-xl cursor-pointer text-end pb-4">X</div>
                            
                            <input
                                type="text"
                                value={Scomment}
                                onChange={handlechanges}
                                className="h-20 rounded-lg mb-6 border w-full bg-gray-200 px-3"
                                placeholder="Write your comment..."
                            />

                            <button 
                                onClick={handleSaveComment}
                                className="bg-orange-400 rounded-2xl h-12 w-full">
                                Comment
                            </button>
                        </div>
                    </div>
                )}
                
            </div>
             <div className="pt-4 text-4xl font-bold text-center">
                Comments
                <div className=" max-h-screen flex flex-col items-center text-lg  gap-5 w-full mt-4">
                    {showcomments.map((c, index) => (
                        <div 
                            key={index}
                            className="h-auto rounded-xl w-full max-w-3xl  bg-white p-4 shadow-sm"
                        >
                            {c}
                        </div>
                    ))}
                </div>
            </div>
            </div>
             
           
        </>
    )
}
