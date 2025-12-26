"use client"

import Image from "next/image"
import Link from "next/link"
import BlogsData from "@/data/BlogsData.json"



const Footer = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20 pb-0">
        <div className="flex flex-col lg:flex-row justify-between gap-5 pb-5">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col lg:flex-row justify-between gap-5">
              <div className="w-full lg:w-1/2">
                {/* Destktop logo */}
                <Link
                  href="/"
                  className={`text-4xl lg:text-3xl xl:text-5xl font-bold Audiowide`}
                >
                  Fashi<span className="text-secondary">Que</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer