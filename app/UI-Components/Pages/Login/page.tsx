'use client'

import Image from 'next/image'
import Link from 'next/link'
import loginImg from '@/public/assets/login-img.webp'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { slideLeft, slideRight, viewportConfig } from '@/app/lib/animations'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <div className='overflow-hidden'>
        <div className='flex flex-col lg:flex-row'>
          {/* izquierda */}
          <motion.div
            className='w-full lg:w-1/2 hidden lg:block bg-[#ffedd4] relative'
            initial="hidden"
            animate="visible"
            variants={slideLeft}
          >
            <div className='absolute top-20 lg:top-40 left-10 z-10'>
              <h2 className='text-black text-4xl GolosText font-semibold'>
                Login
              </h2>

              <div className='flex mt-5 text-2xl items-center text-black'>
                <Link href="/" className='font-semibold hover:text-secondary transition-all duration-300'>
                  Home
                </Link>

                <i className='ri-arrow-right-wide-line pt-2 px-2'></i>

                <span>Login</span>
              </div>
            </div>

            <div className='login-image relative ps-20'>
              <Image
                src={loginImg}
                alt="login-img"
                className='w-full h-full rounded-2xl'
              />
            </div>
          </motion.div>

          {/* derecha */}
          <motion.div
            className='w-full lg:w-1/2'
            initial="hidden"
            animate="visible"
            variants={slideRight}
          >
            <div className='flex items-center justify-center px-[8%] lg:px-[16%] py-15 min-h-screen'>
              <div className='border w-[90%] max-w-xl p-10 border-black rounded-2xl'>
                <h2 className='text-3xl Lufga font-bold text-center mb-3'>
                  Login
                </h2>

                <p className='text-gray-500 text-center mb-6'>
                  Welcome please login to your account
                </p>

                <div className='space-y-5'>
                  <div className='email-details'>
                    <label className='Lufga'>Email Address</label>
                    <input type="email" placeholder='Enter your email' className='w-full px-4 py-3 border border-black bg-white hover:border-secondary rounded-lg focus:outline-none' />
                  </div>

                  <div className='password-details'>
                    <label className='Lufga'>Password</label>
                    <div className='relative'>
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder='Enter your password'
                        className='w-full px-4 py-3 border border-black bg-white hover:border-secondary rounded-lg focus:outline-none'
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        title={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                        className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-secondary'
                      >
                        <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} text-xl`}></i>
                      </button>
                    </div>
                  </div>

                  <div className='flex justify-between mb-8'>
                    <label className='flex items-center gap-1 cursor-pointer'>
                      <input type="checkbox" className='mt-1' />
                      <span className='text-gray-500'>Remember me</span>
                    </label>

                    <a className='text-secondary cursor-pointer'>Forgot Password</a>
                  </div>

                  <div className='flex items-center justify-center gap-2 mt-5'>
                    <button className='btn bg-black text-white cursor-pointer GolosText px-4 py-2 rounded-md transition-all duration-300'>Sign In</button>

                    <Link href="/UI-Components/Pages/Registration">
                      <button className='btn border hover:bg-secondary text-black hover:text-white cursor-pointer GolosText px-4 py-2 rounded-md transition-all duration-300'>Register</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Login
