"use client"
import PageHeader from '@/app/components/PageHeader'
import Image from 'next/image'
import Follow from '../../Index/Follow/page'
import { motion } from 'framer-motion'
import { slideUp, staggerContainer, viewportConfig } from '@/app/lib/animations'

import Voucher1 from "@/public/assets/Voucher-1.webp"
import Voucher2 from "@/public/assets/Voucher-2.webp"
import Voucher3 from "@/public/assets/Voucher-3.webp"
import Voucher4 from "@/public/assets/Voucher-4.webp"
import Voucher5 from "@/public/assets/Voucher-5.webp"
import Voucher6 from "@/public/assets/Voucher-6.webp"

const VouchersData = [
  {
    id: 1,
    image: Voucher1,
    title: "The perfect gift for any occasion",
    info: "Our gift cards are available in a range of denominations, so you can choose the perfect amount for any ocassion."
  },
  {
    id: 2,
    image: Voucher2,
    title: "Delight Some with a Gift Voucher",
    info: "Our gift cards are available in a range of denominations, so you can choose the perfect amount for any ocassion."
  },
  {
    id: 3,
    image: Voucher3,
    title: "Give the Gift of Choice",
    info: "Our gift cards are available in a range of denominations, so you can choose the perfect amount for any ocassion."
  },
  {
    id: 4,
    image: Voucher4,
    title: "Surprise Your Loved Ones",
    info: "Our gift cards are available in a range of denominations, so you can choose the perfect amount for any ocassion."
  },
  {
    id: 5,
    image: Voucher5,
    title: "A Special Treat for Someone Special",
    info: "Our gift cards are available in a range of denominations, so you can choose the perfect amount for any ocassion."
  },
  {
    id: 6,
    image: Voucher6,
    title: "Make Their Day with a Voucher",
    info: "Our gift cards are available in a range of denominations, so you can choose the perfect amount for any ocassion."
  },
]

const Vouchers = () => {
  return (
    <>
      <PageHeader
        title="Gift Vouchers"
        currentPage="Our Gift Vouchers"
      />

      <div className='px-[8%] lg:px-[16%] py-20 overflow-hidden'>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {VouchersData.map((voucher, index) => (
            <motion.div
              key={index}
              className='bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300'
              variants={slideUp}
            >
              <div className='flex flex-col mb-4'>
                <div className='overflow-hidden rounded-2xl'>
                  <Image
                    src={voucher.image}
                    alt={voucher.title}
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                  />
                </div>

                <div>
                  <h2 className='text-2xl GolosText font-semibold mt-4'>
                    {voucher.title}
                  </h2>

                  <p className='mt-3 tracking-wider text-gray-600'>
                    {voucher.info}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Follow />
    </>
  )
}

export default Vouchers
