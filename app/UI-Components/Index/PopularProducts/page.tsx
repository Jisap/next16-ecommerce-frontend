"use client"


import ProductData from "@/data/ProductsData.json"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"
import PopularProductCard from "@/app/components/Product-Card"


const PopularProducts = () => {

  const containerRef = useRef(null);
  const categories = ["Dresses", "Tops", "Outerwear", "Jacket", "Bags"];

  useEffect(() => {
    async function loadMix() {
      if (typeof window !== "undefined" && containerRef.current) {
        const mixitup = (await import("mixitup")).default;

        mixitup(containerRef.current, {
          animation: {
            duration: 400
          }
        })
      }
    }
    loadMix()
  }, []);

  const addToWishlist = (product: any) => {
    const stored = localStorage.getItem("wishlist")
    let wishlist = stored ? JSON.parse(stored) : []

    const exists = wishlist.find((item: any) => item.id === product.id)
    if (exists) {
      toast.error("Product already exists in wishlist!")
      return
    }

    wishlist.push(product)
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
    toast.success("Product added to wishlist!")
  }

  const addToCart = (product: any) => {
    const stored = localStorage.getItem("cart")
    let cart = stored ? JSON.parse(stored) : []

    const exists = cart.find((item: any) => item.id === product.id)
    if (exists) {
      toast.error("Product already exists in cart!")
      return
    }

    cart.push({ ...product, qty: 1 })
    localStorage.setItem("cart", JSON.stringify(cart))
    toast.success("Product added to cart!")
  }

  return (
    <>
      <div className='px-[8%] lg:px-[16%] py-20 mt-20'>
        <div className='flex flex-col md:flex-row justify-between gap-5'>
          <div>
            <h2 className='text-5xl font-medium Lufga'>
              Most Popular Products
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="border rounded-full px-4 py-2 flex flex-wrap items-center justify-center gap-2">
            <button
              className="px-4 py-1 rounded-full focus:bg-black focus:text-white transition-all duration-300 cursor-pointer mixitup-control-active"
              data-filter="all"
            >
              All
            </button>

            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-1 rounded-full focus:bg-black focus:text-white transition-all duration-300 cursor-pointer"
                data-filter={'.' + category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10" ref={containerRef}>
            {ProductData.map((product) => {
              return (
                <div
                  key={product.id}
                  className={`mix ${product.cate} relative product-card popular-product cursor-pointer`}
                >
                  {/* <div className="product-card cursor-pointer relative">
                    <div className="popular-product-image-wrapper relative">
                      <div className="product-image rounded-2xl relative overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={500}
                          height={500}
                          className="w-full h-full object-cover rounded-2xl"
                        />

                        <span className="absolute top-3 left-3 px-4 py-1 GolosText bg-white rounded-full z-10">
                          {product.off}
                        </span>

                        <div className="absolute top-5 right-5 flex flex-col gap-2 z-10">
                          <i
                            onClick={() => addToWishlist(product)}
                            className="bi bi-balloon-heart product-icon w-10 h-10 flex items-center justify-center text-white bg-black/40 cursor-pointer rounded-full"
                          ></i>
                          <i
                            onClick={() => addToCart(product)}
                            className="bi bi-cart3 product-icon w-10 h-10 flex items-center justify-center text-white bg-black/40 cursor-pointer rounded-full"
                          ></i>
                        </div>
                      </div>

                      <div className="popular-product-btn-wrapper">
                        <Link href={`/UI-Components/Shop/${product.id}`}>
                          <button className="btn bg-black text-white cursor-pointer GolosText text-sm lg:text-base xl:text-lg 2xl:text-xl px-6 py-2.5 lg:py-3 rounded-2xl w-full lg:w-auto lg:rounded-full border-3 border-white">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>

                    <Link href={`/UI-Components/Shop/${product.id}`}>
                      <div className="product-content mt-5 md:mt-10 z-10">
                        <div className="flex justify-between">
                          <h2 className="Lufga font-medium text-xl pr-5">
                            {product.title}
                          </h2>

                          <h3 className="GolosText font-semibold text-2xl">
                            {product.price}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div> */}
                  <PopularProductCard
                    product={product}
                    addToWishlist={addToWishlist}
                    addToCart={addToCart}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={1500} />
    </>
  )
}

export default PopularProducts