"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "../common/Container";
import VariantTable from "./VariantTable";
import KitVariations from "./KitVariations";
import { AiOutlineWarning } from "react-icons/ai";
import MarkdownRenderer from "../common/MarkdownRenderer";
import { fetchProductBySlug } from "@/app/services/api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SingleProduct = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchProductBySlug(productId);
        if (data) {
          setProduct(data);
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchData();
    }
  }, [productId]);

  if (loading) {
    return (
      <section className="py-12">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Skeleton */}
            <div className="space-y-4">
              <Skeleton height={400} />
              <div className="flex gap-2">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <Skeleton key={idx} height={80} width={80} />
                ))}
              </div>
            </div>
            {/* Content Skeleton */}
            <div className="space-y-4">
              <Skeleton height={30} width="60%" />
              <Skeleton height={20} width="40%" />
              <Skeleton height={60} />
              <Skeleton height={100} />
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="py-12">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Product Not Found
            </h1>
            <p className="text-gray-600">
              The product you're looking for doesn't exist.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  // Process images from Strapi
  const productImages = product.image || [];
  const imageUrls = productImages.map((img) =>
    img.url
      ? `${process.env.NEXT_PUBLIC_API_URL}${img.url}`
      : "/images/category1.png"
  );

  // Fallback to default image if no images
  const displayImages =
    imageUrls.length > 0 ? imageUrls : ["/images/category1.png"];

  return (
    <section className="py-12">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-[#f6f9fb] rounded-lg overflow-hidden">
              <Image
                src={displayImages[selectedImageIndex]}
                alt={product.name}
                fill
                className="object-contain p-8"
                unoptimized={true}
                onError={(e) => {
                  e.currentTarget.src = "/images/category1.png";
                }}
              />
            </div>

            {/* Thumbnail Images */}
            {displayImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {displayImages.map((imageUrl, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative w-20 h-20 bg-[#f6f9fb] rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                      selectedImageIndex === index
                        ? "border-[#079FA5]"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={imageUrl}
                      alt={`${product.name} - Image ${index + 1}`}
                      fill
                      className="object-contain p-2"
                      unoptimized={true}
                      onError={(e) => {
                        e.currentTarget.src = "/images/category1.png";
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category */}
            {product.category && (
              <div className="text-[#079FA5] text-sm font-medium uppercase tracking-wide">
                {product.category.name}
              </div>
            )}

            {/* Product Name + Code */}
            <div className="flex flex-col sm:flex-row lg:flex-col lg:items-start xl:flex-row xl:items-center xl:flex-wrap sm:items-center sm:justify-between gap-3">
              <h1 className="text-3xl lg:text-4xl font-bold text-[#1e1e1e] leading-tight">
                {product.name}
              </h1>
              {product.code && (
                <span className="w-fit inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/60 px-3 py-1 text-sm font-semibold text-teal-700">
                  <span className="opacity-80">Code:</span>
                  <span className="tabular-nums">{product.code}</span>
                </span>
              )}
            </div>

            {/* Short Description */}
            {product.shortDescription && (
              <MarkdownRenderer
                content={product.shortDescription}
              />
            )}

            {/* Subcategories */}
            {product.subcategories && product.subcategories.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#1e1e1e]">
                  Applications:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.subcategories.map((subcat) => (
                    <span
                      key={subcat.id}
                      className="px-3 py-1 bg-[#f6f9fb] text-[#1e1e1e] text-sm rounded-full"
                    >
                      {subcat.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Variants Table placed before CTA */}
            {product.simpleVariants && product.simpleVariants.length > 0 && (
              <div className="mt-6">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-xl font-semibold text-[#1e1e1e]">
                    Available Sizes / Variants
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-teal-500/60 to-transparent" />
                </div>
                <VariantTable variants={product.simpleVariants} />
                <div
                  role="note"
                  className="mt-4 flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700"
                >
                  <AiOutlineWarning
                    aria-hidden
                    className="mt-0.5 h-5 w-5 text-gray-800"
                  />
                  <p className="text-sm">
                    Custom sizes available upon request.
                  </p>
                </div>
              </div>
            )}

            {/* Kit Variations */}
            {product.kit_variations && product.kit_variations.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-xl font-semibold text-[#1e1e1e]">
                    Kit Variations
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-teal-500/60 to-transparent" />
                </div>
                <KitVariations variations={product.kit_variations} />
              </div>
            )}

            {/* Contact CTA */}
            <div className="pt-6 border-t border-gray-200">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#1e1e1e]">
                  Interested in this product?
                </h3>
                <p className="text-gray-600">
                  Contact us for pricing, specifications, and availability.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#079FA5] text-white font-medium rounded-lg hover:bg-[#068891] transition-colors"
                  >
                    Contact Us
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="inline-flex items-center justify-center px-6 py-3 border border-[#079FA5] text-[#079FA5] font-medium rounded-lg hover:bg-[#079FA5] hover:text-white transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        {product.description && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-6">
              Product Details
            </h2>
            <MarkdownRenderer content={product.description} />
          </div>
        )}

        {/* moved variants table higher */}
      </Container>
    </section>
  );
};

export default SingleProduct;
