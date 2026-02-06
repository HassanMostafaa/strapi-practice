import { gql } from "@apollo/client";

// internal page fragments
import { f_seo } from "./f_seo";

// page sections fragments
import { f_hero_section } from "./dynamic-sections/f_hero_section";
import { f_cards_swiper } from "./dynamic-sections/f_cards_swiper";
import { f_text_media } from "./dynamic-sections/f_text_media";

export const f_page = gql`
  ${f_seo}

  ${f_hero_section}
  ${f_cards_swiper}
  ${f_text_media}
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
    }
  }
`;
