"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import ProductTabs from "./ProductTabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import { fetchSingleProduct } from "@/app/services/api"; // Commented out - will integrate Strapi later
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import productsData from "@/app/data/products.json";

const SingleProduct = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Find product by prdID from local JSON
        const foundProduct = productsData.products.find(
          (p) => p.prdID === productId
        );

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.error("Product not found");
        }

        // Commented out Strapi API integration - will integrate later
        // const data = await fetchSingleProduct(productId);
        // setProduct(data);
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
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-5 md:py-10 mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
            {/* Skeleton for Product Images */}
            <div className="flex flex-col">
              <Skeleton height={400} />
            </div>

            {/* Skeleton for Product Information */}
            <div className="flex flex-col">
              <Skeleton width={150} height={30} />
              <Skeleton width={300} height={40} className="mt-2" />
              <div className="flex items-center mt-2 gap-4">
                <Skeleton width={100} height={20} />
                <Skeleton width={100} height={20} />
              </div>
              <Skeleton width={200} height={30} className="mt-4" />
              <Skeleton count={3} className="mt-8" />
              <Skeleton width="100%" height={1} className="my-6" />
              <Skeleton count={4} height={20} />
              <Skeleton width="100%" height={1} className="my-6" />
              <Skeleton width={150} height={40} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!product) {
    return (
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-5 md:py-10 mt-5">
          <div className="text-center">
            <h2 className="text-2xl font-medium font-poppins text-[#1e1e1e]">
              Product not found
            </h2>
          </div>
        </div>
      </section>
    );
  }

  const {
    prdName,
    description,
    catName,
    brand,
    price,
    isAvailable,
    imageUrl,
    prdID,
    rating,
    reviews,
    specifications,
  } = product;

  const truncatedDescription =
    description && description.length > 220
      ? `${description.substring(0, 220)}...`
      : description || "No description available";

  const thumbnails = imageUrl ? [imageUrl] : ["/images/placeholder.png"];

  return (
    <>
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-5 md:py-10 mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
            {/* Product Images */}
            <div className="flex flex-col">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="w-full aspect-square md:aspect-auto md:h-[400px] lg:h-[500px] bg-[#f7f7f7] mb-3 rounded-lg"
              >
                {thumbnails.map((thumb, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <Image
                        src={thumb}
                        alt={`${prdName} image ${idx + 1}`}
                        width={400}
                        height={500}
                        className="object-contain max-h-full"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Product Information */}
            <div className="flex flex-col">
              <div className="text-[#1e1e1e] text-xl font-normal font-inter uppercase tracking-wide">
                {catName}
              </div>
              <h1 className="text-[#1e1e1e] text-2xl md:text-[32px] font-medium font-poppins leading-normal mt-2">
                {prdName}
              </h1>
              <div className="flex items-center mt-3">
                <AiFillStar size={20} className="text-[#ffc831]" />
                <span className="ml-2 text-[#1e1e1e] text-sm font-light font-poppins leading-none tracking-wide">
                  {rating || "4.5"} ({reviews || 10} Reviews)
                </span>
                <span className="ml-6 text-[#1a9452] text-sm font-medium font-poppins leading-none tracking-wide">
                  {isAvailable ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              <div className="mt-4">
                <span className="text-[#079FA5] text-3xl font-semibold font-poppins">
                  ${price || "0.00"}
                </span>
              </div>
              <p className="text-[#464646] text-base font-normal font-inter leading-relaxed mt-6">
                {truncatedDescription}
              </p>
              <div className="w-full h-px bg-[#d2d2d2] my-6"></div>
              <div className="grid grid-cols-1 gap-y-2">
                <div className="text-[#464646] text-base font-medium font-inter leading-normal">
                  <span className="font-semibold">SKU:</span> {prdID}
                </div>
                <div className="text-[#464646] text-base font-medium font-inter leading-normal">
                  <span className="font-semibold">Category:</span> {catName}
                </div>
                <div className="text-[#464646] text-base font-medium font-inter leading-normal">
                  <span className="font-semibold">Brand:</span> {brand || "SafeCare"}
                </div>
                {specifications && (
                  <>
                    {specifications.material && (
                      <div className="text-[#464646] text-base font-medium font-inter leading-normal">
                        <span className="font-semibold">Material:</span>{" "}
                        {specifications.material}
                      </div>
                    )}
                    {specifications.packaging && (
                      <div className="text-[#464646] text-base font-medium font-inter leading-normal">
                        <span className="font-semibold">Packaging:</span>{" "}
                        {specifications.packaging}
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="w-full h-px bg-[#d2d2d2] my-6"></div>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <button className="flex items-center gap-2 bg-[#079FA5] hover:bg-[#068a8f] transition-colors rounded px-6 py-3 text-white text-base font-medium font-poppins">
                  <BsCart3 size={18} />
                  Add To Cart
                </button>
                <div className="flex items-center">
                  <span className="text-[#464646] text-base font-normal font-inter leading-normal mr-3">
                    Share:
                  </span>
                  <div className="flex">
                    <a
                      href="#"
                      className="w-12 h-[46px] flex items-center justify-center bg-[#f4f4f4] hover:bg-[#079FA514] transition-colors border-r border-[#b6b6b6]/20"
                      aria-label="Share on Facebook"
                    >
                      <FaFacebookF size={16} className="text-[#626262]" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-[46px] flex items-center justify-center bg-[#f4f4f4] hover:bg-[#079FA514] transition-colors border-r border-[#b6b6b6]/20"
                      aria-label="Share on Twitter"
                    >
                      <BsTwitterX size={16} className="text-[#626262]" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-[46px] flex items-center justify-center bg-[#f4f4f4] hover:bg-[#079FA514] transition-colors border-r border-[#b6b6b6]/20"
                      aria-label="Share on Instagram"
                    >
                      <IoLogoInstagram size={16} className="text-[#626262]" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-[46px] flex items-center justify-center bg-[#f4f4f4] hover:bg-[#079FA514] transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <FaLinkedinIn size={16} className="text-[#626262]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductTabs description={description} specifications={specifications} />
      </section>
    </>
  );
};

export default SingleProduct;
