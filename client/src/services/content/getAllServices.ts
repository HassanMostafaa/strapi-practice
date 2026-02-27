import {
  IGenF_Pagination_Connection_Page_InfoFragment,
  IGenQuery,
  IGenService,
} from "@/types/IGenTypes";
import { client } from "../graphql/client";
import { q_all_services } from "../graphql/queries/q_all_services";

interface IPagination {
  page: number;
  pageSize: number;
}

interface IGetAllServicesReturn {
  services: IGenService[] | null;
  pageInfo: IGenF_Pagination_Connection_Page_InfoFragment | null;
}

export const getAllServices = async ({
  locale,
  pagination,
}: {
  locale: string;
  pagination: IPagination;
}): Promise<IGetAllServicesReturn> => {
  try {
    const getAllServices = await client.query<
      Pick<IGenQuery, "services_connection">
    >({
      query: q_all_services,
      variables: {
        locale,
        pagination,
        sort: ["createdAt:ASC"],
      },
    });

    return {
      services: getAllServices?.data?.services_connection?.nodes || null,
      pageInfo: getAllServices?.data?.services_connection?.pageInfo || null,
    };
  } catch (error) {
    console.error("Error fetching all services:", error);
    return {
      services: null,
      pageInfo: null,
    };
  }
};
