import React from "react";
import Link from "next/link";

const Hero = ({ categoryName = null, subcategoryName = null }) => {
  // Determine display title
  const displayTitle = subcategoryName || categoryName || "All Products";
  
  return (
    <>
      <section className="h-72 bg-slate-100 flex flex-col items-center justify-center gap-10">
        <h1 className="text-center justify-start text-neutral-900 text-5xl font-medium font-roboto">
          {displayTitle}
        </h1>
        <div className="text-center justify-start text-neutral-900 text-2xl font-normal font-roboto">
          <Link href="/" className="hover:text-[#079FA5] transition-colors">Home</Link>
          {" / "}
          <Link href="/product" className="hover:text-[#079FA5] transition-colors">Products</Link>
          {!categoryName && !subcategoryName && (
            <>
              {" / "}
              <span className="text-[#079FA5]">All</span>
            </>
          )}
          {categoryName && (
            <>
              {" / "}
              <span className="text-[#079FA5]">{categoryName}</span>
            </>
          )}
          {subcategoryName && (
            <>
              {" / "}
              <span className="text-[#079FA5]">{subcategoryName}</span>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Hero;
