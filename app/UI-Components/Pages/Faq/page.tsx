'use client'


import PageHeader from '@/app/components/PageHeader'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import faqImg from '@/public/assets/faq-img.webp'

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
];


const Faqs = () => {

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
      <PageHeader title="FAQ" currentPage="FAQ" />

      <div className='flex flex-col lg:flex-row justify-between items-center h-full lg:h-[70vh] gap-5'>
        <div className='w-full lg:w-1/2 flex justify-center items-center bg-[#ffedd4] h-full py-10 lg:py-0 ps-[8%] lg:px-[8%] pe-10'>
          <div className=''>
            <h2 className='text-4xl GolosText'>Have any questions?</h2>

            <div className='flex text-2xl items-center'>
              <Link href="/" className="hover:text-secondary"> Home</Link>
              <i className='ri-arrow-right-wide-line pt-2 px-2'></i>
              <span>Faq's</span>
            </div>

            <div className='my-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
              <div className='border hover:border-secondary cursor-pointer hover:text-secondary transition-all rounded-md py-2 px-4 flex items-center justify-center gap-3'>
                <i className='bi bi-box text-2xl text-black'></i>
                <h2 className='text-2xl GolosText'>General</h2>
              </div>

              <div className='border hover:border-secondary cursor-pointer hover:text-secondary transition-all rounded-md py-2 px-4 flex items-center justify-center gap-3'>
                <i className='bi bi-cart3 text-2xl text-black'></i>
                <h2 className='text-2xl GolosText'>Returns</h2>
              </div>

              <div className='border hover:border-secondary cursor-pointer hover:text-secondary transition-all rounded-md py-2 px-4 flex items-center justify-center gap-3'>
                <i className='bi bi-gift text-2xl text-black'></i>
                <h2 className='text-2xl GolosText'>Gifts</h2>
              </div>

              <div className='border hover:border-secondary cursor-pointer hover:text-secondary transition-all rounded-md py-2 px-4 flex items-center justify-center gap-3'>
                <i className='bi bi-currency-dollar text-2xl text-black'></i>
                <h2 className='text-2xl GolosText'>Refunds</h2>
              </div>

              <div className='border hover:border-secondary cursor-pointer hover:text-secondary transition-all rounded-md py-2 px-4 flex items-center justify-center gap-3'>
                <i className='bi bi-credit-card text-2xl text-black'></i>
                <h2 className='text-2xl GolosText'>Payments</h2>
              </div>

              <div className='border hover:border-secondary cursor-pointer hover:text-secondary transition-all rounded-md py-2 px-4 flex items-center justify-center gap-3'>
                <i className='bi bi-truck text-2xl text-black'></i>
                <h2 className='text-2xl GolosText'>Shipping</h2>
              </div>
            </div>

            <div className='mt-5'>
              <Image
                src={faqImg}
                alt="faq-img"
                className='w-full h-full rounded-2xl'
              />
            </div>
          </div>
        </div>

        <div className="space-y-1 w-full lg:w-1/2 py-10 px-5 lg:px-[8%]">
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
    </>
  )
}

export default Faqs