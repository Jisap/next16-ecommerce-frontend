"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import Image from "next/image"
import ProductData from "@/data/ProductsData.json"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Link from "next/link"
import ProductCard from "@/app/components/Product-Card"
import { addToCart, addToWishlist } from "@/app/utils"



import { motion } from "framer-motion"
import { slideUp, fadeIn, viewportConfig } from "@/app/lib/animations"

const Trending = () => {

  return (
    <>
      <div className='px-[8%] lg:px-[16%] py-20'>
        <motion.div
          className='flex flex-col md:flex-row justify-between gap-5'
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={slideUp}
        >
          <div>
            <h2 className='text-5xl font-medium Lufga'>
              What´s Trending now
            </h2>

            <p className='GolosText text-lg mt-1'>
              Discover the most trending products in FashiQue.
            </p>
          </div>

          <div>
            <button className='btn mb-10 bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300'>
              View All
            </button>
          </div>
        </motion.div>

        <motion.div
          className="trending-swiper"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeIn}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            breakpoints={{
              1500: {
                slidesPerView: 4,
              },
              1100: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              }
            }}
          >
            {ProductData.slice(0, 5).map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard
                  product={product}
                  addToWishlist={addToWishlist}
                  addToCart={addToCart}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <ToastContainer position="top-right" autoClose={1500} />
    </>
  )
}

export default Trending