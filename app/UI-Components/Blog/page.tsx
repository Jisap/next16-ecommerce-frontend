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

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog 