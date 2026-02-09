import { f_card } from "./f_card";
import { f_button } from "./../f_button";
import { f_media } from "./../f_media";
import { gql } from "@apollo/client";

export const f_cards_swiper = gql`
  ${f_media}
  ${f_button}
  ${f_card}
  fragment f_cards_swiper on ComponentOrganismsCardsSwiperSection {
    id
    items {
      ...f_card
    }
    title
    subtitle
    maxColumns
    variant
  }
`;
