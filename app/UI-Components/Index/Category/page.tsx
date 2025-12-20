import Image from "next/image"
import category1 from "@/public/assets/Category-1.webp"
import category2 from "@/public/assets/Category-2.webp"
import category3 from "@/public/assets/Category-3.webp"
import category4 from "@/public/assets/Category-4.webp"
import category5 from "@/public/assets/Category-5.webp"
import category6 from "@/public/assets/Category-6.webp"




const Category = () => {
  return (
    <>
      <div className='px-[8%] lg:px-[8%] py-20'>
        <div className="bg-primary px-[8%] py-20 rounded-2xl">
          <div className="category-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="category-card relative">
              <Image
                src={category1}
                alt="Category 1"
                className=""
              />

              <span className="bg-white hover:bg-secondary border-2 border-white hover:text-white cursor-pointer transition-all duration-300 rounded-full GolosText text-2xl px-6 py-3">
                Jacket
              </span>
            </div>

            <div className="category-card relative">
              <Image
                src={category2}
                alt="Category 2"
                className=""
              />

              <span className="bg-white hover:bg-secondary border-2 border-white hover:text-white cursor-pointer transition-all duration-300 rounded-full GolosText text-2xl px-6 py-3">
                Jeans
              </span>
            </div>

            <div className="category-card relative">
              <Image
                src={category3}
                alt="Category 3"
                className=""
              />

              <span className="bg-white hover:bg-secondary border-2 border-white hover:text-white cursor-pointer transition-all duration-300 rounded-full GolosText text-2xl px-6 py-3">
                Shirts
              </span>
            </div>

            <div className="category-card relative">
              <Image
                src={category4}
                alt="Category 4"
                className=""
              />

              <span className="bg-white hover:bg-secondary border-2 border-white hover:text-white cursor-pointer transition-all duration-300 rounded-full GolosText text-2xl px-6 py-3">
                Shorts
              </span>
            </div>

            <div className="category-card relative">
              <Image
                src={category5}
                alt="Category 5"
                className=""
              />

              <span className="bg-white hover:bg-secondary border-2 border-white hover:text-white cursor-pointer transition-all duration-300 rounded-full GolosText text-2xl px-6 py-3">
                T-Shirts
              </span>
            </div>

            <div className="category-card relative">
              <Image
                src={category6}
                alt="Category 6"
                className=""
              />

              <span className="bg-white hover:bg-secondary border-2 border-white hover:text-white cursor-pointer transition-all duration-300 rounded-full GolosText text-2xl px-6 py-3">
                Blazer
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category