"use client";
import { IGenComponentMoleculesSearchResults } from "@/types/IGenTypes";

import ApolloClientProvider from "@/services/graphql/client";
import { SearchResultsSection } from "./SearchResultsSection";

export const SearchResults = (props: IGenComponentMoleculesSearchResults) => {
  return (
    <ApolloClientProvider>
      <SearchResultsSection {...props} />
    </ApolloClientProvider>
  );
};
