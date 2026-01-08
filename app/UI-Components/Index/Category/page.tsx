"use client"

import Image from "next/image"
import category1 from "@/public/assets/Category-1.webp"
import category2 from "@/public/assets/Category-2.webp"
import category3 from "@/public/assets/Category-3.webp"
import category4 from "@/public/assets/Category-4.webp"
import category5 from "@/public/assets/Category-5.webp"
import category6 from "@/public/assets/Category-6.webp"




import { motion } from "framer-motion"
import { slideUp, staggerContainer, viewportConfig } from "@/app/lib/animations"

const Category = () => {
  const categories = [
    { name: "Jacket", image: category1 },
    { name: "Jeans", image: category2 },
    { name: "Shirts", image: category3 },
    { name: "Shorts", image: category4 },
    { name: "T-Shirts", image: category5 },
    { name: "Blazer", image: category6 },
  ]
  return (
    <>
      <div className='px-[8%] lg:px-[8%] py-20'>
        <div className="bg-primary px-[8%] py-20 rounded-2xl">
          <motion.div
            className="category-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            {categories.map((cat, idx) => (
              <motion.div key={idx} className="category-card relative" variants={slideUp}>
                <Image
                  src={cat.image}
                  alt={cat.name}
                  className=""
                />

                <span className="bg-white hover:bg-secondary border-2 border-white hover:text-white cursor-pointer transition-all duration-300 rounded-full GolosText text-2xl px-6 py-3">
                  {cat.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Category