"use client"


import Image from "next/image";
import circleText from "@/public/assets/banner-shop-circle.png";
import playIcon from "@/public/assets/banner-play-icon.png";
import starShape from "@/public/assets/star-shape.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";



import { motion } from "framer-motion"
import { scaleUp, viewportConfig } from "@/app/lib/animations"

const Banner = () => {

  const categories = [
    "Shorts",
    "T-Shirt",
    "Blazer",
    "Jacket",
    "Jeans",
    "Shirts"
  ]

  return (
    <>
      <div className='banner relative'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={scaleUp}
        >
          <Image
            src={circleText}
            alt="Circle Text"
            width={300}
            height={300}
            className="banner-shop-img"
          />

          <Image
            src={playIcon}
            alt="Play Icon"
            width={100}
            height={100}
            className="banner-play-img"
          />
        </motion.div>

        <div className="w-full overflow-hidden splide-slide-texts">
          <Splide
            options={{
              type: "loop",
              drag: "free",
              focus: "center",
              arrows: false,
              pagination: false,
              autoWidth: true,
              gap: "40px",
              speed: 1,
              autoScroll: {
                speed: 1,
                pauseOnHover: false,
                pauseOnFocus: false,
              }
            }}
            extensions={{ AutoScroll }}
          >
            {categories.map((item, index) => (
              <SplideSlide key={index}>
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <Image
                    src={starShape}
                    alt="Star Shape"
                    width={60}
                    height={60}
                  />
                  <p>{item}</p>
                </h2>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  )
}

export default Banner