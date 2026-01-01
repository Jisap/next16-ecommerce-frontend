"use client"

import Image from "next/image"
import Link from "next/link"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Follow from "../../Index/Follow/page"
import { useEffect, useState } from "react"
import { CartItem } from "@/app/types/types"
import PageHeader from "@/app/components/PageHeader"




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
      <PageHeader
        title="Checkout"
        currentPage="Checkout"
        parentPage="Shop"
        parentLink="/UI-Components/Shop"
      />

      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="grid gap-4 lg:grid-cols-12">
          {/* Left Side */}
          <div className="lg:col-span-7">
            <h5 className="mb-2 GolosText text-4xl">
              Contact
            </h5>

            <input
              type="email"
              placeholder="Email or Mobile Phone Number"
              className="border border-gray-300 bg-white rounded w-full p-2 mb-3"
            />

            <div className="mb-4">
              <input
                type="checkbox"
                id="checkbox"
                className="me-2"
              />
              <label htmlFor="newsCheck">Email me with news and offers</label>
            </div>

            <h5 className="mb-2 GolosText text-2xl">
              Delivery
            </h5>

            <div className="mb-3 flex gap-4">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="deliveryOption"
                  value="ship"
                  checked={deliveryOption === "ship"}
                  onChange={() => setDeliveryOption("ship")}
                />
                Ship
              </label>

              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="deliveryOption"
                  value="pickup"
                  checked={deliveryOption === "pickup"}
                  onChange={() => setDeliveryOption("pickup")}
                />
                Pickup in Store
              </label>
            </div>

            {deliveryOption === "ship" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <select className="form-select border border-gray-300 bg-white rounded appearance-none px-2 py-2 md:col-span-2">
                  <option>India</option>
                  <option>United States</option>
                  <option>France</option>
                </select>

                <input type="text" className="border border-gray-300 bg-white rounded w-full p-2" placeholder="First Name (optional)" />
                <input type="text" className="border border-gray-300 bg-white rounded w-full p-2" placeholder="Last Name (optional)" />
              </div>
            )}

            {deliveryOption === "pickup" && (
              <div className="my-4 p-3 border rounded bg-red-50 text-red-700">
                <strong>No Stores Available with your item</strong>
                <div>
                  <Link href="#" className="underline">
                    Ship to address
                  </Link>
                  {" "}instead
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout