import PageHeader from '@/app/components/PageHeader'
import React from 'react'

const Pricing = () => {
  return (
    <>
      <PageHeader
        title="Pricing"
        currentPage="Pricing"
      />

      <div className='px-[8%] lg:px-[16%] py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          <div className='pricing-card rounded-2xl border border-black p-5 transition-all duration-300 hover:-translate-y-3 hover:shadow-lg'>
            <h3 className='font-semibold text-2xl mb-3 Lufga text-black'>
              Starter Plan
            </h3>

            <p className='text-black mb-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nemo non incidunt
            </p>

            <div className='pricing-content flex gap-1 items-end mb-8'>
              <h2 className='text-5xl font-bold GolosText'>
                $19
              </h2>

              <span className='text-black text-xl font-semibold GolosText'>
                /week
              </span>

            </div>

            <button className='btn border w-full border-black cursor-pointer hover:bg-black hover:text-white transition-all duration-300 GolosText text-xl px-4 py-1 rounded-md'>
              Try For Free
            </button>

            <div className='pricing-list py-8'>
              <h4 className='text-black mb-5 GolosText font-semibold'>
                Key Features:
              </h4>

              <ul className='list-item'>
                <li className='flex gap-3 GolosText mb-3'>
                  <i className='bi bi-check-circle-fill'></i> Access to all features
                </li>
                <li className='flex gap-3 GolosText mb-3'>
                  <i className='bi bi-check-circle-fill'></i> Assited onboarding support
                </li>
                <li className='flex gap-3 GolosText mb-3'>
                  <i className='bi bi-check-circle-fill'></i> CPM Overage: Unlimited
                </li>

              </ul>

              <ul className='list-item opacity-50'>
                <li className='flex gap-3 GolosText mb-3'>
                  <i className='bi bi-check-circle-fill text-secondary'></i> Program reviews 1x a month
                </li>
                <li className='flex gap-3 GolosText mb-3'>
                  <i className='bi bi-check-circle-fill text-secondary'></i> CPM Overage: Unlimited
                </li>
                <li className='flex gap-3 GolosText mb-3'>
                  <i className='bi bi-check-circle-fill text-secondary'></i> Assited onboarding support
                </li>
                <li className='flex gap-3 GolosText mb-3'>
                  <i className='bi bi-check-circle-fill text-secondary'></i> CPM Overage: Unlimited
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing