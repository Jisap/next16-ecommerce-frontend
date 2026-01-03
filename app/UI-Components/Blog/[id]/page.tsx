"use client"

import PageHeader from "@/app/components/PageHeader"
import BlogData from "@/data/BlogsData.json"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import quote from "@/public/assets/quote.png"
import gallery1 from "@/public/assets/blog-gallery-1.webp"
import gallery2 from "@/public/assets/blog-gallery-2.webp"
import gallery3 from "@/public/assets/blog-gallery-3.webp"
import gallery4 from "@/public/assets/blog-gallery-4.webp"
import gallery5 from "@/public/assets/blog-gallery-5.webp"


const BlodDetails = () => {

  const params = useParams();
  const id = params?.id;

  const blog = BlogData.find((blog) => blog.id === Number(id));
  if (!blog) {
    return (
      <div className="py-20 text-center text-3xl font-bold">
        Blog Not Found
      </div>
    )
  }

  return (
    <>
      <PageHeader
        title="Blog Details"
        currentPage="Blog Details"
        parentPage="Blog"
        parentLink="/UI-Components/Blog"
      />

      <div className="px-[8%] lg:px-[16%] py-30 pt-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full lg:w-1/1">
            <h2 className="GolosText text-5xl font-semibold">{blog.title}</h2>

            <div className="flex items-center gap-2 my-3">
              <span className="px-3 py-1 bg-primary GolosText">{blog.date}</span>

              <span className="ps-2">
                <i className="bi bi-person-fill"></i> By KK Sharma
              </span>

              <span className="ps-2">
                <i className="bi bi-chat-left-dots-fill"></i> 24 Comments
              </span>
            </div>

            <div>
              <Image
                src={blog.image}
                alt=""
                width={800}
                height={800}
                className="w-full h-full rounded-2xl mt-5"
              />
            </div>

            <p className="mt-3 GolosText tracking-wider text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quibusdam sapiente dolorum ullam dolore. Nihil numquam ad
              distinctio enim incidunt, possimus, nisi, maxime voluptate illum suscipit consectetur quaerat dignissimos quis. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quisquam, quod.
            </p>

            <div className="my-5 border rounded-2xl p-5">
              <h4 className="GolosText text-2xl font-semibold">
                Information Architecture That's Easy To Use Way Precise Usability Considerantion For Partially
              </h4>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3 gap-4">
                <h2 className="GolosText font-semibold">
                  <span className="font-black pe-1">_____ </span> Ronald M. Spino
                </h2>
                <Image
                  src={quote}
                  alt="quote"
                  width={80}
                  height={80}
                  className="rounded-2xl flex-shrink-0 self-end sm:self-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlodDetails