"use client";
import React, { useEffect, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { IoChevronForward, IoChevronDown } from "react-icons/io5";
import { fetchCategories } from "@/app/services/api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FilterSidebar = ({ selectedCategories, setSelectedCategories }) => {
  const [openCategory, setOpenCategory] = useState(true);
  const [openSubcategories, setOpenSubcategories] = useState({});
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      try {
        const res = await fetchCategories();
        setCategories(res.data || []);
      } catch (e) {
        console.error("Error loading categories:", e.response?.data || e.message);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, []);

  const toggleSubcategory = (categorySlug) => {
    setOpenSubcategories((prev) => ({
      ...prev,
      [categorySlug]: !prev[categorySlug],
    }));
  };

  const handleCategoryChange = (value) => {
    if (value === "all") {
      setSelectedCategories(["all"]);
    } else {
      setSelectedCategories((prev) => {
        // Remove "all" if it's selected and we're selecting a specific category
        const filteredPrev = prev.filter((v) => v !== "all");
        
        if (filteredPrev.includes(value)) {
          // Remove the category if it's already selected
          const newSelection = filteredPrev.filter((v) => v !== value);
          
          // If no categories are selected, default to "all"
          const result = newSelection.length === 0 ? ["all"] : newSelection;
          return result;
        } else {
          // Add the category to selection
          const result = [...filteredPrev, value];
          return result;
        }
      });
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
                  <div key={cat.slug} className="flex flex-col">
                    <div className="flex items-center">
                      <label className="flex flex-1 items-center gap-2 py-1 cursor-pointer text-[#1e1e1e] text-[15px] font-normal font-['Inter']">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat.slug)}
                          onChange={() => handleCategoryChange(cat.slug)}
                          className="accent-[#1e1e1e] w-4 h-4"
                        />
                        {cat.name}
                      </label>
                      {cat.subcategories && cat.subcategories.length > 0 && (
                        <button
                          type="button"
                          onClick={() => toggleSubcategory(cat.slug)}
                          className="p-1 focus:outline-none"
                          aria-label={openSubcategories[cat.slug] ? "Collapse" : "Expand"}
                        >
                          {openSubcategories[cat.slug] ? (
                            <IoChevronDown size={16} />
                          ) : (
                            <IoChevronForward size={16} />
                          )}
                        </button>
                      )}
                    </div>
                    {cat.subcategories && cat.subcategories.length > 0 && openSubcategories[cat.slug] && (
                      <div className="ml-6 mt-1">
                        {cat.subcategories.map((sub) => (
                          <label
                            key={sub.slug}
                            className="flex items-center gap-2 py-1 cursor-pointer text-[#464646] text-[14px] font-normal font-['Inter']"
                          >
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(sub.slug)}
                              onChange={() => handleCategoryChange(sub.slug)}
                              className="accent-[#079FA5] w-3.5 h-3.5"
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