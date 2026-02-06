import { gql } from "@apollo/client";
import { f_media } from "./f_media";

export const f_seo = gql`
  ${f_media}
  fragment f_seo on ComponentSeoMetaData {
    description
    id
    longNavigationName
    ogDescription
    ogImage {
      ...f_media
    }
    ogTitle
    shortNavigationName
    title
  }
`;
