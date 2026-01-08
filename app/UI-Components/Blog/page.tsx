"use client"
import PageHeader from '@/app/components/PageHeader'
import Image from 'next/image'
import Link from 'next/link'
import BlogsData from '@/data/BlogsData.json';
import Follow from '../Index/Follow/page';
import { ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion'
import { slideUp, staggerContainer, viewportConfig } from '@/app/lib/animations'

const categories = [
  { name: "Dresses", count: 10 },
  { name: "Top & Blouses", count: 5 },
  { name: "Boots", count: 15 },
  { name: "Jewelry", count: 8 },
  { name: "Makeup", count: 11 },
  { name: "Fragnaces", count: 17 },
  { name: "Shaving & Grooming", count: 13 },
  { name: "Jacket", count: 9 },
  { name: "Coat", count: 9 },
]


const tags = [
  "Vintage",
  "Wedding",
  "Cotton",
  "Linen",
  "Navy",
  "Urban",
  "Business",
  "Meeting",
  "Formal",
]

const Blog = () => {

  const post = BlogsData.slice(4, 7)

  return (
    <>
      <PageHeader
        title="Blog"
        currentPage="Blog"
      />

      <div className='px-[8%] lg:px-[16%] py-30 pt-10 overflow-hidden'>
        <div className='flex flex-col lg:flex-row justify-between gap-10'>
          <div className='w-full lg:w-1/1'>
            <motion.div
              className='grid grid-cols-1 lg:grid-cols-2 gap-5'
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={staggerContainer}
            >
              {BlogsData.map((blog, index) => (
                <motion.div key={index} variants={slideUp}>
                  <Link href={`/UI-Components/Blog/${blog.id}`}>
                    <div className='blog-card cursor-pointer'>
                      <div className='blog-img'>
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          width={500}
                          height={500}
                          className='w-full h-full rounded-t-2xl'
                        />
                      </div>

                      <div className='bg-primary px-4 py-5 rounded-b-2xl'>
                        <span className='text-lg bg-black text-white px-4 py-1 rounded-lg'>
                          {blog.date}
                        </span>

                        <h2 className='my-3 text-2xl GolosText font-semibold'>
                          {blog.title}
                        </h2>

                        <div>
                          <button className='underline py-2 rounded-full GolosText font-semibold hover:translate-x-2 transition-all duration-300 cursor-pointer'>
                            Read More
                            <i className='bi bi-chevron-right ps-2'></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Derecha */}
          <motion.div
            className='w-full lg:w-1/2 sticky top-25 left-0 h-full'
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={slideUp}
          >
            <h2 className='lufga text-2xl font-medium'>
              Category
            </h2>

            <div className='flex flex-col mt-5 gap-2'>
              {categories.map((category, index) => (
                <div key={index} className='group flex items-center justify-between cursor-pointer'>
                  <h2 className='text-lg GolosText flex items-center gap-2 group-hover:ps-2 transition-all duration-300 group-hover:text-secondary'>
                    <i className="bi bi-arrow-right"></i> {category.name}
                  </h2>

                  <h3 className='group-hover:text-secondary transition-all duration-300'>
                    ({category.count})
                  </h3>
                </div>
              ))}
            </div>

            <div className='mt-10'>
              <h2 className='Lufga text-2xl font-medium mb-5'>
                Latest Post
              </h2>

              <div className='flex flex-col gap-6'>
                {post.map((post, index) => (
                  <Link href={`/UI-Components/Blog/${post.id}`} key={index} className='flex items-center gap-5 cursor-pointer'>
                    <div className='w-1/3 rounded-xl overflow-hidden'>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={500}
                        height={500}
                        className='w-full h-full object-cover'
                      />
                    </div>

                    <div className='flex flex-col'>
                      <p className='GolosText text-sm text-gray-500'>
                        {post.date}
                      </p>

                      <h3 className='GolosText text-lg font-semibold leading-snug hover:text-secondary transition-all duration-300'>
                        {post.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className='mt-10'>
              <h2 className='Lufga text-2xl font-medium mb-5'>
                Tags
              </h2>

              <div className='flex flex-wrap gap-3'>
                {tags.map((tag, index) => (
                  <span key={index} className='GolosText text-sm px-4 py-2 border rounded-md text-black hover:text-white hover:bg-black transition-all duration-300'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Follow />

      <ToastContainer position="top-right" autoClose={1500} />

    </>
  )
}

export default Blog
