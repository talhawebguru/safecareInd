"use client";
import React, { useEffect, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { IoChevronForward, IoChevronDown } from "react-icons/io5";
import { fetchCategories } from "@/app/services/api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FilterSidebar = ({ selectedCategories, setSelectedCategories }) => {
  console.log("[FilterSidebar] selectedCategories prop:", selectedCategories);
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
        console.error("Error loading categories:", e);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, []);

  const toggleSubcategory = (categoryDocId) => {
    setOpenSubcategories((prev) => ({
      ...prev,
      [categoryDocId]: !prev[categoryDocId],
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
                  <div key={cat.documentId} className="flex flex-col">
                    <div className="flex items-center">
                      <label className="flex flex-1 items-center gap-2 py-1 cursor-pointer text-[#1e1e1e] text-[15px] font-normal font-['Inter']">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat.documentId)}
                          onChange={() => handleCategoryChange(cat.documentId)}
                          className="accent-[#1e1e1e] w-4 h-4"
                        />
                        {cat.name}
                      </label>
                      {cat.subcategories && cat.subcategories.length > 0 && (
                        <button
                          type="button"
                          onClick={() => toggleSubcategory(cat.documentId)}
                          className="p-1 focus:outline-none"
                          aria-label={openSubcategories[cat.documentId] ? "Collapse" : "Expand"}
                        >
                          {openSubcategories[cat.documentId] ? (
                            <IoChevronDown size={16} />
                          ) : (
                            <IoChevronForward size={16} />
                          )}
                        </button>
                      )}
                    </div>
                    {cat.subcategories && cat.subcategories.length > 0 && openSubcategories[cat.documentId] && (
                      <div className="ml-6 mt-1">
                        {cat.subcategories.map((sub) => (
                          <label
                            key={sub.documentId}
                            className="flex items-center gap-2 py-1 cursor-pointer text-[#464646] text-[14px] font-normal font-['Inter']"
                          >
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(sub.documentId)}
                              onChange={() => handleCategoryChange(sub.documentId)}
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