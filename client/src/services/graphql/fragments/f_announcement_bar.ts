import { gql } from "@apollo/client";

export const f_announcement_bar = gql`
  fragment f_announcement_bar on AnnouncementBar {
    text
  }
`;
