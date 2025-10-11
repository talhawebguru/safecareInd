"use client";
import React from "react";

const KitVariations = ({ variations = [] }) => {
  if (!variations || variations.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {variations.map((kit) => {
        const ref = (kit?.ref_code || "").toString().trim();
        const items = Array.isArray(kit?.kit_items) ? kit.kit_items : [];
        return (
          <div
            key={kit.id || ref}
            className="rounded-md border border-teal-200 bg-white shadow-sm overflow-hidden"
          >
            {/* Card title */}
            <div className="px-4 py-2 border-b border-teal-200 bg-teal-50/60">
              <span className="text-teal-700 font-bold tracking-wide uppercase">
                Cat : {ref}
              </span>
            </div>

            {/* Table header */}
            <div className="grid grid-cols-[1fr_60px] sm:grid-cols-[1fr_80px] text-[11px] sm:text-xs font-semibold text-teal-700 uppercase tracking-wide">
              <div className="px-3 py-2">Description</div>
              <div className="px-3 py-2 text-right">Qty</div>
            </div>

            {/* Items */}
            <div>
              {items.map((it, idx) => (
                <div
                  key={it.id}
                  className={`grid grid-cols-[1fr_60px] sm:grid-cols-[1fr_80px] text-[13px] sm:text-sm items-start ${
                    idx % 2 === 0 ? "bg-teal-50" : "bg-teal-50/40"
                  }`}
                >
                  <div className="px-3 py-2 text-slate-800">
                    {it.item_description}
                  </div>
                  <div className="px-3 py-2 text-right font-semibold text-slate-800">
                    {it.quantity}
                  </div>
                </div>
              ))}
              {items.length === 0 && (
                <div className="px-3 py-3 text-sm text-gray-500">No items listed.</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KitVariations;
