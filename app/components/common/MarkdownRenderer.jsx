"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

// A minimal, safe markdown renderer with Tailwind typography-like styles
// - GFM support (tables, strikethrough, task lists)
// - Sanitize HTML to avoid XSS; allow basic formatting
// - Optionally render limited raw HTML via rehype-raw after sanitize

const MarkdownRenderer = ({ content = "", className = "" }) => {
  if (!content) return null;

  return (
    <div className={`prose prose-teal max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-2xl md:text-3xl font-bold text-[#1e1e1e]" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-xl md:text-2xl font-semibold text-[#1e1e1e]" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-lg md:text-xl font-semibold text-[#1e1e1e]" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-gray-700 leading-relaxed" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc pl-5 space-y-1 text-gray-700" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal pl-5 space-y-1 text-gray-700" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a className="text-[#079FA5] underline hover:text-[#068891]" {...props} />
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-sm" {...props} />
            </div>
          ),
          th: ({ node, ...props }) => (
            <th className="bg-gray-50 px-3 py-2 text-left font-semibold border-b border-gray-200" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="px-3 py-2 align-top border-b border-gray-100" {...props} />
          ),
          code: ({ inline, className, children, ...props }) => (
            inline ? (
              <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800" {...props}>{children}</code>
            ) : (
              <code className="block p-3 rounded bg-gray-100 text-gray-800 overflow-x-auto" {...props}>{children}</code>
            )
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
