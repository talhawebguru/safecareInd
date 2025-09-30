"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/Logo.png";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const MainNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // <-- Add this line

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mainNavVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
  };

  const mobileMenuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.section
        className="bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] h-20 !flex items-center justify-center relative z-40" // Added relative z-40
        initial="hidden"
        animate="visible"
        variants={mainNavVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between h-full">
          {/* Mobile: Hamburger */}
          <div className="flex lg:hidden items-center">
            <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
              {isMobileMenuOpen ? (
                <RxCross1 size={28} />
              ) : (
                <RxHamburgerMenu size={28} />
              )}
            </button>
          </div>
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <Link href="/" className="flex items-center">
              <Image
                src={Logo}
                alt="logo"
                width={157}
                height={51}
                className="h-10 w-36 sm:w-44 object-contain"
                priority
                quality={100}
              />
            </Link>
          </div>
          {/* Desktop Nav */}
          <nav className="!hidden lg:!block">
            <ul className="flex items-center gap-8 text-[#323232] text-base font-normal font-inter">
              <li>
                <Link href="/" className={`hover:text-[#02c8b0] cursor-pointer ${pathname === "/" ? "text-[#02c8b0]" : ""}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={`hover:text-[#02c8b0] cursor-pointer ${pathname === "/about" ? "text-[#02c8b0]" : ""}`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className={`hover:text-[#02c8b0] cursor-pointer ${pathname === "/products" ? "text-[#02c8b0]" : ""}`}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className={`hover:text-[#02c8b0] cursor-pointer ${pathname === "/gallery" ? "text-[#02c8b0]" : ""}`}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/careers" className={`hover:text-[#02c8b0] cursor-pointer ${pathname === "/careers" ? "text-[#02c8b0]" : ""}`}>
                  Careers
                </Link>
              </li>
            </ul>
          </nav>
          {/* Shop Now Button */}
          <div className="flex items-center gap-6">
            <button className="px-[26px] py-2.5 bg-gradient-to-b from-[#0898a3] to-[#00d3b3] flex justify-center items-center cursor-pointer rounded-[5px]">
              <span className="text-white text-base font-medium font-inter">
                Shop Now
              </span>
            </button>
          </div>
        </div>
      </motion.section>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMobileMenu} // Close on overlay click
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 lg:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex justify-between items-center mb-8">
              <Link
                href="/"
                className="flex items-center"
                onClick={toggleMobileMenu}
              >
                <Image
                  src={Logo}
                  alt="logo"
                  width={120} // Slightly smaller for mobile menu
                  height={40}
                  className="h-8 w-40 object-contain"
                />
              </Link>
              <button onClick={toggleMobileMenu} aria-label="Close mobile menu">
                <RxCross1 size={24} />
              </button>
            </div>
            <motion.nav
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <ul className="flex flex-col gap-4 text-[#323232] text-base font-normal font-inter">
                <motion.li variants={mobileLinkVariants} className="py-2 border-b border-gray-200">
                  <Link href="/" className={`hover:text-[#02c8b0] cursor-pointer block ${pathname === "/" ? "text-[#02c8b0]" : ""}`} onClick={toggleMobileMenu}>
                    Home
                  </Link>
                </motion.li>
                <motion.li variants={mobileLinkVariants} className="py-2 border-b border-gray-200">
                  <Link href="/about" className={`hover:text-[#02c8b0] cursor-pointer block ${pathname === "/about" ? "text-[#02c8b0]" : ""}`} onClick={toggleMobileMenu}>
                    About Us
                  </Link>
                </motion.li>
                <motion.li variants={mobileLinkVariants} className="py-2 border-b border-gray-200">
                  <Link href="/products" className={`hover:text-[#02c8b0] cursor-pointer block ${pathname === "/products" ? "text-[#02c8b0]" : ""}`} onClick={toggleMobileMenu}>
                    Products
                  </Link>
                </motion.li>
                <motion.li variants={mobileLinkVariants} className="py-2 border-b border-gray-200">
                  <Link href="/gallery" className={`hover:text-[#02c8b0] cursor-pointer block ${pathname === "/gallery" ? "text-[#02c8b0]" : ""}`} onClick={toggleMobileMenu}>
                    Gallery
                  </Link>
                </motion.li>
                <motion.li variants={mobileLinkVariants} className="py-2">
                  <Link href="/careers" className={`hover:text-[#02c8b0] cursor-pointer block ${pathname === "/careers" ? "text-[#02c8b0]" : ""}`} onClick={toggleMobileMenu}>
                    Careers
                  </Link>
                </motion.li>
              </ul>
              {/* Shop Now Button */}
              <div className="flex items-center gap-6">
                <button className="px-[26px] py-2.5 w-full mt-5 bg-gradient-to-b from-[#0898a3] to-[#00d3b3] flex justify-center items-center cursor-pointer rounded-[5px]">
                  <span className="text-white text-base font-medium font-inter">
                    Shop
                  </span>
                </button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainNav;
