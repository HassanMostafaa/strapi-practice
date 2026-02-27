import { gql } from "@apollo/client";

export const q_search = gql`
  query q_search(
    $pagination: PaginationArg
    $sort: [String]
    $filters: ServiceFiltersInput
    $locale: I18NLocaleCode
  ) {
    services_connection(
      pagination: $pagination
      sort: $sort
      filters: $filters
      locale: $locale
    ) {
      nodes {
        slug
        title
        category
      }
      pageInfo {
        page
        pageCount
        pageSize
        total
      }
    }
  }
`;

// {
//   "pagination": {
//     "page": 1,
//     "pageSize": 10
//   },
//   "filters": {
//     "or": [
//       { "title": { "containsi": "" } },
//       { "slug": { "containsi": "" } },
//       { "subtitle": { "containsi": "" } },
//       { "content": { "containsi": "" } },
//       { "category": {"containsi":""} }
//     ]
//   },
//   "sort": ["createdAt:ASC"],
//   "locale": "en"
// }
