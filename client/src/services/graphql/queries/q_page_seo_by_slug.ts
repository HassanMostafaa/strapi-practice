import { f_page_seo } from "./../fragments/dynamic-sections/f_page_seo";
import { gql } from "@apollo/client";

export const q_page_seo_by_slug = gql`
  ${f_page_seo}
  query q_page_seo_by_slug(
    $filters: PageFiltersInput
    $locale: I18NLocaleCode
  ) {
    pages(filters: $filters, locale: $locale) {
      ...f_page_seo
    }
  }
`;
