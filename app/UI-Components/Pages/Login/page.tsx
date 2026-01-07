import Image from 'next/image'
import Link from 'next/link'
import loginImg from '@/public/assets/login-img.webp'

const Login = () => {
  return (
    <>
      <div>
        <div className='flex flex-col lg:flex-row'>
          {/* izquierda */}
          <div className='w-full lg:w-1/2 hidden lg:block bg-[#ffedd4]'>
            <div className='absolute top-30 lg:top-50 left-10 z-10'>
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
          </div>

          {/* derecha */}
          <div className='w-full lg:w-1/2'>
            <div className='flex items-center justify-center px-[8%] lg:px-[16%] py-15 min-h-screen'>
              <div className='border w-[90%] max-w-xl p-10 border-black rounded-2xl'>
                <h2 className='text-3xl Lufga font-bold text-center mb-3'>
                  Login
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login