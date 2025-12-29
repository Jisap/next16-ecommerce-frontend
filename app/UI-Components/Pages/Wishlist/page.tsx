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

  const [whishlist, setWishlist] = useState<ProductType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) {
      setWishlist(JSON.parse(stored));
    }
  }, []);

  const removeItem = (id: number): void => {
    const updated = whishlist.filter((item) => item.id !== id);
    toast.error("Removed From Wishlist")
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  }

  return (
    <>
      <PageHeader title="Wishlist" currentPage="Wishlist" />
    </>
  )
}

export default Wishlist