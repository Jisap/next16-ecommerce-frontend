'use client'

import Image from "next/image"
import ProductData from "@/data/ProductsData.json"
import Link from "next/link"
import returnPolicy from "@/public/assets/boat.png"
import packBox from "@/public/assets/pack-box.png"
import { useParams } from "next/navigation"
import { useState } from "react"
import PageHeader from "@/app/components/PageHeader"
import { addToCart, addToWishlist } from "@/app/utils"
import Follow from "../../Index/Follow/page"
import { ToastContainer } from "react-toastify"


type ProductType = {
  id: number;
  title: string;
  price: string;
  image: string;
  off?: string;
  cate?: string;
}

const ProductDetailsPage = () => {

  const { id } = useParams();
  const product = ProductData.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <div className="text-center py-40 text-3xl font-semibold">
        Product not found
      </div>
    )
  }

  const [quantity, setQuantity] = useState(1);
  const priceNumber = Number(product.price.replace("$", ""));
  const totalPrice = priceNumber * quantity;

  const [activeSize, setActiveSize] = useState("S")

  return (
    <>
      <PageHeader
        title="Product Details"
        currentPage={product.title}
        parentPage="Shop"
        parentLink="/UI-Components/Shop"
      />

      <div className="px-[8%] lg:px-[16%] py-20">
        <div className="flex flex-col xl:flex-row gap-6 justify-between">
          {/* izquierda */}
          <div className="w-full lg:w-1/1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={700}
                    height={700}
                    className="w-full has-focus-within:object-cover rounded-md"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold GolosText">{product.price}</span>
                  <span className="text-lg bg-black text-white px-4 py-1 rounded-full">{product.off}</span>
                </div>

                <h1 className="text-4xl font-medium Lufga mt-4">{product.title}</h1>

                <div className="mb-3 mt-1 flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <i className="bi bi-star-fill text-yellow-300"></i>
                    <i className="bi bi-star-fill text-yellow-300"></i>
                    <i className="bi bi-star-fill text-yellow-300"></i>
                    <i className="bi bi-star-half text-yellow-300"></i>
                    <i className="bi bi-star text-yellow-300"></i>
                  </div>

                  <p className="GolosText">4.7 Rating</p>
                </div>

                <p className="text-gray-600 GolosText">
                  This product is part of our high-quality collection, crafted with comfort, style, and premium fit. Perfect for casual and formal occasions.
                </p>

                <div className="flex  items-center gap-10 my-5 border-b border-gray-400 pb-5">
                  {/* Quantity */}
                  <div>
                    <h2 className="GolosText text-xl font-semibold mb-2">Quantity</h2>

                    <div className="flex items-center gap-2">
                      <span
                        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                        className="w-10 h-10 bg-black text-white rounded-full flex justify-center items-center text-5xl pb-3 cursor-pointer"
                      >
                        -
                      </span>

                      <span className="w-10 h-10 border rounded-full flex justify-center items-center text-center text-2xl pb-1">
                        {quantity}
                      </span>

                      <span
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 bg-black text-white rounded-full flex justify-center items-center text-5xl pb-3 cursor-pointer"
                      >
                        +
                      </span>
                    </div>
                  </div>

                  {/* Size */}
                  <div>
                    <h2 className="GolosText text-xl font-semibold mb-2">Size</h2>

                    <div className="flex items-center gap-2">
                      {["S", "M", "L"].map((size) => (
                        <button
                          key={size}
                          onClick={() => setActiveSize(size)}
                          className={`
                            w-10 h-10 rounded-full flex justify-center items-center text-center text-xl pb-1 cursor-pointer transition-all duration-300 border
                            ${activeSize === size ? "bg-black text-white border-black" : "bg-transparent text-black"}
                          `}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h2 className="mb-2">
                    <span className="GolosText font-semibold pe-2">
                      SKU: <span className="text-md text-gray-400">PRT584E63A</span>
                    </span>
                  </h2>

                  <h2 className="mb-2">
                    <span className="GolosText font-semibold pe-2">
                      Category: <span className="text-md text-gray-400">Dresses, Jeans, Swimwear, Clothing</span>
                    </span>
                  </h2>

                  <h2 className="mb-2">
                    <span className="GolosText font-semibold pe-2">
                      Tag: <span className="text-md text-gray-400">Casual, Athletic, Workwear, Accessories</span>
                    </span>
                  </h2>

                  <h2 className="mb-2">
                    <span className="GolosText font-semibold pe-2">
                      Tag:
                    </span>
                    <i className="ri-facebook-fill ps-1 text-xl"></i>
                    <i className="ri-twitter-fill ps-1 text-xl"></i>
                    <i className="ri-instagram-fill ps-1 text-xl"></i>
                    <i className="ri-behance-fill ps-1 text-xl"></i>
                  </h2>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="Lufga text-4xl font-medium">
                Description:
              </h2>

              <h2 className="Lufga text-xl font-medium mt-5">
                Flawless Denim Delights
              </h2>

              <p className="GolosText mt-2 tracking-wide text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sint animi quos aspernatur itaque fugit dolore praesentium nostrum, modi quia cum laboriosam libero adipisci quae quo accusantium quis harum neque!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa sint, eos eaque sunt perferendis obcaecati saepe, consectetur delectus praesentium aspernatur architecto facere labore commodi, soluta hic officiis quas tempore.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut officiis dolores mollitia accusamus. Magnam vero eveniet, perspiciatis atque, quisquam voluptate aliquid iure tenetur, blanditiis odio placeat exercitationem ex perferendis sequi.
              </p>

              <h2 className="mt-5 flex items-center gap-2 GolosText text-xl md:text-2xl">
                <i className="bi bi-check2-circle text-2xl text-secondary"></i>
                Versatile, enduring style for all occassions
              </h2>

              <h2 className="mt-2 flex items-center gap-2 GolosText text-xl md:text-2xl">
                <i className="bi bi-check2-circle text-2xl text-secondary"></i>
                Handcrafted, Elegance, Confort
              </h2>

              <h2 className="mt-2 flex items-center gap-2 GolosText text-xl md:text-2xl">
                <i className="bi bi-check2-circle text-2xl text-secondary"></i>
                Premium Quality, Long-lasting
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
                <div className="border rounded-2xl flex flex-col justify-center items-center p-4 text-center">
                  <h2 className="text-2xl GolosText font-semibold">All-in-One Dress</h2>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>

                <div className="border rounded-2xl flex flex-col justify-center items-center p-4 text-center">
                  <h2 className="text-2xl GolosText font-semibold">Looking wise good</h2>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>

                <div className="border rounded-2xl flex flex-col justify-center items-center p-4 text-center">
                  <h2 className="text-2xl GolosText font-semibold">100% Made in USA</h2>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>

                <div className="border rounded-2xl flex flex-col justify-center items-center p-4 text-center">
                  <h2 className="text-2xl GolosText font-semibold">100% Cotton</h2>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* derecha */}
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
                  ${totalPrice}
                </h2>
              </div>

              <button
                onClick={() => addToWishlist(product)}
                className="btn border w-full border-black cursor-pointer hover:bg-black hover:text-white GolosText text-xl px-6 py-3 rounded-md transition-all duration-300"
              >
                <i className="bi bi-ballon-heart"></i>
                Add to wishlist
              </button>

              <button
                onClick={() => addToCart(product)}
                className="btn border w-full mt-3 bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300"
              >
                <i className="bi bi-cart3"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <Follow />

      <ToastContainer position="top-right" autoClose={1500} />
    </>
  )
}

export default ProductDetailsPage