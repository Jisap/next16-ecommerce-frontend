"use client"
import PageHeader from '@/app/components/PageHeader'
import { useState } from 'react'
import Follow from '../../Index/Follow/page'
import { ToastContainer } from 'react-toastify'
import Image from 'next/image'
import aboutImg1 from '@/public/assets/about-1.webp'
import aboutImg2 from '@/public/assets/about-2.webp'
import aboutImg3 from '@/public/assets/about-3.webp'
import aboutImg4 from '@/public/assets/about-4.webp'



const faqData = [
  {
    question: "¿Cómo puedo contactar con el servicio de atención al cliente?",
    answer: "Puedes contactarnos a través de nuestro formulario de contacto en la página 'Contáctanos', por correo electrónico a support@fashique.com, o llamándonos al +1-234-567-890. Nuestro equipo está disponible de lunes a viernes de 9 a.m. a 6 p.m."
  },
  {
    question: "¿Cuál es su política de devoluciones?",
    answer: "Aceptamos devoluciones dentro de los 30 días posteriores a la recepción de tu pedido. Los artículos deben estar sin usar, en su estado original y con todas las etiquetas. Para iniciar una devolución, visita nuestra página de devoluciones y sigue las instrucciones."
  },
  {
    question: "¿Cómo puedo rastrear mi pedido?",
    answer: "Una vez que tu pedido haya sido enviado, recibirás un correo electrónico de confirmación con un número de seguimiento. Puedes usar este número en el sitio web del transportista para ver el estado de tu entrega."
  },
  {
    question: "¿Hacen envíos internacionales?",
    answer: "Sí, realizamos envíos a la mayoría de los países. Los costos de envío y los tiempos de entrega varían según el destino. Puedes ver las opciones de envío disponibles para tu país durante el proceso de pago."
  },
  {
    question: "¿Puedo cambiar o cancelar mi pedido?",
    answer: "Si tu pedido aún no ha sido enviado, puedes contactarnos para solicitar un cambio o cancelación. Si el pedido ya ha sido enviado, deberás esperar a recibirlo y luego iniciar un proceso de devolución."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos las principales tarjetas de crédito (Visa, MasterCard, American Express), PayPal y otras billeteras digitales. Todos los pagos son procesados de forma segura."
  }
]

const About = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  return (
    <>
      <PageHeader
        title="About"
        currentPage="About"
      />

      <div className='px-[8%] lg:px-[16%] py-20'>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className='w-full lg:w-1/2'>
            <h2 className='text-4xl text-black GolosText font-bold mb-5'>
              Your Style, Quality, Individuality - Redefining Fashion Together.
            </h2>

            <p className='text-gray-400'>
              Fashique, we are on a mission to redefine fashion by blending style, quality, and individuality
              into every garment we offer. We believe thar what you wear is an extension of your unique personality,
              and it should reflect your values and aspirations.
            </p>
          </div>

          <div className='w-full lg:w-1/2'>
            <div className='about-image flex gap-5 h-[250px]'>
              <Image
                src={aboutImg1}
                alt="about"
                className='rounded-2xl'
              />
              <Image
                src={aboutImg2}
                alt="about"
                className='rounded-2xl'
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col-reverse lg:flex-row gap-5 lg:gap-8 py-6'>
          {/* img founder + faq */}
          <div className='w-full lg:w-1/2'>
            <div className='about-author flex items-center gap-5'>
              <Image
                src={aboutImg3}
                alt="about"
                className='rounded-full w-25'
              />

              <div className=''>
                <h2 className='Lufga text-2xl text-black font-bold'>
                  Kenneth Fong
                </h2>

                <span className='GolosText text-black text-lg'>Ceo & Founder</span>
              </div>
            </div>

            <div className="space-y-1 w-full py-10">
              {faqData.map((faq, index) => (
                <div key={index} className="">
                  {/* button = question + icon */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full text-left py-4 flex justify-between items-center focus:outline-none GolosText border border-black rounded-lg px-6"
                  >
                    <span className="text-xl GolosText font-semibold hover:text-secondary transition-all duration-300">
                      {faq.question}
                    </span>
                    <i className={`
                      bi bi-chevron-down transform transition-transform text-black
                      ${openIndex === index ? 'rotate-180' : ''}`}
                    ></i>
                  </button>

                  {/* answer */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-300 ease-in-out 
                      ${openIndex === index ? 'max-h-[300px] opacity-100 py-3' : 'max-h-0 opacity-0 py-0'}
                    `}
                  >
                    <p className="text-black pb-4 GolosText">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* img right */}
          <div className='w-full lg:w-1/2'>
            <div className='about-image'>
              <Image
                src={aboutImg4}
                alt="about"
                className='rounded-2xl w-full h-full object-cover'
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row lg:gap-8 py-6'>

        </div>
      </div>

      <Follow />

      <ToastContainer position="top-right" autoClose={1500} />
    </>
  )
}

export default About