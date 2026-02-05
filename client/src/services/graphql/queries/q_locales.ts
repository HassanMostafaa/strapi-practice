import { gql } from "@apollo/client";

const q_locales = gql`
  query q_locales {
    i18NLocales {
      name
      code
    }
  }
`;

export default q_locales;
