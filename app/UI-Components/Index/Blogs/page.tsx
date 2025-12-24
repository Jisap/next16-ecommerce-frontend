"use client"

import BlogsData from "@/data/BlogsData.json"
import Image from "next/image"

const Blogs = () => {
  return (
    <>
      <div className='px-[8%] lg:px-[16%] py-20'>
        <div className='flex flex-col md:flex-row justify-between gap-5'>
          <div>
            <h2 className='text-5xl font-medium Lufga'>
              Latest Posts
            </h2>

            <p className='GolosText text-lg mt-1'>
              Discover the most trending posts in <span className="text-secondary font-semibold">FashiQue</span>.
            </p>
          </div>

          <div>
            <button className='btn mb-10 bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300'>
              View All
            </button>
          </div>
        </div>

        <div className="idx-blog-wrap grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {
            BlogsData.slice(0, 4).map((blog, index) => (
              <div key={index} className="idx-blog-item">
                <div className="bg-white p-7 flex flex-col md:flex-row justify-between gap-5 rounded-2xl shadow-2xl/5">
                  <div className="w-full lg:w-1/2">
                    <div
                      className="blog-image"
                      style={{
                        backgroundImage: `url('${blog.image}')`
                      }}
                    >

                    </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <div className="flex flex-col h-full justify-between gap-5">
                      <div>
                        <span className="px-3 py-1 bg-black text-white rounded-md">{blog.date}</span>

                        <h2 className="mt-2 GolosText text-2xl font-semibold">
                          {blog.title}
                        </h2>
                      </div>

                      <div>
                        <button className="btn border px-7 py-3 rounded-lg GolosText font-semibold hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer flex items-center gap-3">
                          Read More
                          <i className="bi bi-arrow-right border rounded-full w-6 h-6 flex items-center justify-center bg-white text-black"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Blogs