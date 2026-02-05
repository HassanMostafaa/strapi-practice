import { gql } from "@apollo/client";
import { f_announcement_bar } from "../fragments/f_announcement_bar"; // adjust path

const q_announcement_bar = gql`
  ${f_announcement_bar}

  query AnnouncementBar($locale: I18NLocaleCode) {
    announcementBar(locale: $locale) {
      ...f_announcement_bar
    }
  }
`;

export default q_announcement_bar;
