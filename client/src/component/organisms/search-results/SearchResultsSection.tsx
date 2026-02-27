"use client";

import { IGenComponentMoleculesSearchResults } from "@/types/IGenTypes";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLazyQuery } from "@apollo/client/react";
import { q_search } from "@/services/graphql/queries/q_search";
import { SearchInput } from "./SearchInput";
import { useLocale } from "next-intl";

interface IPagination {
  page: number;
  pageSize: number;
}

const PAGE_SIZE = 6;
const INITIAL_PAGE_NUMBER = 1;

export const SearchResultsSection: FunctionComponent<
  IGenComponentMoleculesSearchResults
> = ({ searchInput, emptyStateText, initialStateText }) => {
  // init render logic
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const searchQuery = searchParams?.get("q");
  const router = useRouter();
  const locale = useLocale();

  const [pagination, setPagination] = useState<IPagination>({
    page: INITIAL_PAGE_NUMBER,
    pageSize: PAGE_SIZE,
  });

  const searchValue = searchQuery ?? "";

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleChange = (value: string) => {
    router.replace(pathname + "?" + createQueryString("q", value));
  };

  const handleSubmit = () => {};

  const [runSearch, { data, loading, error }] = useLazyQuery(q_search);

  return (
    <div className="flex flex-col gap-4">
      <SearchInput
        searchInput={searchInput}
        value={searchQuery ?? ""}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      {!searchQuery && initialStateText && (
        <p className="text-center text-sm lg:text-2xl font-bold py-20">
          {initialStateText}
        </p>
      )}

      {searchQuery && (
        <p className="text-center text-sm lg:text-2xl font-bold py-20">
          Searching for &quot;{searchQuery}&quot;
        </p>
      )}
    </div>
  );
};
