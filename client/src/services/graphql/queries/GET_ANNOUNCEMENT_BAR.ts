import { gql } from "@apollo/client";

export const GET_ANNOUNCEMENT_BAR = gql`
  query announcementBar {
    announcementBar {
      content
    }
  }
`;
