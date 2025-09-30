"use client";
import React from 'react';
import Image from 'next/image';
import FooterLogo from '@/public/images/Logo.png';
import { LuPhone } from 'react-icons/lu';
import { CiMail } from 'react-icons/ci';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from "motion/react"
import Vector1 from "@/public/images/footerVector1.png";
import Vector2 from "@/public/images/footerVector2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.13 * i }
  })
};

const listStagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const iconVariants = {
  rest: { scale: 1, backgroundColor: "white" },
  hover: {
    scale: 1.15,
    backgroundColor: "#c7e7fc",
    transition: { type: "spring", stiffness: 200, damping: 10 }
  }
};

const Footer = () => {
  return (
    <>
      <footer className="bg-[rgba(243,243,243,1)] relative overflow-hidden">
        <Image
          src={Vector1}
          alt="Vector1"
          className="absolute -top-40 -left-36 z-20"
        />
        <Image
          src={Vector2}
          alt="Vector2"
          className="absolute -bottom-10 right-62 z-20"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-30">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={listStagger}
          >
            {/* Logo & Contact */}
            <motion.div variants={fadeUp} custom={1}>
              <div className="flex flex-col items-start justify-start space-y-4 relative">
                <motion.div variants={fadeUp} custom={1.1}>
                  <Image
                    src={FooterLogo}
                    alt="footerLogo"
                    className="object-contain"
                  />
                </motion.div>
                <motion.p
                  className="text-[#333333] text-base font-normal font-inter leading-normal"
                  variants={fadeUp}
                  custom={1.3}
                >
                  We are many variations of the passages available but the majoro have suffered alteration injected.
                </motion.p>
                <motion.div
                  className="flex items-center space-x-2 h-full"
                  variants={fadeUp}
                  custom={1.4}
                >
                  <LuPhone className="text-[#333333]" />
                  <p className="text-[#333333] text-base font-normal font-inter leading-normal">
                    (239) 555-0108
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-2 h-full"
                  variants={fadeUp}
                  custom={1.5}
                >
                  <CiMail className="text-[#333333]" />
                  <p className="text-[#333333] text-base font-normal font-inter leading-normal">
                    info@envisam.xyz
                  </p>
                </motion.div>
              </div>
            </motion.div>
            {/* Quick Links */}
            <motion.div variants={fadeUp} custom={2}>
              <h2 className="text-black text-xl font-medium font-inter leading-loose">
                Quick Links
              </h2>
              <motion.ul
                className="flex flex-col items-start space-y-4 mt-4"
                variants={listStagger}
                initial="hidden"
                animate="visible"
              >
                {["Home", "About Us", "Shop", "Contact Us", "Privacy Policy", "Terms & Conditions"].map((item, idx) => (
                  <motion.li
                    key={item}
                    className="text-[#181818] text-[13px] font-normal font-inter leading-[20.80px]"
                    variants={fadeUp}
                    custom={2.1 + idx * 0.1}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            {/* Browse Category */}
            <motion.div variants={fadeUp} custom={3}>
              <h2 className="text-black text-xl font-medium font-inter leading-loose">
                Browse Category
              </h2>
              <motion.ul
                className="flex flex-col items-start space-y-4 mt-4"
                variants={listStagger}
                initial="hidden"
                animate="visible"
              >
                {[
                  "Medicine",
                  "Medical Equipments",
                  "Beauty Care",
                  "Baby & Mom Care",
                  "Healthcare",
                  "Food & Nutrition",
                  "Medical Supplies"
                ].map((item, idx) => (
                  <motion.li
                    key={item}
                    className=" text-[#181818] text-[13px] font-normal font-inter leading-[20.80px]"
                    variants={fadeUp}
                    custom={3.1 + idx * 0.1}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            {/* Location & Social */}
            <motion.div variants={fadeUp} custom={4}>
              <div className="flex flex-col items-start space-y-4">
                <h2 className="text-black text-xl font-medium font-inter leading-loose">
                  Location
                </h2>
                <motion.p
                  className="text-[#181818] text-[13px] font-normal font-inter leading-[20.80px]"
                  variants={fadeUp}
                  custom={4.1}
                >
                  PPGH+X76 - Kizad - Khalifa Industrial Zone - Abu Dhabi
                </motion.p>
                <div className="flex gap-1 mt-2">
                  {[<FaFacebookF className="text-[#333333]" size={20} />, <BsTwitterX className="text-[#333333]" size={20} />, <IoLogoInstagram className="text-[#333333]" size={20} />, <FaLinkedin className="text-[#333333]" size={20} />].map((Icon, idx) => (
                    <motion.div
                      key={idx}
                      className="w-12 p-3 bg-white flex items-center justify-center rounded transition"
                      variants={iconVariants}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      {Icon}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="h-16 bg-neutral-50 border-t border-[#e6e6e6] relative z-30 flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center flex-wrap justify-between h-full">
            <p className="text-[#1e1e1e] text-sm sm:text-base font-normal font-inter leading-relaxed">
              ©Copyright 2025 SafeCare All Rights Reserved.
            </p>
            <ul className="flex items-center gap-8">
              <li className=" text-[#333333] text-base font-normal font-inter leading-normal">
                Privacy Policy
              </li>
              <li className=" text-[#333333] text-base font-normal font-inter leading-normal">
                Terms & Conditions
              </li>
            </ul>
          </div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;