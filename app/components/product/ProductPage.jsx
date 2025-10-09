"use client";
import React, { useState, useEffect } from "react";
import { MdFilterListAlt } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import FilterSidebar from "./FilterSidebar";
import { fetchAllProducts } from "@/app/services/api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductPage = ({ initialCategory, onCategoryChange }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [allProducts, setAllProducts] = useState([]); // Store all products
  const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : ["all"]
  );
  const [currentCategoryName, setCurrentCategoryName] = useState(null);
  const [currentSubcategoryName, setCurrentSubcategoryName] = useState(null);

  const pageSize = 25; // Number of products per page

  // Fetch all products once on component mount
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        const data = await fetchAllProducts();

        // Map Strapi data to component format
        const mappedProducts = data.data.map((product) => {
          // Get first image from the image array
          const firstImage = product.image?.[0];
          const imageUrl = firstImage?.url
            ? `${process.env.NEXT_PUBLIC_API_URL}${firstImage.url}`
            : null;

          return {
            id: product.id,
            documentId: product.documentId,
            prdID: product.slug,
            prdName: product.name,
            catName: product.category?.name || "Uncategorized",
            categorySlug: product.category?.slug || null,
            imageUrl: imageUrl,
            description: product.description,
            shortDescription: product.shortDescription,
          };
        });

        setAllProducts(mappedProducts);
      } catch (error) {
        console.error('Error in ProductPage fetchAllData:', error.response?.data || error.message);
        setAllProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []); // Only run once on mount

  // Filter products based on selected categories
  useEffect(() => {
    if (allProducts.length === 0) {
      return;
    }

    let filtered = [];

    if (selectedCategories.includes("all")) {
      filtered = allProducts;
    } else {
      filtered = allProducts.filter(product => {
        return selectedCategories.includes(product.categorySlug);
      });
    }

    setFilteredProducts(filtered);

    // Calculate pagination
    const totalFiltered = filtered.length;
    const calculatedTotalPages = Math.ceil(totalFiltered / pageSize);
    setTotalPages(calculatedTotalPages);
    setTotalProducts(totalFiltered);

    // Reset to page 1 when filters change
    setCurrentPage(1);

    // Extract category/subcategory names based on selection
    if (!selectedCategories.includes("all") && selectedCategories.length > 0) {
      if (selectedCategories.length === 1) {
        // Single category selected - use the category name from first filtered product
        const firstProduct = filtered[0];
        const categoryName = firstProduct?.catName || null;
        
        setCurrentCategoryName(categoryName);
        setCurrentSubcategoryName(null);

        // Notify parent component about category change
        if (onCategoryChange) {
          onCategoryChange(categoryName, null);
        }
      } else {
        // Multiple categories selected - show "Multiple Categories"
        setCurrentCategoryName("Multiple Categories");
        setCurrentSubcategoryName(null);

        // Notify parent component about multiple category selection
        if (onCategoryChange) {
          onCategoryChange("Multiple Categories", null);
        }
      }
    } else {
      setCurrentCategoryName(null);
      setCurrentSubcategoryName(null);

      // Notify parent component that no category is selected
      if (onCategoryChange) {
        onCategoryChange(null, null);
      }
    }
  }, [selectedCategories, allProducts]); // Run when categories or products change

  // Get current page products
  const getCurrentPageProducts = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);
    return currentProducts;
  };

  // Sync selectedCategories with initialCategory when it changes
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategories([initialCategory]);
      setCurrentPage(1);
    } else {
      setSelectedCategories(["all"]);
      setCurrentPage(1);
    }
  }, [initialCategory]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 3; // Number of buttons to show before and after the current page
    const totalVisibleButtons = maxVisibleButtons * 2 + 1;

    if (totalPages <= totalVisibleButtons) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            className={`w-10 h-10 shadow flex justify-center items-center cursor-pointer ${
              currentPage === i
                ? "!text-[#5248a1] font-bold"
                : "bg-white text-[#554e49]"
            }`}
            aria-label={`Page ${i}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      const startPage = Math.max(1, currentPage - maxVisibleButtons);
      const endPage = Math.min(totalPages, currentPage + maxVisibleButtons);

      if (startPage > 1) {
        buttons.push(
          <button
            key={1}
            className={`w-10 h-10 shadow flex justify-center items-center cursor-pointer ${
              currentPage === 1
                ? "!text-[#5248a1] font-bold"
                : "bg-white text-[#554e49]"
            }`}
            aria-label="Page 1"
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
        );
        if (startPage > 2) {
          buttons.push(
            <span
              key="start-ellipsis"
              className="w-10 h-10 flex justify-center items-center cursor-pointer"
            >
              ...
            </span>
          );
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        buttons.push(
          <button
            key={i}
            className={`w-10 h-10 shadow flex justify-center items-center cursor-pointer ${
              currentPage === i
                ? "!text-[#5248a1] font-bold"
                : "bg-white text-[#554e49]"
            }`}
            aria-label={`Page ${i}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          buttons.push(
            <span
              key="end-ellipsis"
              className="w-10 h-10 flex justify-center items-center cursor-pointer"
            >
              ...
            </span>
          );
        }
        buttons.push(
          <button
            key={totalPages}
            className={`w-10 h-10 shadow flex justify-center items-center cursor-pointer ${
              currentPage === totalPages
                ? "!text-[#5248a1] font-bold"
                : "bg-white text-[#554e49]"
            }`}
            aria-label={`Page ${totalPages}`}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
    }

    return buttons;
  };

  return (
    <>
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-12">
          {/* Mobile Filter Button */}
          <div className="flex justify-end items-center mb-4 lg:hidden">
            <button
              onClick={toggleFilters}
              className="flex items-center gap-1 px-3 py-2 bg-[#f4f4f4] rounded-md text-[#1e1e1e]"
            >
              <FiFilter size={18} />
              <span>Filters</span>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <div
              className={`$${
                showFilters ? "block" : "hidden"
              } lg:block md:flex-1 lg:max-w-[270px] transition-all duration-300 ease-in-out`}
            >
              <div className="flex items-center justify-between gap-2 mb-4 border-b-2 border-[#cccccc] pb-2">
                <div className="flex items-center gap-2">
                  <MdFilterListAlt size={20} />
                  <h3 className="text-[#1e1e1e] text-2xl font-normal font-roboto leading-normal">
                    Filters
                  </h3>
                </div>
                <button className="lg:hidden" onClick={toggleFilters}>
                  <IoCloseOutline size={24} />
                </button>
              </div>
              <FilterSidebar
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
              />
            </div>

            {/* Main Product Grid */}
            <div className="flex-1 lg:flex-3">
              {/* Desktop title */}
              <div className="hidden lg:flex items-center gap-1 mb-4">
                <h2 className="justify-start text-[#121212] text-[28px] font-normal font-roboto">
                  {currentSubcategoryName ||
                    currentCategoryName ||
                    "All Products"}
                </h2>
                <div className="w-14 h-0 outline outline-offset-[-0.50px] outline-[#1e1e1e]"></div>
                <span className="text-[#1e1e1e] text-[15px] font-normal font-roboto leading-normal tracking-wide">
                  {loading ? (
                    <Skeleton width={50} />
                  ) : (
                    `${totalProducts} Results`
                  )}
                </span>
              </div>

              {/* Mobile results count */}
              <div className="flex lg:hidden flex-col gap-2 mb-4">
                <h2 className="text-[#121212] text-[22px] font-normal font-roboto">
                  {currentSubcategoryName ||
                    currentCategoryName ||
                    "All Products"}
                </h2>
                <span className="text-[#1e1e1e] text-[15px] font-normal font-roboto leading-normal tracking-wide">
                  {loading ? (
                    <Skeleton width={50} />
                  ) : (
                    `${totalProducts} Results`
                  )}
                </span>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {loading
                  ? Array.from({ length: 6 }).map((_, index) => (
                      <ProductCardSkeleton key={index} />
                    ))
                  : getCurrentPageProducts().map((product) => (
                      <ProductCard
                        key={product.id}
                        image={product.imageUrl || "/images/category1.png"}
                        title={product.prdName}
                        onViewDetails={`/product/${product.prdID}`}
                      />
                    ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav
                  aria-label="Product navigation"
                  className="flex gap-2 justify-center lg:mt-16 mt-5 lg:mb-20 mb-5"
                >
                  <button
                    className={`w-10 h-10 bg-white text-black shadow flex justify-center items-center ${
                      currentPage === 1
                        ? "cursor-not-allowed opacity-50"
                        : "cursor-pointer"
                    }`}
                    aria-label="Previous page"
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    <FaAngleLeft aria-hidden="true" />
                  </button>

                  {renderPaginationButtons()}

                  <button
                    className={`w-10 h-10 bg-white shadow flex justify-center items-center ${
                      currentPage === totalPages
                        ? "cursor-not-allowed opacity-50"
                        : "cursor-pointer"
                    }`}
                    aria-label="Next page"
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    <FaAngleRight aria-hidden="true" />
                  </button>
                </nav>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
