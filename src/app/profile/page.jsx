'use client'
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import DetailsBar from "./DetailsBar";
import Personal from "./Personal";

export default function Account() {
  return (
    <>
      <Navbar  className="relative z-50" />
      <div className="flex  min-h-screen bg-gradient-to-br from-[#E0EAFC] to-[#CFDEF3]">
      <DetailsBar />
      <Personal/>
      </div>

     
    </>
  );
}
