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
    </>
  )
}

export default ProductDetailsPage