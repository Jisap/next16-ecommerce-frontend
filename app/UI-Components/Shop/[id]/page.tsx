'use client'

import Image from "next/image"
import ProductData from "@/data/ProductsData.json"
import Link from "next/link"
import returnPolicy from "@/public/assets/boat.png"
import packBox from "@/public/assets/pack-box.png"
import { useParams } from "next/navigation"
import { useState } from "react"
import PageHeader from "@/app/components/PageHeader"


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
        <div className="flex flex-col lg:flex-row gap-2 justify-between items-center">
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

                <div className="flex items-center gap-10 my-5 border-b border-gray-400 pb-5">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetailsPage