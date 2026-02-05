"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/component/atoms/button/Button";

interface PaginationProps {
  currentPage: number;
  total: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  total,
  pageSize,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize);
  const [expandedDots, setExpandedDots] = useState<"start" | "end" | null>(
    null,
  );

  const getPageNumbers = () => {
    const pages: (number | "dots")[] = [1];

    if (totalPages <= 7) {
      for (let i = 2; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    if (currentPage <= 4) {
      for (let i = 2; i <= 5; i++) pages.push(i);
      pages.push("dots");
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push("dots");
      for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push("dots");
      for (let i = currentPage - 2; i <= currentPage + 2; i++) pages.push(i);
      pages.push("dots");
      pages.push(totalPages);
    }

    return pages;
  };

  const getHiddenPages = (position: "start" | "end") => {
    if (position === "start") {
      return Array.from(
        { length: Math.min(5, currentPage - 3) },
        (_, i) => i + 2,
      );
    }
    return Array.from(
      { length: Math.min(5, totalPages - currentPage - 2) },
      (_, i) => currentPage + 3 + i,
    );
  };

  const handlePageClick = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
      setExpandedDots(null);
    }
  };

  const pages = getPageNumbers();
  const dotsCount = { start: 0, end: 0 };

  return (
    <div className="flex items-center gap-1.5">
      <Button
        variant="square"
        size="sm"
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      <AnimatePresence mode="popLayout">
        {pages.map((page, index) => {
          if (page === "dots") {
            const isStart = index === 1;
            const position = isStart ? "start" : "end";
            const key = isStart
              ? `dots-start-${++dotsCount.start}`
              : `dots-end-${++dotsCount.end}`;
            const isExpanded = expandedDots === position;

            return (
              <div key={key} className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="square"
                    size="sm"
                    onClick={() =>
                      setExpandedDots(isExpanded ? null : position)
                    }
                  >
                    ...
                  </Button>
                </motion.div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 flex gap-1 bg-slate-800 p-2 rounded-lg border border-gray-200 shadow-xl z-10"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {getHiddenPages(position).map((hiddenPage) => (
                        <motion.div
                          key={hiddenPage}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.15 }}
                        >
                          <Button
                            variant="square"
                            size="sm"
                            onClick={() => handlePageClick(hiddenPage)}
                          >
                            {hiddenPage}
                          </Button>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          const isActive = page === currentPage;
          return (
            <motion.div
              key={page}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              layout
            >
              <Button
                variant={"square"}
                size="sm"
                className={`${isActive ? "bg-slate-600! text-white!" : ""}`}
                onClick={() => handlePageClick(page)}
              >
                {page}
              </Button>
            </motion.div>
          );
        })}
      </AnimatePresence>

      <Button
        variant="square"
        size="sm"
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
