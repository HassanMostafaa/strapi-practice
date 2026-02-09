import { gql } from "@apollo/client";
import { f_media } from "../f_media";

export const f_page_seo = gql`
  ${f_media}
  fragment f_page_seo on Page {
    seo {
      id
      title
      shortNavigationName
      longNavigationName
      description
      ogImage {
        ...f_media
      }
      ogTitle
      ogDescription
    }
  }
`;
