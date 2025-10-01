"use client";
import React, { useEffect, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { IoChevronForward, IoChevronDown } from "react-icons/io5";
// import { fetchCategories } from "@/app/services/api"; // Commented out - will integrate Strapi later
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import categoriesData from "@/app/data/categories.json";

const FilterSidebar = ({ selectedCategories, setSelectedCategories }) => {
  console.log("[FilterSidebar] selectedCategories prop:", selectedCategories); // Expect: ["49"]
  const [openCategory, setOpenCategory] = useState(true);
  const [openBrands, setOpenBrands] = useState(true);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [openSubcategories, setOpenSubcategories] = useState({});
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 300));
        setCategories(categoriesData.categories || []);

        // Commented out Strapi API integration - will integrate later
        // const res = await fetchCategories();
        // setCategories(res.data || []);
      } catch (e) {
        console.error("Error loading categories:", e);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, []);

  const toggleSubcategory = (categoryId) => {
    setOpenSubcategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const handleCategoryChange = (value) => {
    if (value === "all") {
      setSelectedCategories(["all"]);
    } else {
      setSelectedCategories((prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev.filter((v) => v !== "all"), value]
      );
    }
  };

  // Dummy brands for now
  const brands = [
    { label: "All", value: "all" },
    { label: "Brand 1", value: "brand-1" },
    { label: "Brand 2", value: "brand-2" },
    { label: "Brand 3", value: "brand-3" },
  ];

  const handleBrandChange = (value) => {
    if (value === "all") {
      setSelectedBrands(["all"]);
    } else {
      setSelectedBrands((prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev.filter((v) => v !== "all"), value]
      );
    }
  };

  return (
    <aside className="w-full">
      {/* Category */}
      <div className="my-6">
        <button
          className="flex items-center justify-between w-full text-[#1e1e1e] text-base font-medium font-['Inter'] mb-2"
          onClick={() => setOpenCategory((v) => !v)}
          type="button"
        >
          <span>Category</span>
          {openCategory ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
        </button>
        {openCategory && (
          <div>
            {loading ? (
              <>
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div key={idx} className="py-2">
                    <Skeleton height={20} width={180} />
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className="flex items-center">
                  <label className="flex flex-1 items-center gap-2 py-1 cursor-pointer text-[#1e1e1e] text-[15px] font-normal font-['Inter']">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes("all")}
                      onChange={() => handleCategoryChange("all")}
                      className="accent-[#1e1e1e] w-4 h-4"
                    />
                    All
                  </label>
                </div>
                {categories.map((cat) => (
                  <div key={cat.id} className="flex flex-col">
                    <div className="flex items-center">
                      <label className="flex flex-1 items-center gap-2 py-1 cursor-pointer text-[#1e1e1e] text-[15px] font-normal font-['Inter']">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(String(cat.id))}
                          onChange={() => handleCategoryChange(String(cat.id))}
                          className="accent-[#1e1e1e] w-4 h-4"
                        />
                        {cat.name}
                      </label>
                      {console.log(`[FilterSidebar] Checkbox for cat.id=${cat.id} checked:`, selectedCategories.includes(cat.id))}
                      {cat.subcategories && cat.subcategories.length > 0 && (
                        <button
                          type="button"
                          onClick={() => toggleSubcategory(cat.id)}
                          className="p-1 focus:outline-none"
                          aria-label={openSubcategories[cat.id] ? "Collapse" : "Expand"}
                        >
                          {openSubcategories[cat.id] ? (
                            <IoChevronDown size={16} />
                          ) : (
                            <IoChevronForward size={16} />
                          )}
                        </button>
                      )}
                    </div>
                    {cat.subcategories && cat.subcategories.length > 0 && openSubcategories[cat.id] && (
                      <div className="ml-6 mt-1">
                        {cat.subcategories.map((sub) => (
                          <label
                            key={sub.id}
                            className="flex items-center gap-2 py-1 cursor-pointer text-[#1e1e1e] text-[15px] font-normal font-['Inter']"
                          >
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(String(sub.id))}
                              onChange={() => handleCategoryChange(String(sub.id))}
                              className="accent-[#1e1e1e] w-4 h-4"
                            />
                            {sub.name}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        )}
        <hr className="my-3 border-[#e5e5e5]" />
      </div>
    </aside>
  );
};

export default FilterSidebar;