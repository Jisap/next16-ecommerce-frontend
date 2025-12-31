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

      <div className="px-[8%] lg:px-[12%] py-20">
        {cart.length === 0 ? (
          <p className="text-2xl text-secondary GolosText border border-gray-400 px-5 py-2 rounded-full">
            Your Cart is empty
          </p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10 justify-between">
            {/* cart content */}
            <div className="w-full lg:w-1/1">
              <div className="flex flex-col gap-10">
                {cart.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gray-400 pb-8"
                  >
                    {/* Img + title + price */}
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

                    {/* btn qty + btn remove */}
                    <div className="mt-5 md:mt-0 flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span
                          onClick={() => updateQty(product.id, -1)}
                          className="w-10 h-10 bg-black text-white rounded-full flex justify-center items-center text-5xl pb-3 cursor-pointer"
                        >
                          -
                        </span>

                        <span className="w-10 h-10 border rounded-full flex justify-center items-center text-center text-2xl pb-1">
                          {product.qty}
                        </span>

                        <span
                          onClick={() => updateQty(product.id, 1)}
                          className="w-10 h-10 bg-black text-white rounded-full flex justify-center items-center text-5xl pb-3 cursor-pointer"
                        >
                          +
                        </span>
                      </div>

                      <div className="mt-5 md:mt-0">
                        <button
                          onClick={() => removeItem(product.id)}
                          className="px-6 py-3 border hover:bg-secondary hover:border-transparent hover:text-white rounded-lg md:rounded-full uppercase cursor-pointer GolosText transition-all duration-300 whitespace-nowrap shrink-0"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <Link href="/UI-Components/Pages/Checkout">
                  <button className="btn w-full mt-3 bg-black text-white cursor-pointer GolosText text-xl py-2 px-3 rounded-2xl">
                    <i className="bi bi-cart4"></i> CheckOut
                  </button>
                </Link>
              </div>
            </div>

            {/* Stiky content */}
            <div className="w-full lg:w-1/2 sticky top-25 left-0 h-full">
              <div className="border rounded-2xl p-4">
                <button className="btn border w-full border-black cursor-pointer hover:bg-black hover:text-white GolosText text-xl px-6 py-3 rounded-md transition-all duration-300">
                  Bank Offer 5% Cashback
                </button>

                <div className="mt-5 border w-full px-6 py-3 rounded-md border-black cursor-pointer">
                  <div className="flex items-center gap-5">
                    <Image
                      src={returnPolicy}
                      alt="return-policy"
                      width={70}
                      height={70}
                      className="opacity-80"
                    />

                    <div className="flex flex-col">
                      <h2 className="GolosText">
                        Easy Returns
                      </h2>

                      <h2 className="Lufga font-medium">
                        30 Days
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="mt-5 border w-full px-6 py-3 rounded-md border-black cursor-pointer">
                  <div className="flex items-center gap-5">
                    <Image
                      src={packBox}
                      alt="return-policy"
                      width={70}
                      height={70}
                      className="opacity-80"
                    />

                    <div className="flex flex-col">
                      <h2 className="Lufga font-medium">
                        Enjoy the Product
                      </h2>

                      <h2 className="GolosText text-[14px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                      </h2>
                    </div>
                  </div>
                </div>

                <h2 className="mt-3 flex items-center gap-2 GolosText">
                  <i className="bi bi-check2-circle text-2xl"></i>
                  You will save $50 on this order
                </h2>

                <div className="flex justify-between items-center gap-3 border-t border-gray-400 my-3 pt-3">
                  <h2 className="text-xl GolosText">
                    Total
                  </h2>

                  <h2 className="text-2xl GolosText font-semibold">
                    ${calculateTotal().toFixed(2)}
                  </h2>
                </div>

                <Link href="/UI-Components/Pages/Checkout">
                  <button
                    onClick={() => { }}
                    className="btn border w-full mt-3 bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300"
                  >
                    <i className="bi bi-cart3"></i>
                    Place Order
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

    </>
  )
}

export default Cart