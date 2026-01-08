"use client"


import ProductData from "@/data/ProductsData.json"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"
import PopularProductCard from "@/app/components/Product-Card"
import { addToCart, addToWishlist } from "@/app/utils"


import { motion } from "framer-motion"
import { slideUp, staggerContainer, viewportConfig } from "@/app/lib/animations"


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

  return (
    <>
      <div className='px-[8%] lg:px-[16%] py-20 mt-20'>
        <motion.div
          className='flex flex-col md:flex-row justify-between gap-5'
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={slideUp}
        >
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
        </motion.div>

        <div className="mt-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
            ref={containerRef}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            {ProductData.map((product) => {
              return (
                <motion.div
                  key={product.id}
                  className={`mix ${product.cate} relative product-card popular-product cursor-pointer`}
                  variants={slideUp}
                >
                  <PopularProductCard
                    product={product}
                    addToWishlist={addToWishlist}
                    addToCart={addToCart}
                  />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={1500} />
    </>
  )
}

export default PopularProducts