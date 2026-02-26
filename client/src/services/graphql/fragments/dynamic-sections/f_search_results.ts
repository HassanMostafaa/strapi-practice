import { f_media } from "./../f_media";
import { gql } from "@apollo/client";

export const f_search_results = gql`
  ${f_media}
  fragment f_search_results on ComponentMoleculesSearchResults {
    id
    searchInput {
      id
      placeholderText
      defaultValue
      startIcon {
        ...f_media
      }
      endIcon {
        ...f_media
      }
    }
    emptyStateText
    initialStateText
  }
`;
