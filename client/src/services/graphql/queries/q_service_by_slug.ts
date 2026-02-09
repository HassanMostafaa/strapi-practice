import { gql } from "@apollo/client";

export const q_service_by_slug = gql`
  query q_service_by_slug(
    $filters: ServiceFiltersInput
    $locale: I18NLocaleCode
  ) {
    services(filters: $filters, locale: $locale) {
      title
      subtitle
      slug
    }
  }
`;
