import Link from 'next/link';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import Image from 'next/image';

const ProductCard = ({
  image,
  title,
  category,
  rating,
  reviews,
  inStock,
  onViewDetails,
}) => {
  return (
    <Link href={onViewDetails}>
      <div className="h-[413px] bg-white rounded-lg relative overflow-hidden flex flex-col cursor-pointer">
        {/* Product Image Section */}
        <div className="relative w-full h-[272px] bg-[#f6f9fb] flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={200} // Explicitly set width
            height={200} // Explicitly set height
            className="object-contain max-h-[200px] max-w-[90%] mx-auto"
          />
          {/* Bag Icon */}
          <div className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow">
            <HiOutlineShoppingBag size={21} className="text-[#1e1e1e]" />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1 px-1 pt-3 pb-2 flex flex-col">
          {/* Category */}
          <div className="uppercase text-[#1e1e1e] text-base font-normal font-inter tracking-wide">
            {category || 'Unknown Category'}
          </div>
          {/* Title */}
          <div
            className="text-[#1e1e1e] text-lg font-medium font-poppins leading-normal mt-1 line-clamp-2"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              WebkitLineClamp: 2,
            }}
          >
            {title}
          </div>
          {/* Rating, Reviews, Stock */}
          <div className="flex items-center mt-2 mb-1">
            <AiFillStar size={18} className="text-[#ffc831] mr-1" />
            <span className="text-[#1e1e1e] text-xs font-light font-poppins leading-none tracking-wide">
              {rating || '0.0'} ({reviews || 0} Reviews)
            </span>
            <span className="ml-auto text-[#1a9452] text-xs font-medium font-poppins leading-none tracking-wide">
              {inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>
        {/* View Details Button */}
        <button className="w-full cursor-pointer pl-3 pr-4 py-[11px] bg-[#f4f4f4] rounded-b-lg inline-flex justify-center items-center gap-2 text-center text-[#1e1e1e] text-base font-medium font-poppins capitalize leading-none mt-auto">
          View Details
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;