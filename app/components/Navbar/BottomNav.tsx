"use client"

import Image from "next/image"
import Link from "next/link"
import menuDot from "@/public/assets/Menu-dot.svg"
import { useEffect, useState } from "react"

type NavLink = {
  href: string;
  label: string;
  dropdown?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Shop",
    href: "/UI-Components/Shop",
    dropdown: [
      { label: "Shop", href: "/UI-Components/Shop" },
      { label: "Details", href: "/UI-Components/Shop/123" },
      { label: "Cart", href: "/UI-Components/Pages/Cart" },
      { label: "Wishlist", href: "/UI-Components/Pages/Wishlist" },
      { label: "Checkout", href: "/UI-Components/Pages/Checkout" },
    ]
  },
  {
    label: "Blog",
    href: "/UI-Components/Blog",
    dropdown: [
      { label: "Blog", href: "/UI-Components/Blogs" },
      { label: "Blog Details", href: "/UI-Components/Blog/7" },
    ]
  },
  {
    label: "Pages",
    href: "#",
    dropdown: [
      { label: "About Me", href: "/UI-Components/Pages/About" },
      { label: "Pricing Table", href: "/UI-Components/Pages/Pricing" },
      { label: "Gift voucher", href: "/UI-Components/Pages/GiftVoucher" },
      { label: "Faq", href: "/UI-Components/Pages/Faq" },
      { label: "Login", href: "/UI-Components/Pages/Login" },
      { label: "Registration", href: "/UI-Components/Pages/Registration" },
      { label: "Contact Us", href: "/UI-Components/Pages/Contact" },
    ]
  },
  {
    label: "Contact Us", href: "/UI-Components/Pages/Contact"
  }
]

const BottomNav = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<Record<string, boolean>>({});
  const [isFixed, setIsFixed] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);


  // Función que obtiene los datos de localStorage y actualiza los estados
  const updateCounts = () => {
    const whishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    setWishlistCount(whishlist.length)
    setCartCount(cart.length)
  };

  //Cuando se monta el componente se ejecuta updateCounts
  useEffect(() => {
    updateCounts();
  }, []);

  // Cuando se actualiza el localStorage se ejecuta updateCounts
  useEffect(() => {
    const handler = () => updateCounts();
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("storage", handler);
    }
  }, []);

  // Cada 500ms se ejecuta updateCounts
  useEffect(() => {
    const interval = setInterval(() => updateCounts(), 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => ({
      ...Object.fromEntries(                         // Reconstruye un objeto apartir de la lista que obtiene en Object.keys(prev)
        Object.keys(prev).map((key) => [key, false]) // Obtiene todas las llaves y las establece en false
      ),
      [label]: !prev[label],                         // Cambia el valor de la llave que se le pasa
    }))
  }

  return (
    <div className={`
      w-full bg-white shadow-sm transition-all py-5 duration-500
      ${isFixed ? "fixed top-0 left-0 right-0 z-50 fixed-nav" : ""}
    `}
    >
      <div className="w-full flex items-center justify-between px-[4%] md:px-[8%] lg:px-[5%] xl:px-[10%] 2xl:px-[16%] text-gray-700">
        {/* Destktop logo */}
        <Link
          href="/"
          className={`
            text-4xl lg:text-3xl xl:text-5xl font-bold Audiowide text-black hidden
            ${isFixed ? "lg:flex" : "hidden"}
          `}
        >
          Fashi<span className="text-secondary">Que</span>
        </Link>

        {/* Mobile menu */}
        <Link
          href="/"
          className="text-4xl lg:text-5xl font-bold Audiowide text-black block lg:hidden"
        >
          Fashi<span className="text-secondary">Que</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex lg:space-x-1 xl:space-x-4 2xl:space-x-6 menu-link relative z-40">
          {navLinks.map((link) => (
            link.dropdown ? (
              <div key={link.label} className="relative group">
                <Link href={link.href} className="flex GolosText items-center gap-1 lg:text-sm xl:text-base">
                  {link.label}
                  <Image
                    src={menuDot}
                    alt="Menu Dot"
                  />
                </Link>

                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl p-2 border border-gray-100 rounded-lg min-w-[170px]">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 rounded-md transition-all"
                    >
                      <div className="flex gap-1">
                        <Image
                          src={menuDot}
                          alt="Menu Dot"
                        />
                        <span>{item.label}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.label} href={link.href} className="flex gap-2 GolosText lg:text-sm xl:text-base">
                {link.label}
                <Image
                  src={menuDot}
                  alt="Menu Dot"
                />
              </Link>
            )
          ))}
        </nav>

        {/* Right Icons */}
        <div className="lg:flex items-center gap-3 xl:gap-5 hidden">
          <Link
            href="/UI-Components/Pages/Login"
            className="login-link border-b border-gray-400 GolosText font-semibold hidden xl:block"
          >
            Login / Register
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/UI-Components/Pages/Wishlist" className="relative">
              <i className="bi bi-balloon-heart text-3xl"></i>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link href="/UI-Components/Pages/Cart" className="relative">
              <i className="bi bi-cart3 text-3xl"></i>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/UI-components/Pages/Wishlist" className="relative">
              <i className="bi bi-balloon-heart text-3xl"></i>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link href="/UI-components/Pages/Cart" className="relative">
              <i className="bi bi-cart3 text-3xl"></i>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 mt-3 transition-all duration-500">
          <nav className="flex flex-col px-[4%] py-3 space-y-1">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div
                  key={link.label}
                  className="flex flex-col"
                >
                  <button
                    className="flex justify-between items-center w-full px-4 py-2 rounded-md transition-all"
                    onClick={() => toggleDropdown(link.label)}
                  >
                    <span className="font-bold">{link.label}</span>
                    <i
                      className={`ri-arrow-down-s-line transition-transform ${openDropdown[link.label] ? "rotate-180" : ""}`}
                    ></i>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${openDropdown[link.label] ? "max-h-96" : "max-h-0"}`}
                  >
                    <div className="flex flex-col p-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2 rounded-md transition-all border-b border-gray-300 last:border-b-0"
                        >
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-2 rounded-md transition-all"
                >
                  <span className="font-bold">{link.label}</span>
                </Link>
              )
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

export default BottomNav