"use client"

import PageHeader from "@/app/components/PageHeader"
import { CartType, ProductType } from "@/app/types/types"
import { addToCart } from "@/app/utils"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Follow from "../../Index/Follow/page"
import returnPolicy from "@/public/assets/boat.png"
import packBox from "@/public/assets/pack-box.png"


const Cart = () => {

  const [cart, setCart] = useState<CartType[]>([]);


  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  const removeItem = (id: number): void => {
    const updated = cart.filter((item) => item.id !== id);
    toast.error("Removed From Cart")
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  const updateQty = (id: number, qty: number): void => {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, qty: Math.max(1, item.qty + qty) }
        : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  const calculateTotal = (): number => {
    return cart.reduce((sum, item) => {
      const price = Number(item.price.replace("$", ""));
      return sum + price * item.qty;
    }, 0);
  }



  return (
    <>
      <PageHeader
        title="Cart"
        currentPage="Cart"
        parentPage="Shop"
        parentLink="/UI-Components/Shop"
      />
    </>
  )
}

export default Cart