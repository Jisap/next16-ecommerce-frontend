"use client"

import Image from "next/image";
import ProductData from "@/data/ProductsData.json";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useMemo, useState } from "react";
import { addToCart, addToWishlist } from "@/app/utils";
import ProductCard from "@/app/components/Product-Card";
import Follow from "../Index/Follow/page";
import PageHeader from "@/app/components/PageHeader";



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

    switch (selectedFilter) { // Filtrado por precio
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
    }
    return data;
  }, [selectedCategory, selectedFilter]);

  const start = sortedData.length > 0 ? 1 : 0;
  const end = sortedData.length;

  const handleSortSelect = (value: any) => {
    setSelectedFilter(value);
    setIsOpenSort(false);
  }

  const handleCategorySelect = (value: any) => {
    setSelectedCategory(value);
    setIsOpenCategory(false);
  }


  return (
    <>
      {/* Page Title Section */}
      {/* <div className="page-section flex justify-center items-center text-center">
        <div className="z-10 flex flex-col justify-center items-center text-center">
          <h2 className="text-white text-8xl GolosText font-semibold">Shop</h2>

          <div className="flex mt-5 text-2xl items-center text-white">
            <Link href="/" className="hover:text-primary">Home</Link>
            <i className="ri-arrow-right-wide-line pt-2 px-2"></i>
            <span className="">Shop</span>
          </div>
        </div>
      </div> */}

      <PageHeader title="Shop" currentPage="Shop" />

      <div className="px-[8%] lg:px-[16%] gap-5 py-30 pt-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-5">
          <p className="text-lg GolosText text-black/80">
            Showing <span className="font-semibold">{start}-{end}</span> of {" "}
            <span className="font-semibold">{ProductData.length}</span> results
          </p>

          <div className="flex items-center gap-5">
            <div className="relative">
              <button
                onClick={() => setIsOpenSort(!isOpenSort)} // Toggle sort dropdown
                className="px-6 py-3 bg-black text-white GolosText rounded-full flex items-center gap-3 cursor-pointer"
              >
                {/* Latest, Oldest, Low to High, High to Low */}
                {selectedFilter}
                <i className="ri-arrow-down-s-line text-xl"></i>
              </button>

              {isOpenSort && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl overflow-hidden z-50">
                  <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleSortSelect("Latest")}>
                    Latest
                  </div>
                  <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleSortSelect("Oldest")}>
                    Oldest
                  </div>
                  <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleSortSelect("Low to High")}>
                    Low to High
                  </div>
                  <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleSortSelect("High to Low")}>
                    High to Low
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setIsOpenCategory(!isOpenCategory)} // Toggle sort dropdown
                className="px-6 py-3 bg-black text-white GolosText rounded-full flex items-center gap-3 cursor-pointer"
              >
                {/* Latest, Oldest, Low to High, High to Low */}
                {selectedCategory}
                <i className="ri-arrow-down-s-line text-xl"></i>
              </button>

              {isOpenCategory && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl overflow-hidden z-50">
                  <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleCategorySelect("All")}>
                    All
                  </div>
                  <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleCategorySelect("Dresses")}>
                    Dresses
                  </div>
                  <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleCategorySelect("Tops")}>
                    Tops
                  </div>
                  <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleCategorySelect("Outerwear")}>
                    Outerwear
                  </div>
                  <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleCategorySelect("Jacket")}>
                    Jacket
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sortedData.map((product, index) => (
            <div key={index}>
              <ProductCard
                product={product}
                addToWishlist={addToWishlist}
                addToCart={addToCart}
              />
            </div>
          ))}
        </div>
      </div>

      <Follow />

      <ToastContainer position="top-right" autoClose={1500} />
    </>
  )
}

export default Shop