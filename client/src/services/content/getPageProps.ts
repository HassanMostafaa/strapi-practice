import { IGenPage, IGenQuery, IGenService } from "@/types/IGenTypes";
import { client } from "../graphql/client";
import { q_page_by_slug } from "../graphql/queries/q_page_by_slug";
import { q_service_by_slug } from "../graphql/queries/q_service_by_slug";

interface IPagePropsReturn {
  page: IGenPage | IGenService | null;
  is404: boolean;
}

export enum EPageType {
  Page,
  Service,
}

export const getPageProps = async ({
  slug,
  locale,
  pageType,
}: {
  pageType: EPageType;
  slug: string;
  locale: string;
}): Promise<IPagePropsReturn> => {
  try {
    // Pick query dynamically
    let query;
    switch (pageType) {
      case EPageType.Service:
        query = q_service_by_slug;
        break;
      case EPageType.Page:
      default:
        query = q_page_by_slug;
        break;
    }

    const pageQuery = client.query<Pick<IGenQuery, "pages" | "services">>({
      query,
      variables: {
        locale: locale,
        filters: {
          slug: {
            eqi: `/${slug}`,
          },
        },
      },
    });

    const pageResponse = await pageQuery;

    const dataKey = pageType === EPageType.Service ? "services" : "pages";

    return {
      page: pageResponse.data?.[dataKey]?.[0] || null,
      is404: !pageResponse.data?.[dataKey]?.[0],
    };
  } catch (error) {
    console.error("Error fetching page data:", error);
    return { page: null, is404: true };
  }
};
