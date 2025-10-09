"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

// Animation variants
const cardVariants = {
  initial: { opacity: 0, y: 24, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  hover: { y: -6, boxShadow: '0 12px 28px -8px rgba(0,0,0,0.12)', transition: { type: 'spring', stiffness: 260, damping: 18 } }
};

const glowVariants = {
  hover: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
  initial: { opacity: 0, scale: 0.9 }
};

const ProductCard = ({ image, title, onViewDetails }) => {
  return (
    <motion.article
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      className="group relative flex flex-col rounded-xl bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 border border-slate-100 shadow-sm overflow-hidden focus-within:ring-2 ring-teal-500/60 transition-colors duration-300"
    >
      {/* Decorative glow */}
      <motion.span
        aria-hidden="true"
        variants={glowVariants}
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-200/40 via-transparent to-teal-300/40 opacity-0 group-hover:opacity-100 mix-blend-overlay" />

      <Link
        href={onViewDetails}
        className="flex flex-1 flex-col outline-none focus-visible:ring-0"
        aria-label={`View details for ${title}`}
      >
        {/* Image wrapper */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] bg-[#f6f9fb] flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            className="w-full h-full"
          >
            <Image
              src={image || '/images/category1.png'}
              alt={title || 'Product image'}
              fill
              sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 270px"
              className="object-cover w-full h-full transition-transform duration-500 ease-out"
              priority={false}
            />
          </motion.div>
          {/* subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Text / title */}
        <div className="px-4 pt-4 pb-3 flex flex-col gap-2">
          <h3 className="text-slate-800 text-base sm:text-lg font-medium font-poppins tracking-tight line-clamp-2 group-hover:text-teal-700 transition-colors">
            {title}
          </h3>
        </div>

        {/* View details bar */}
        <div className="mt-auto w-full">
          <div className="w-full text-center text-sm sm:text-base font-medium font-poppins uppercase tracking-wide bg-slate-100 group-hover:bg-teal-500 group-hover:text-white transition-colors px-4 py-3 rounded-b-xl flex items-center justify-center gap-2">
            <span className="relative">View Details</span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              className="inline-block text-teal-600 group-hover:text-white transition-colors"
              aria-hidden="true"
            >→</motion.span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProductCard;