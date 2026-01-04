"use client"

import PageHeader from "@/app/components/PageHeader"
import BlogsData from "@/data/BlogsData.json"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import quote from "@/public/assets/quote.png"
import gallery1 from "@/public/assets/blog-gallery-1.webp"
import gallery2 from "@/public/assets/blog-gallery-2.webp"
import gallery3 from "@/public/assets/blog-gallery-3.webp"
import gallery4 from "@/public/assets/blog-gallery-4.webp"
import gallery5 from "@/public/assets/blog-gallery-5.webp"
import Follow from "../../Index/Follow/page"
import { ToastContainer } from "react-toastify"

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

const BlodDetails = () => {

  const post = BlogsData.slice(4, 7)

  const params = useParams();
  const id = params?.id;

  const galleryImages = [
    { id: 1, img: gallery1 },
    { id: 2, img: gallery2 },
    { id: 3, img: gallery3 },
    { id: 4, img: gallery4 },
    { id: 5, img: gallery5 },
  ]

  const blog = BlogsData.find((blog) => blog.id === Number(id));
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

          {/* izquierda */}
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

            <p className="my-8 GolosText tracking-wide text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quae inventore voluptates ducimus ullam odit, culpa suscipit officiis non ad beatae? Molestiae minima placeat dolores doloribus
              recusandae alias voluptas deleniti iste!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eius, maxime expedita
              veritatis quaerat eaque, necessitatibus tenetur molestias doloremque aliquid rerum unde, autem neque sapiente aperiam sequi molestiae. Suscipit, porro!
            </p>

            <div className="flex flex-col gap-5 mt-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.slice(0, 2).map((item) => (
                  <Image
                    key={item.id}
                    src={item.img}
                    alt="gallery"
                    width={800}
                    height={800}
                    className="w-full h-full rounded-2xl"
                  />
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {galleryImages.slice(3, 5).map((item) => (
                  <Image
                    key={item.id}
                    src={item.img}
                    alt="gallery"
                    width={800}
                    height={800}
                    className="w-full h-full rounded-2xl"
                  />
                ))}
              </div>
            </div>

            <p className="my-8 GolosText tracking-wide text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quae inventore voluptates ducimus ullam odit, culpa suscipit officiis non ad beatae? Molestiae minima placeat dolores doloribus
              recusandae alias voluptas deleniti iste!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eius, maxime expedita
              veritatis quaerat eaque, necessitatibus tenetur molestias doloremque aliquid rerum unde, autem neque sapiente aperiam sequi molestiae. Suscipit, porro!
            </p>

            <h2 className="GolosText text-2xl font-semibold">
              Additional information
            </h2>

            <p className="mt-4 GolosText tracking-wide text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quae inventore voluptates ducimus ullam odit, culpa suscipit officiis non ad beatae? Molestiae minima placeat dolores doloribus
              recusandae alias voluptas deleniti iste!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eius, maxime expedita
            </p>

            <p className="mt-4 GolosText tracking-wide text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quae inventore voluptates ducimus ullam odit, culpa suscipit officiis non ad beatae? Molestiae minima placeat dolores doloribus
              recusandae alias voluptas deleniti iste!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eius, maxime expedita
            </p>

          </div>

          {/* derecha */}
          <div className='w-full lg:w-1/2 sticky top-25 left-0 h-full'>
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
                  <Link href={`/UI-Components/Blogs/${post.id}`} key={index} className='flex items-center gap-5 cursor-pointer'>
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
          </div>
        </div>
      </div>

      <Follow />

      <ToastContainer position="top-right" autoClose={1500} />

    </>
  )
}

export default BlodDetails