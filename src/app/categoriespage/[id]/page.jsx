'use client';

import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CategoriesLoad = dynamic(() => import("./CategoriesLoad"), {  
  ssr: false,
});

export default function Page() {
  return (
    <>
      <Navbar/>
      <CategoriesLoad />
      <Footer/>
      
    </>
  );
}
