import React from 'react'

const Trending = () => {
  return (
    <>
      <div className='px-[8%] lg:px-[16%] py-20'>
        <div className='flex flex-col md:flex-row justify-between gap-5'>
          <div>
            <h2 className='text-5xl font-medium Lufga'>
              What´s Trending now
            </h2>

            <p className='GolosText text-lg mt-1'>
              Discover the most trending products in FashiQue.
            </p>
          </div>

          <div>
            <button className='btn bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300'>
              View All
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Trending