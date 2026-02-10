import { f_button } from "./../f_button";
import { f_item_service_teaser } from "./f_service";
import { gql } from "@apollo/client";

export const f_services_teaser_section = gql`
  ${f_button}
  ${f_item_service_teaser}
  fragment f_services_teaser_section on ComponentMoleculesServicesTeaser {
    id
    title
    subtitle
    services {
      ...f_item_service_teaser
    }
    ViewAllButton {
      ...f_button
    }
  }
`;
