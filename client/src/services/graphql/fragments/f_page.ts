import { f_all_services_section } from "./dynamic-sections/f_all_services_section";
import { gql } from "@apollo/client";

// internal page fragments
import { f_seo } from "./f_seo";

// page sections fragments
import { f_text_media } from "./dynamic-sections/f_text_media";
import { f_hero_section } from "./dynamic-sections/f_hero_section";
import { f_cards_swiper } from "./dynamic-sections/f_cards_swiper";
import { f_services_teaser_section } from "./dynamic-sections/f_services_teaser_section";

export const f_page = gql`
  ${f_seo}

  ${f_text_media}
  ${f_hero_section}
  ${f_cards_swiper}
  ${f_all_services_section}
  ${f_services_teaser_section}

  fragment f_page on Page {
    title
    slug
    seo {
      ...f_seo
    }
    sections {
      ...f_hero_section
      ...f_cards_swiper
      ...f_text_media
      ...f_services_teaser_section
      ...f_all_services_section
    }
  }
`;
