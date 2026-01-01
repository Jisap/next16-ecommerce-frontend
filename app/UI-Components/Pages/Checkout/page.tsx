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
                id="newsCheck"
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
                <input type="text" className="border border-gray-300 bg-white rounded w-full p-2" placeholder="Last Name" />
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

            <input type="text" className="border border-gray-300 bg-white rounded w-full p-2 mb-3" placeholder="Address" />
            <input type="text" className="border border-gray-300 bg-white rounded w-full p-2 mb-3" placeholder="Apartment, Suite (optional)" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <input type="text" className="border border-gray-300 bg-white rounded w-full p-2" placeholder="City" />
              <input type="text" className="border border-gray-300 bg-white rounded w-full p-2" placeholder="Postal Code" />
            </div>

            <div className="mb-4">
              <input
                type="checkbox"
                id="saveInfo"
                className="me-2"
              />
              <label htmlFor="saveInfo">Save this information for the next time</label>
            </div>

            <h5 className="mb-2 GolosText text-2xl">
              Shipping method
            </h5>

            <div className="p-3 flex justify-between items-center border border-gray-300 rounded-md bg-green-50">
              <span>Standard</span>
              <span className="text-green-600">FREE</span>
            </div>

            <h5 className="mt-5 mb-2 GolosText text-2xl">
              Payment
            </h5>

            <p className="text-gray-500 mb-3">All transactions are secure and encrypted</p>

            <div className="border border-gray-300 rounded-md p-3 mb-3">
              <input type="text" className="border border-gray-300 bg-white rounded w-full p-2 mb-2" placeholder="Card Number" />

              <div className="grid grid-cols-2 gap-2">
                <input type="text" className="border border-gray-300 bg-white rounded w-full p-2" placeholder="Expiration Date (MM / YY)" />
                <input type="text" className="border border-gray-300 bg-white rounded w-full p-2" placeholder="Security Codes" />
              </div>

              <input type="text" className="mt-2 border border-gray-300 bg-white rounded w-full p-2" placeholder="Name on Card" />
            </div>

            <button
              className="btn w-full mt-3 bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-5">
            <div className="border border-gray-300 p-4 rounded shadow-lg">
              <h5 className="font-bold mb-3 items-center gap-1 text-2xl GolosText">
                <i className="ri-shopping-cart-2-line text-secondary"></i> Order Summary
              </h5>

              {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
              ) : (
                <div className="flex flex-col gap-4">
                  {cartItems.map((item) => {
                    const qty = item.qty ?? 1;
                    const price = parseFloat(item.price.replace("$", ""));

                    return (
                      <div key={item.id} className="flex gap-4 border-b border-gray-300 pb-4">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={120}
                          height={120}
                          className="rounded.lg w-24 h-24 object-cover"
                        />

                        <div className="flex-1">
                          <h6 className="GolosText text-lg">
                            {item.title}
                          </h6>

                          {item.off && <p className="text-sm">{item.off}</p>}

                          <div className="flex justify-between GolosText mt-2">
                            <span className="text-md">Qty: {qty}</span>
                            <span className="font-bold text-lg">${(price * qty).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}

              {/* Totals */}
              <div className="text-sm pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="GolosText">${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="flex justify-between border-t border-gray-300 pt-2 text-lg font-bold">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Buttons */}
              <button className="mt-5 btn border w-full border-black cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300">
                Place Order
              </button>

              <Link href="/UI-Components/Pages/Cart">
                <button className="btn w-full mt-3 bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300">
                  Back to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout