"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/component/atoms/button/Button";
import { useState, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { scrollToTarget } from "@/utils/helpers";
import { useEffect, useRef } from "react";

// How many pages to show on EACH side of the currentPage
// Example: 1 number at currentPage 5 → [4, 5, 6] | 2 → [3,4,5,6,7]
const PAGES_VISIBLE_ON_EACH_SIDE_OF_CURRENT = 1;

// Minimum total pages before we start using "..."
const MIN_TOTAL_PAGES_BEFORE_SHOWING_DOTS = 5;

// Maximum pages shown inside the "..." dropdown
const MAX_PAGES_IN_DOTS_DROPDOWN = 6;

interface PaginationProps {
  currentPage: number;
  total: number;
  pageSize: number;
  scrollToId?: string;
}

export default function Pagination({
  currentPage,
  total,
  pageSize,
  scrollToId,
}: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize);
  const [expandedDots, setExpandedDots] = useState<"start" | "end" | null>(
    null,
  );

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const previousPageRef = useRef(currentPage);

  useEffect(() => {
    if (previousPageRef.current !== currentPage) {
      previousPageRef.current = currentPage;

      if (!scrollToId) {
        scrollToTarget("top");
        return;
      }

      const element = document.getElementById(scrollToId);
      if (!element) return;

      scrollToTarget(scrollToId);
    }
  }, [currentPage, scrollToId]);

  const goToPage = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages || page === currentPage) return;

      const params = new URLSearchParams(searchParams.toString());
      params.set("page", String(page));

      router.replace(`${pathname}?${params.toString()}`, {
        scroll: false,
      });

      setExpandedDots(null);
    },
    [router, pathname, searchParams, totalPages, currentPage],
  );

  const getPageNumbers = () => {
    const pages: (number | "dots")[] = [1];

    const totalMiddlePages = PAGES_VISIBLE_ON_EACH_SIDE_OF_CURRENT * 2 + 1;

    const startRangeLimit = 1 + totalMiddlePages;
    const endRangeLimit = totalPages - totalMiddlePages;

    // If total pages are small → show all
    if (totalPages <= MIN_TOTAL_PAGES_BEFORE_SHOWING_DOTS) {
      for (let i = 2; i <= totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }

    // Case 1: User is near the start
    if (currentPage <= startRangeLimit) {
      for (let i = 2; i <= startRangeLimit + 1; i++) {
        pages.push(i);
      }

      pages.push("dots");
      pages.push(totalPages);
    }

    // Case 2: User is near the end
    else if (currentPage >= endRangeLimit) {
      pages.push("dots");

      for (let i = endRangeLimit; i <= totalPages; i++) {
        pages.push(i);
      }
    }

    // Case 3: User is in the middle
    else {
      pages.push("dots");

      const startPage = currentPage - PAGES_VISIBLE_ON_EACH_SIDE_OF_CURRENT;

      const endPage = currentPage + PAGES_VISIBLE_ON_EACH_SIDE_OF_CURRENT;

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      pages.push("dots");
      pages.push(totalPages);
    }

    return pages;
  };

  const getHiddenPages = (position: "start" | "end") => {
    const visibleStart = currentPage - PAGES_VISIBLE_ON_EACH_SIDE_OF_CURRENT;

    const visibleEnd = currentPage + PAGES_VISIBLE_ON_EACH_SIDE_OF_CURRENT;

    // Hidden pages before first "..."
    if (position === "start") {
      const start = 2;
      const end = visibleStart - 1;

      const pages = [];

      for (
        let i = start;
        i <= end && pages.length < MAX_PAGES_IN_DOTS_DROPDOWN;
        i++
      ) {
        pages.push(i);
      }

      return pages;
    }

    // Hidden pages after second "..."
    const start = visibleEnd + 1;
    const end = totalPages - 1;

    const pages = [];

    for (
      let i = start;
      i <= end && pages.length < MAX_PAGES_IN_DOTS_DROPDOWN;
      i++
    ) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getPageNumbers();
  const dotsCount = { start: 0, end: 0 };

  return (
    <div className="flex items-center gap-1.5">
      {/* Previous */}
      <Button
        variant="outline"
        size="square-md"
        disabled={currentPage <= 1}
        className="rounded-xl"
        aria-label="Previous page"
        onClick={() => goToPage(currentPage - 1)}
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
                    variant="outline"
                    size="square-md"
                    className="rounded-xl"
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
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 flex gap-1 bg-background-secondary p-1 py-0.5 rounded-full border-2 border-background-tertiary shadow-xl z-10"
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
                            variant="outline"
                            size="square-md"
                            onClick={() => goToPage(hiddenPage)}
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
                variant={isActive ? "secondary" : "outline"}
                size="square-md"
                className="rounded-xl"
                onClick={() => goToPage(page)}
              >
                {page}
              </Button>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Next */}
      <Button
        variant="outline"
        size="square-md"
        disabled={currentPage >= totalPages}
        className="rounded-xl"
        aria-label="Next page"
        onClick={() => goToPage(currentPage + 1)}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
