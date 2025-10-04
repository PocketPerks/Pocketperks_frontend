"use client";
import { Clapperboard } from "lucide-react";
import OurStoreUpper from "./OurStoreUpper"
import OurStoreMidd from './OurStoreMidd'
import Navbar from "../../components/Navbar";
import OurStroeLower from  './OurStoreLower'
export default function StorePage() {
  return (
    <>
    
    <Navbar/>
    <OurStoreUpper/>
    <OurStoreMidd/>
    <OurStroeLower/>
    
    </>
    
  
  );
}
