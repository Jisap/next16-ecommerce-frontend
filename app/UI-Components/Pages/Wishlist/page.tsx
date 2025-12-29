"use client"

import PageHeader from "@/app/components/PageHeader"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


type ProductType = {
  id: number;
  title: string;
  price: string;
  image: string;
  off?: string;
  cate?: string;
}

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
                className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gray-400 pb-8"
              >
                <div className="flex items-center gap-5">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Wishlist