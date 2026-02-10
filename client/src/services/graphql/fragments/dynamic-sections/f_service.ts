import { f_media } from "./../f_media";
import { gql } from "@apollo/client";

export const f_item_service = gql`
  ${f_media}

  fragment f_item_service on Service {
    title
    subtitle
    content
    slug
    image {
      ...f_media
    }
    category
    createdAt
    updatedAt
    publishedAt
    locale
  }
`;

export const f_item_service_teaser = gql`
  ${f_media}

  fragment f_item_service_teaser on Service {
    title
    subtitle
    category
    createdAt
    slug
    thumbnailImage {
      ...f_media
    }
  }
`;
