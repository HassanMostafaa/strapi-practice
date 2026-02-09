import { IGenComponentSeoMetaData, IGenQuery } from "@/types/IGenTypes";
import { client } from "../graphql/client";
import { q_page_seo_by_slug } from "../graphql/queries/q_page_seo_by_slug";
import { EPageType } from "./getPageProps";

export const getPageSeo = async ({
  slug,
  locale,
}: {
  slug: string;
  locale: string;
  pageType: EPageType;
}): Promise<IGenComponentSeoMetaData | null> => {
  try {
    const pageSEOQuery = client.query<Pick<IGenQuery, "pages">>({
      query: q_page_seo_by_slug,
      variables: {
        locale: locale,
        filters: {
          slug: {
            eqi: `/${slug}`,
          },
        },
      },
    });

    const pageSEOResponse = await pageSEOQuery;

    return pageSEOResponse.data?.pages?.[0]?.seo ?? null;
  } catch (error) {
    console.error("Error fetching page data:", error);
    return null;
  }
};
