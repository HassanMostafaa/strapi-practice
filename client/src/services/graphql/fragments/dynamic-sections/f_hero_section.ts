import { gql } from "@apollo/client";
import { f_hero_slide } from "./f_hero_slide";

export const f_hero_section = gql`
  ${f_hero_slide}

  fragment f_hero_section on ComponentOrganismsHeroSection {
    id
    slides {
      ...f_hero_slide
    }
  }
`;
