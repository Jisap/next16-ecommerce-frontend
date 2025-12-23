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



const Trending = () => {

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
      <div className='px-[8%] lg:px-[16%] py-20'>
        <div className='flex flex-col md:flex-row justify-between gap-5'>
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
        </div>

        <div className="trending-swiper">
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
                {/* <div className="product-card cursor-pointer">
                  <div className="product-image rounded-2xl overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover rounded-2xl"
                    />

                    <span className="absolute top-3 left-3 px-4 py-1 GolosText bg-white rounded-full">
                      {product.off}
                    </span>

                    <div className="absolute top-5 right-5 flex flex-col gap-2">
                      <i
                        onClick={() => addToWishlist(product)}
                        className="bi bi-balloon-heart product-icon w-10 h-10 flex items-center justify-center text-white bg-black/40 cursor-pointer rounded-full"
                      ></i>
                      <i
                        onClick={() => addToCart(product)}
                        className="bi bi-cart3 product-icon w-10 h-10 flex items-center justify-center text-white bg-black/40 cursor-pointer rounded-full"
                      ></i>
                    </div>

                    <div className="relative left-0 -bottom-1 lg:absolute lg:bottom-18 lg:left-18">
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
                <ProductCard
                  product={product}
                  addToWishlist={addToWishlist}
                  addToCart={addToCart}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={1500} />
    </>
  )
}

export default Trending