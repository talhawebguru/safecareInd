"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { fetchCategories } from "@/app/services/api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const MobileProductMenu = ({ pathname, onLinkClick, variants }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const handleToggle = async () => {
    const newExpanded = !isExpanded;
    setIsExpanded(newExpanded);
    
    // Only fetch categories when expanding and if we haven't loaded them yet
    if (newExpanded && !hasLoaded && !loading) {
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

  const submenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
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

  return (
    <motion.li variants={variants} className="py-2 border-b border-gray-200">
      {/* Main Product Link */}
      <div className="flex items-center justify-between">
        <Link 
          href="/product" 
          className={`hover:text-[#02c8b0] cursor-pointer block flex-1 ${
            pathname === "/product" ? "text-[#02c8b0]" : ""
          }`} 
          onClick={onLinkClick}
        >
          Product
        </Link>
        <button
          onClick={handleToggle}
          className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
          aria-label="Toggle product categories"
        >
          {isExpanded ? (
            <IoChevronUp size={16} />
          ) : (
            <IoChevronDown size={16} />
          )}
        </button>
      </div>

      {/* Submenu */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            variants={submenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden"
          >
            <div className="ml-4 mt-3 space-y-2">
              {loading ? (
                // Skeleton Loading
                <>
                  {[...Array(4)].map((_, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      className="py-2"
                    >
                      <Skeleton height={16} width="80%" />
                    </motion.div>
                  ))}
                </>
              ) : (
                // Categories
                categories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={`/product?category=${category.slug || category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block py-2 px-3 text-sm text-[#666] hover:text-[#02c8b0] hover:bg-[#f8fcfc] rounded transition-all duration-200"
                      onClick={onLinkClick}
                    >
                      {category.name}
                    </Link>
                  </motion.div>
                ))
              )}
              
              {/* View All Products Link */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: categories.length * 0.05 + 0.1 }}
                className="pt-2 border-t border-gray-100 mt-2"
              >
                <Link
                  href="/product"
                  className="block py-2 px-3 text-sm text-[#02c8b0] font-medium hover:bg-[#f8fcfc] rounded transition-all duration-200"
                  onClick={onLinkClick}
                >
                  View All Products →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default MobileProductMenu;