"use client"

import Image from "next/image"
import insta1 from "@/public/assets/insta-1.webp"
import insta2 from "@/public/assets/insta-2.webp"
import insta3 from "@/public/assets/insta-3.webp"
import insta4 from "@/public/assets/insta-4.webp"
import insta5 from "@/public/assets/insta-5.webp"
import insta6 from "@/public/assets/insta-6.webp"
import instaFollow from "@/public/assets/insta-follow.webp"


import { motion } from "framer-motion"
import { slideUp, staggerContainer, fadeIn, viewportConfig } from "@/app/lib/animations"


const instaImage = [insta1, insta2, insta3, insta4, insta5, insta6]

const Follow = () => {
  return (
    <>
      <div className="follow overflow-hidden">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {instaImage.map((insta, idx) => (
            <motion.div key={idx} className="follow-img" variants={fadeIn}>
              <Image
                src={insta}
                alt="insta-images"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="follow-text flex items-center gap-4 bg-white p-3 rounded-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={slideUp}
        >
          <Image
            src={instaFollow}
            alt="insta-follow"
            width={40}
            height={40}
            className="z-5"
          />

          <h2 className="GolosText font-semibold text-xl z-5">
            Follow @Fashique
          </h2>
        </motion.div>
      </div>
    </>
  )
}

export default Follow