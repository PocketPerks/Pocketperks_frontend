'use client';

import Navbar from "../components/Navbar";
import dynamic from "next/dynamic";

const CategoriesLoad = dynamic(() => import("./CategoriesLoad"), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <Navbar />
      <CategoriesLoad />
    </>
  );
}
