import { f_button } from "./../f_button";
import { f_media } from "./../f_media";
import { gql } from "@apollo/client";

export const f_text_media = gql`
  ${f_media}
  ${f_button}

  fragment f_text_media on ComponentMoleculesTextMediaSection {
    id
    title
    subtitle
    content
    image {
      ...f_media
    }
    button {
      ...f_button
    }
  }
`;
