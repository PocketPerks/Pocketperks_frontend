'use client'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
export default function Storedata(){
    const Store = dynamic(() => import("./store") , {
        ssr:false
    })
   
    return(
        <>
        <Navbar/>
        <Store/>
        </>
    )
}