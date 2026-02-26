"use client";

import { InlineSvg } from "@/component/atoms/inline-svg/InlineSvg";
import { IGenComponentMoleculesSearchResults } from "@/types/IGenTypes";
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const SearchResults: FunctionComponent<
  IGenComponentMoleculesSearchResults
> = ({ searchInput, emptyStateText, initialStateText }) => {
  // init render logic
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const searchQuery = searchParams?.get("q");

  // user search logic
  const [searchInputValue, setSearchInputValue] = useState("");
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleSubmit = useCallback(() => {
    router.push(pathname + "?" + createQueryString("q", searchInputValue));
  }, [searchInputValue, pathname, createQueryString, router]);

  return (
    <div className="flex flex-col gap-4">
      <SearchInput
        searchInput={searchInput}
        value={searchInputValue}
        onChange={setSearchInputValue}
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

const SearchInput = ({
  value,
  onChange,
  onSubmit,
  searchInput,
}: {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  searchInput: IGenComponentMoleculesSearchResults["searchInput"] | undefined;
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (value) onSubmit();
    }
  };

  return (
    <div className="relative w-full lg:w-3/4 mx-auto h-fit">
      {searchInput?.startIcon && (
        <InlineSvg
          className="absolute start-3 top-1/2 cursor-pointer flex justify-center hover:text-primary hover:scale-105 transition-all duration-300 active:scale-90 items-center -translate-y-1/2"
          url={`${process.env.NEXT_PUBLIC_API_URL}${searchInput.startIcon.url}`}
        />
      )}

      <input
        type="text"
        placeholder={searchInput?.placeholderText ?? "Search here..."}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className={`border-2 border-border rounded-2xl focus:outline focus:outline-primary w-full block mx-auto p-3 ${
          searchInput?.endIcon && "pe-10"
        } ${searchInput?.startIcon && "ps-10"} ${
          !searchInput?.endIcon && !searchInput?.startIcon && "px-3"
        }`}
      />

      {searchInput?.endIcon && (
        <button
          type="button"
          onClick={() => {
            if (value) onSubmit();
          }}
          className="absolute end-3 top-1/2 cursor-pointer flex justify-center hover:text-primary hover:scale-105 transition-all duration-300 active:scale-90 items-center -translate-y-1/2"
        >
          <InlineSvg
            className="size-5"
            url={`${process.env.NEXT_PUBLIC_API_URL}${searchInput.endIcon.url}`}
          />
        </button>
      )}
    </div>
  );
};
