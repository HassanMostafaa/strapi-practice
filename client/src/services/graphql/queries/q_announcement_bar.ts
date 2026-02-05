import { gql } from "@apollo/client";

const q_announcement_bar = gql`
  query AnnouncementBar($locale: I18NLocaleCode) {
    announcementBar(locale: $locale) {
      text
    }
  }
`;
export default q_announcement_bar;
