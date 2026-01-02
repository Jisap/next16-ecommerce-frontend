import PageHeader from '@/app/components/PageHeader'
import Image from 'next/image'
import Link from 'next/link'
import BlogsData from '@/data/BlogsData.json';

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
  return (
    <>
      <PageHeader
        title="Blog"
        currentPage="Blog"
      />

      <div className='px-[8%] lg:px-[16%] py-30 pt-10'>
        <div className='flex flex-col lg:flex-row justify-between gap-10'>
          <div className='w-full lg:w-1/1'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
              {BlogsData.map((blog, index) => (
                <Link href={`/UI-Components/Blogs/${blog.id}`} key={index}>
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
              ))}
            </div>
          </div>

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
          </div>

        </div>
      </div>
    </>
  )
}

export default Blog 