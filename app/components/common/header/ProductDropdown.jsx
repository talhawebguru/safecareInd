"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { fetchCategories } from "@/app/services/api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { IoChevronDown } from "react-icons/io5";

const ProductDropdown = ({ pathname }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const handleMouseEnter = async () => {
    setIsOpen(true);
    
    // Only fetch categories if we haven't loaded them yet
    if (!hasLoaded && !loading) {
      setLoading(true);
      try {
        const response = await fetchCategories();
        setCategories(response.data || []);
        setHasLoaded(true);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.15,
      }
    },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Desktop Product Link */}
      <div className="hidden lg:flex items-center cursor-pointer">
        <Link 
          href="/product" 
          className={`hover:text-[#02c8b0] cursor-pointer flex items-center gap-1 ${
            pathname === "/product" ? "text-[#02c8b0]" : ""
          }`}
        >
          Product
          <IoChevronDown 
            size={16} 
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </Link>
      </div>

      {/* Dropdown Menu - Desktop Only */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-[0px_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 min-w-[280px] max-w-[320px] z-50 hidden lg:block"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="p-6">
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-[#1e1e1e] text-lg font-semibold font-inter mb-1">
                  Our Products
                </h3>
                <p className="text-[#666] text-sm font-inter">
                  Explore our comprehensive range
                </p>
              </div>

              {/* Categories List */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-1"
              >
                {loading ? (
                  // Skeleton Loading
                  <>
                    {[...Array(4)].map((_, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="p-3 rounded-md"
                      >
                        <Skeleton height={20} width="100%" />
                      </motion.div>
                    ))}
                  </>
                ) : (
                  // Categories
                  categories.map((category) => (
                    <motion.div
                      key={category.id}
                      variants={itemVariants}
                    >
                      <Link
                        href={`/product?category=${category.slug || category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block p-3 rounded-md text-[#323232] hover:bg-[#f8fcfc] hover:text-[#02c8b0] transition-all duration-200 group"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium font-inter">
                            {category.name}
                          </span>
                          <div className="w-1 h-1 bg-[#02c8b0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                        </div>
                        {category.description && (
                          <p className="text-xs text-[#666] mt-1 line-clamp-1">
                            {category.description}
                          </p>
                        )}
                      </Link>
                    </motion.div>
                  ))
                )}
              </motion.div>

              {/* View All Link */}
              <motion.div
                variants={itemVariants}
                className="mt-4 pt-4 border-t border-gray-100"
              >
                <Link
                  href="/product"
                  className="flex items-center justify-between text-[#02c8b0] hover:text-[#0898a3] transition-colors duration-200 group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-sm font-semibold font-inter">
                    View All Products
                  </span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDropdown;