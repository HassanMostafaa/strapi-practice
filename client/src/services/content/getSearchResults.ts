import {
  IGenF_Pagination_Connection_Page_InfoFragment,
  IGenQuery,
  IGenService,
} from "@/types/IGenTypes";
import { client } from "../graphql/client";
import { q_search } from "../graphql/queries/q_search";

interface IPagination {
  page: number;
  pageSize: number;
}

interface IGetAllServicesReturn {
  results: IGenService[] | null;
  pageInfo: IGenF_Pagination_Connection_Page_InfoFragment | null;
}

export const getSearchResults = async ({
  locale,
  pagination,
  searchValue,
}: {
  locale: string;
  pagination: IPagination;
  searchValue: string;
}): Promise<IGetAllServicesReturn> => {
  if (!searchValue)
    return {
      results: null,
      pageInfo: null,
    };

  try {
    const getServicesSearchResults = await client.query<
      Pick<IGenQuery, "services_connection">
    >({
      query: q_search,
      variables: {
        locale,
        pagination,
        filters: {
          or: [
            { title: { containsi: searchValue } },
            { slug: { containsi: searchValue } },
            { subtitle: { containsi: searchValue } },
            { content: { containsi: searchValue } },
            { category: { containsi: searchValue } },
          ],
        },
        sort: ["createdAt:ASC"],
      },
    });

    console.log({ getServicesSearchResults });

    return {
      results: null,
      pageInfo: null,
    };
  } catch (error) {
    console.error("Error fetching all results:", error);
    return {
      results: null,
      pageInfo: null,
    };
  }
};

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
