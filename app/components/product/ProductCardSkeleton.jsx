"use client";

import React from 'react';
import Skeleton from 'react-loading-skeleton';

const ProductCardSkeleton = () => {
  return (
    <div className="group relative flex flex-col rounded-xl bg-white/95 border border-slate-100 shadow-sm overflow-hidden">
      {/* Image skeleton */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
        <Skeleton 
          height="100%" 
          width="100%" 
          style={{ position: 'absolute', top: 0, left: 0 }}
          borderRadius="0"
        />
      </div>

      {/* Text skeleton */}
      <div className="px-4 pt-4 pb-3 flex flex-col gap-2">
        <div className="space-y-2">
          {/* Title lines */}
          <Skeleton height={16} width="100%" borderRadius={4} />
          <Skeleton height={16} width="75%" borderRadius={4} />
        </div>
      </div>

      {/* View details button skeleton */}
      <div className="mt-auto w-full">
        <Skeleton 
          height={48} 
          width="100%" 
          borderRadius="0 0 12px 12px"
        />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;