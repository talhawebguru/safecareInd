'use client';
import React from 'react';
import { LuPhone } from 'react-icons/lu';
import { CiMail } from 'react-icons/ci';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'motion/react'; 

const TopNav = () => {
  const topNavVariants = {
    hidden: { y: -48, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className="bg-gradient-to-b from-[#0898a3] to-[#00d3b3] h-12 items-center justify-center !hidden md:!flex"
      initial="hidden"
      animate="visible"
      variants={topNavVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between h-full">
        {/* Left Section */}
        <div className="flex items-center h-full border-x-2 border-white/20 divide-x-2 divide-white/20">
          <div className="flex items-center space-x-2 px-4 h-full">
            <LuPhone className="text-white" />
            <a
              href="tel:+971-2-5067321"
              className="text-white text-base font-normal font-['Inter'] leading-normal"
            >
              (239) 555-0108
            </a>
          </div>
          <div className="flex items-center space-x-2 px-4 h-full">
            <CiMail className="text-white" />
            <a
              href="mailto:info@safecareind.xyz"
              className="text-white text-base font-normal font-['Inter'] leading-normal"
            >
              info@safecareind.xyz
            </a>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex items-center space-x-6 h-full">
          <div className="flex h-full border-x-2 border-white/20 divide-x-2 divide-white/20 bg-white/10">
            <a
              href="https://www.facebook.com/Jurhycommerce"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 flex items-center justify-center"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-white" size={20} />
            </a>
            <a
              href="https://x.com/JurhyEcommerce"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 flex items-center justify-center"
              aria-label="Twitter X"
            >
              <BsTwitterX className="text-white" size={20} />
            </a>
            <div className="w-12 flex items-center justify-center">
              <IoLogoInstagram className="text-white" size={20} />
            </div>
            <div className="w-12 flex items-center justify-center">
              <FaLinkedin className="text-white" size={20} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TopNav;