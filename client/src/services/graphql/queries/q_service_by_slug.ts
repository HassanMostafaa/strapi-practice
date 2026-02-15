import { gql } from "@apollo/client";
import { f_item_service } from "../fragments/dynamic-sections/f_service";

export const q_service_by_slug = gql`
  ${f_item_service}
  query q_service_by_slug(
    $filters: ServiceFiltersInput
    $locale: I18NLocaleCode
  ) {
    services(filters: $filters, locale: $locale) {
      ...f_item_service
    }
  }
`;
