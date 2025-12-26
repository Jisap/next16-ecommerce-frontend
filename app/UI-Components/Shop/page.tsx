"use client"

import Image from "next/image";
import ProductData from "@/data/ProductsData.json";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useMemo, useState } from "react";
import { addToCart, addToWishlist } from "@/app/utils";



const Shop = () => {

  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Oldest");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const convertPrice = (price: string): number => Number(price.replace("$", ""));

  const sortedData = useMemo(() => {
    let data = [...ProductData];

    if (selectedCategory !== "All") {
      data = data.filter(item => item.cate === selectedCategory) // Filtrado por categoría
    }

    switch (selectedFilter) {
      case "Latest":
        data.sort((a, b) => b.id - a.id);
        break;
      case "Oldest":
        data.sort((a, b) => a.id - b.id);
        break;
      case "Low to High":
        data.sort((a, b) => convertPrice(a.price) - convertPrice(b.price));
        break;
      case "High to Low":
        data.sort((a, b) => convertPrice(b.price) - convertPrice(a.price));
        break;
      default:
        return data;
    }
  }, [selectedCategory, selectedFilter])


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