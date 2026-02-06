import { f_button } from "./../f_button";
import { f_media } from "./../f_media";
import { gql } from "@apollo/client";

export const f_card = gql`
  ${f_media}
  ${f_button}
  fragment f_card on ComponentMoleculesCard {
    id
    media {
      ...f_media
    }
    title
    subtitle
    button {
      ...f_button
    }
    variant
  }
`;
