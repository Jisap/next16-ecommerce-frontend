"use client"

import Image from "next/image";
import ProductData from "@/data/ProductsData.json";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


const Shop = () => {
  return (
    <>
      {/* Page Title Section */}
      <div className="page-section flex justify-center items-center text-center">
        <div className="z-10 flex flex-col justify-center items-center text-center">
          <h2 className="text-white text-8xl GolosText font-semibold">Shop</h2>

          <div className="flex mt-5 text-2xl items-center text-white">
            <Link href="/" className="hover:text-primary">Home</Link>
            <i className="ri-arrow-right-wide-line pt-2 px-2"></i>
            <span className="">Shop</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop