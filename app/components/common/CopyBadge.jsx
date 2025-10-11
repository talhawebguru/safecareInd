"use client";
import React from "react";
import { IoCopyOutline, IoCheckmarkCircleOutline } from "react-icons/io5";

const CopyBadge = ({ value, label = "Code", className = "" }) => {
  const [copied, setCopied] = React.useState(false);

  if (!value) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // no-op
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title="Copy to clipboard"
      className={`group inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/60 px-3 py-1 text-sm font-semibold text-teal-700 hover:bg-teal-100 hover:border-teal-300 transition-colors ${className}`}
    >
      <span className="opacity-80">{label}:</span>
      <span className="tabular-nums">{value}</span>
      {copied ? (
        <IoCheckmarkCircleOutline className="h-4 w-4 text-emerald-600" />
      ) : (
        <IoCopyOutline className="h-4 w-4 text-teal-700 group-hover:text-teal-800" />
      )}
    </button>
  );
};

export default CopyBadge;
