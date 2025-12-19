"use client"

import Image from "next/image"
import Link from "next/link"
import callImg from "@/public/assets/nav-contact.svg"
import { useState } from "react"




const MiddleNav = () => {

  const [query, setQuery] = useState("")

  return (
    <div className="w-full bg-primary border-b border-gray-300 relative">
      <div className="flex items-center justify-between py-3 px-[4%] md:px-[8%] lg:px-[5%] xl:px-[10%] 2xl:px-[16%]">
        {/* logo */}
        <Link
          href="/"
          className="text-4xl lg:text-3xl xl:text-5xl font-bold Audiowide text-black"
        >
          Fashi<span className="text-secondary">Que</span>
        </Link>

        {/* Search Box */}
        <div className="relative flex flex-col flex-1 ms-4 xl:ms-6 mx-0 bg-white rounded-lg md:mr-4 lg:max-w-[200px] xl:max-w-[350px] 2xl:max-w-[400px]">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for a product"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-4 outline-none rounded-l-lg"
            />

            <button className="px-3 text-2xl cursor-pointer">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>

        {/* Contact */}
        <div className="flex items-center gap-1 xl:gap-2">
          <Image
            src={callImg}
            alt="Call"
            width={40}
            height={40}
            className="xl:w-[50px] xl:h-[50px]"
          />

          <div className="flex flex-col">
            <h2 className="GolosText text-[10px] xl:text-xs ps-1 xl:ps-2 font-semibold">24/7 SUPPORT</h2>
            <span className="GolosText text-xs xl:text-base font-semibold">+123 456 789</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiddleNav