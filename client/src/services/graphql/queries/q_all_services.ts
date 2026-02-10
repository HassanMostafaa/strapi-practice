import { f_pagination_connection_page_info } from "./../fragments/f_pagination_connection_page_info";
import { f_item_service_teaser } from "./../fragments/dynamic-sections/f_service";
import { gql } from "@apollo/client";

export const q_all_services = gql`
  ${f_pagination_connection_page_info}
  ${f_item_service_teaser}
  query q_all_services(
    $pagination: PaginationArg
    $locale: I18NLocaleCode
    $sort: [String]
  ) {
    services_connection(pagination: $pagination, locale: $locale, sort: $sort) {
      nodes {
        ...f_item_service_teaser
      }
      pageInfo {
        ...f_pagination_connection_page_info
      }
    }
  }
`;
