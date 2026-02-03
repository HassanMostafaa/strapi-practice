"use client";
import { useState } from "react";
import Pagination from "./Pagination";

export const PaginationWrapper = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <div>
      <h3>Testing pagination component</h3>
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        pageSize={4}
        total={200}
      />
    </div>
  );
};
