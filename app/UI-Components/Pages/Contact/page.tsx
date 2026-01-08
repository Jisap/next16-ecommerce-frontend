"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideLeft, slideRight, viewportConfig } from '@/app/lib/animations'

const Contact = () => {
  return (
    <>
      <div className='px-[8%] lg:px-[16%] py-20 overflow-hidden'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
          <motion.div
            className='w-full lg:w-1/2'
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={slideLeft}
          >
            <h2 className='GolosText font-bold text-5xl mb-4'>
              DISCOVER US
            </h2>

            <p className='GolosText underline text-2xl'>
              Fashique is here to help you
            </p>

            <p className='GolosText mt-3 text-2xl'>
              Our experts are available to answer any questions you might have. We've got the answers.
            </p>

            <h2 className='GolosText mt-10 text-2xl font-semibold'>
              Call Us
            </h2>

            <p className='GolosText mt-3 text-2xl'>+123 456 789</p>
            <p className='GolosText mt-3 text-2xl'>+123 456 789</p>
          </motion.div>

          <motion.div
            className='w-full lg:w-1/2 contact-form bg-black text-white p-10 rounded-lg'
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={slideRight}
          >
            <div className='space-y-5'>
              <div>
                <label className='Lufga text-white'>
                  Username
                </label>

                <input
                  type='text'
                  placeholder='Enter your name'
                  className='w-full px-4 py-3 border border-white hover:border-primary rounded-lg focus:outline-none text-white'
                />
              </div>

              <div>
                <label className='Lufga text-white'>
                  Email Address
                </label>

                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-full px-4 py-3 border border-white hover:border-primary rounded-lg focus:outline-none text-white'
                />
              </div>

              <div>
                <label className='Lufga text-white'>
                  Phone Number
                </label>

                <input
                  type='tel'
                  placeholder='Enter your phone number'
                  className='w-full px-4 py-3 border border-white hover:border-primary rounded-lg focus:outline-none text-white'
                />
              </div>

              <div>
                <label className='Lufga text-white'>
                  Message
                </label>

                <textarea
                  placeholder='Enter your message'
                  className='w-full px-4 py-3 border border-white hover:border-primary rounded-lg focus:outline-none text-white'
                />
              </div>

              <div className='flex items-center justify-center gap-2 mt-5'>
                <button className='btn w-full bg-primary text-black GolosText font-semibold cursor-pointer px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-white hover:text-black'>
                  SUBMIT
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Contact
