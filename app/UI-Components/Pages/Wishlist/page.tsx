"use client"

import PageHeader from "@/app/components/PageHeader"
import { ProductType } from "@/app/types/types"
import { addToCart } from "@/app/utils"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Follow from "../../Index/Follow/page"


const Wishlist = () => {

  const [wishlist, setWishlist] = useState<ProductType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) {
      setWishlist(JSON.parse(stored));
    }
  }, []);

  const removeItem = (id: number): void => {
    const updated = wishlist.filter((item) => item.id !== id);
    toast.error("Removed From Wishlist")
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  }

  return (
    <>
      <PageHeader
        title="Wishlist"
        currentPage="Wishlist"
        parentPage="Shop"
        parentLink="/UI-Components/Shop"
      />

      <div className="px-[8%] lg:px-[20%] py-20">
        {wishlist.length === 0 ? (
          <p className="text-2xl text-secondary GolosText border border-gray-400 px-5 py-2 rounded-full">
            Your wishlist is empty
          </p>
        ) : (
          <div className="flex flex-col gap-10">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gray-400 pb-8 flex-wrap gap-5"
              >
                <div className="flex items-center gap-5">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover"
                  />

                  <div>
                    <h2 className="text-2xl font-semibold">{product.title}</h2>

                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-2xl font-bold">{product.price}</span>
                      <span className="bg-black rounded-full text-white px-4 py-1">{product.off}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 md:mt-0">
                  <p className="text-lg text-green-600 font-semibold">
                    In Stock
                  </p>
                </div>

                <div className="flex items-center gap-5 mt-5 md:mt-0">
                  <button
                    onClick={() => addToCart(product)}
                    className="px-6 py-3 bg-black text-white rounded-lg md:rounded-full uppercase cursor-pointer GolosText whitespace-nowrap shrink-0"
                  >
                    Add To Cart
                  </button>

                  <button
                    onClick={() => removeItem(product.id)}
                    className="px-6 py-3 border hover:bg-secondary hover:border-transparent hover:text-white rounded-lg md:rounded-full uppercase cursor-pointer GolosText transition-all duration-300 whitespace-nowrap shrink-0"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <Link href="/UI-Components/Pages/Cart">
              <button className="btn mt-3 bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300">
                <i className="bi bi-cart3 mr-3"></i>
                View Cart
              </button>
            </Link>
          </div>
        )}
      </div>

      <Follow />

      <ToastContainer position="top-right" autoClose={1500} />
    </>
  )
}

export default Wishlist