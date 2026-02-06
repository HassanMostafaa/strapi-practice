import { f_media } from "./../f_media";
import { f_button } from "./../f_button";
import { gql } from "@apollo/client";

export const f_hero_slide = gql`
  ${f_media}
  ${f_button}
  fragment f_hero_slide on ComponentMoleculesHeroSlide {
    id
    title
    subtitle
    button {
      ...f_button
    }
    slideMedia {
      ...f_media
    }
  }
`;
