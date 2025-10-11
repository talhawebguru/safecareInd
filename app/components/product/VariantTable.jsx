"use client";
import React from "react";

const VariantTable = ({ variants = [] }) => {
  if (!variants || variants.length === 0) return null;

  const [sortBy, setSortBy] = React.useState("ref_code");
  const [ascending, setAscending] = React.useState(true);

  const sorted = React.useMemo(() => {
    const copy = [...variants];
    copy.sort((a, b) => {
      const va = (a?.[sortBy] || "").toString().toLowerCase();
      const vb = (b?.[sortBy] || "").toString().toLowerCase();
      if (va < vb) return ascending ? -1 : 1;
      if (va > vb) return ascending ? 1 : -1;
      return 0;
    });
    return copy;
  }, [variants, sortBy, ascending]);

  // Split into two approximately equal columns
  const mid = Math.ceil(sorted.length / 2);
  const left = sorted.slice(0, mid);
  const right = sorted.slice(mid);

  const Header = () => (
    <div className="grid grid-cols-[120px_1fr] text-[11px] sm:text-xs font-semibold text-teal-700 uppercase tracking-wide">
      <button
        className="text-left pl-3 hover:text-teal-900 flex items-center gap-1"
        onClick={() => {
          setAscending(sortBy === "ref_code" ? !ascending : true);
          setSortBy("ref_code");
        }}
      >
        Cat No
        <span className="text-[10px] opacity-70">{sortBy === "ref_code" ? (ascending ? "▲" : "▼") : ""}</span>
      </button>
      <button
        className="text-left pl-3 hover:text-teal-900 flex items-center gap-1"
        onClick={() => {
          setAscending(sortBy === "description" ? !ascending : true);
          setSortBy("description");
        }}
      >
        Description
        <span className="text-[10px] opacity-70">{sortBy === "description" ? (ascending ? "▲" : "▼") : ""}</span>
      </button>
    </div>
  );

  const Table = ({ data }) => (
    <div className="w-full">
      <Header />
      <div className="mt-1 space-y-1">
        {data.map((row, idx) => (
          <div
            key={row.id || row.ref_code || idx}
            className={`grid grid-cols-[120px_1fr] text-[13px] sm:text-sm items-center ${
              idx % 2 === 0 ? "bg-teal-50" : "bg-teal-50/40"
            }`}
          >
            <div className="px-3 py-2 font-semibold text-slate-700">{row.ref_code}</div>
            <div className="px-3 py-2 text-slate-700">{row.description}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Table data={left} />
      <Table data={right} />
    </div>
  );
};

export default VariantTable;