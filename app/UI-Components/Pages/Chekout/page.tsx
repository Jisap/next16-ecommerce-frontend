"use client"

import Image from "next/image"
import Link from "next/link"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Follow from "../../Index/Follow/page"
import { useEffect, useState } from "react"
import { CartItem } from "@/app/types/types"




const Checkout = () => {

  const [deliveryOption, setDeliveryOption] = useState<"ship" | "pickup">("ship");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      const parsed = JSON.parse(saved).map((item: CartItem) => ({
        ...item,
        qty: item.qty ?? 1
      }));
      setCartItems(parsed);
    }
  }, []);

  const handlePlaceOrder = () => {
    toast.success("Order placed successfully");
    //localStorage.removeItem("cart");
    //setCartItems([]);
  }

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace("$", "")) || 0;
    const quantity = item.qty ?? 1;
    return acc + price * quantity
  }, 0)

  return (
    <>

    </>
  )
}

export default Checkout