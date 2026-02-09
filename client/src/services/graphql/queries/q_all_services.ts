import { gql } from "@apollo/client";

export const q_all_services = gql`
  query q_all_services($pagination: PaginationArg, $locale: I18NLocaleCode) {
    services_connection(pagination: $pagination, locale: $locale) {
      pageInfo {
        total
      }
      nodes {
        slug
      }
    }
  }
`;
