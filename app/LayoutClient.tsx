"use client"

import Footer from "@/app/components/Footer/Footer"
import Navbar from "@/app/components/Navbar/Navbar"
import { usePathname } from "next/navigation"

const LayoutClient = ({ children }: { children: React.ReactNode }) => {

  const pathname = usePathname();
  const hideOn = [
    "/UI-Components/Pages/Login",
    "/UI-Components/Pages/Registration"
  ];

  const hideLayout = hideOn.includes(pathname); // Devuelve true si la url esta en el array

  return (
    <>
      {/* Si la url no esta en el array, se muestra el Navbar */}
      {!hideLayout && <Navbar />}
      {children}
      {/* Si la url no esta en el array, se muestra el Footer */}
      {!hideLayout && <Footer />}
    </>
  )
}

export default LayoutClient