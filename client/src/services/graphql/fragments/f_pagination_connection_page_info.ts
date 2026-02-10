import { gql } from "@apollo/client";

export const f_pagination_connection_page_info = gql`
  fragment f_pagination_connection_page_info on Pagination {
    total
    page
    pageSize
    pageCount
  }
`;
