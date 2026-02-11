import { gql } from "@apollo/client";

export const f_all_services_section = gql`
  fragment f_all_services_section on ComponentMoleculesAllServicesSection {
    id
    itemsCallToAction
    title
    subtitle
    paginationDetailsText
    emptyState
  }
`;
