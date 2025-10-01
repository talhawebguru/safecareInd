"use client";
import React, { useState } from "react";

const ProductTabs = ({ description, specifications }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 mt-12 mb-16">
      {/* Tab Headers */}
      <div className="flex flex-wrap border-b border-[#d2d2d2] relative">
        <button
          onClick={() => setActiveTab("description")}
          className={`relative px-5 py-3 text-lg md:text-xl font-medium font-inter transition-colors ${
            activeTab === "description"
              ? "text-[#079FA5]"
              : "text-[#1e1e1e] font-normal hover:text-[#079FA5]"
          }`}
        >
          Description
          {activeTab === "description" && (
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#079FA5]"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab("info")}
          className={`relative px-5 py-3 text-lg md:text-xl font-inter transition-colors ${
            activeTab === "info"
              ? "text-[#079FA5] font-medium"
              : "text-[#1e1e1e] font-normal hover:text-[#079FA5]"
          }`}
        >
          Additional Info
          {activeTab === "info" && (
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#079FA5]"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`relative px-5 py-3 text-lg md:text-xl font-inter transition-colors ${
            activeTab === "reviews"
              ? "text-[#079FA5] font-medium"
              : "text-[#1e1e1e] font-normal hover:text-[#079FA5]"
          }`}
        >
          Reviews (05)
          {activeTab === "reviews" && (
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#079FA5]"></div>
          )}
        </button>
      </div>

      {/* Tab Contents */}
      <div className="mt-8">
        {activeTab === "description" && (
          <div className="text-[#464646] text-base font-normal font-inter leading-relaxed">
            {description || "No description available for this product."}
          </div>
        )}
        {activeTab === "info" && (
          <div className="text-[#464646] text-base font-normal font-inter leading-relaxed">
            {specifications ? (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[#1e1e1e] mb-4">
                  Product Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(specifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex border-b border-[#e5e5e5] pb-2"
                    >
                      <span className="font-semibold text-[#1e1e1e] capitalize min-w-[120px]">
                        {key.replace(/([A-Z])/g, " $1").trim()}:
                      </span>
                      <span className="ml-2">
                        {Array.isArray(value) ? value.join(", ") : value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p>No additional information available for this product.</p>
            )}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="text-[#464646] text-base font-normal font-inter leading-relaxed">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[#1e1e1e] mb-4">
                Customer Reviews
              </h3>
              <div className="bg-[#f7f7f7] p-6 rounded-lg">
                <p className="text-center text-[#626262]">
                  No reviews yet. Be the first to review this product!
                </p>
              </div>
              {/* Placeholder for future review functionality */}
              <div className="mt-6">
                <h4 className="text-base font-semibold text-[#1e1e1e] mb-3">
                  Write a Review
                </h4>
                <p className="text-sm text-[#626262]">
                  Review functionality will be added soon.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
