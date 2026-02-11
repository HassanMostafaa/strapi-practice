import {
  IGenComponentMoleculesAllServicesSection,
  IGenEnum_Componentmoleculescard_Variant,
} from "@/types/IGenTypes";
import { FunctionComponent } from "react";
import { SectionHeader } from "../section-header/SectionHeader";
import { getAllServices } from "@/services/content/getAllServices";
import { getLocale } from "next-intl/server";
import { Card } from "../card/Card";
import Pagination from "../pagination/Pagination";
import { redirect } from "next/navigation";
import RichTextRenderer from "@/component/atoms/rich-text-renderer/RichTextRenderer";

const NUMBER_OF_ITEMS_FETCHED = 6;

export const AllServicesSection: FunctionComponent<
  IGenComponentMoleculesAllServicesSection & { searchParams: { page?: string } }
> = async ({
  itemsCallToAction,
  subtitle,
  title,
  searchParams,
  paginationDetailsText,
  emptyState,
}) => {
  const locale = await getLocale();
  const pageNumber = Number(searchParams?.page ?? 1);

  const { services, pageInfo } = await getAllServices({
    locale,
    pagination: {
      page: pageNumber,
      pageSize: NUMBER_OF_ITEMS_FETCHED,
    },
  });

  const from = (pageNumber - 1) * NUMBER_OF_ITEMS_FETCHED + 1;
  const to = pageInfo
    ? Math.min(pageNumber * NUMBER_OF_ITEMS_FETCHED, pageInfo.total)
    : 0;
  const total = pageInfo ? pageInfo.total : 0;

  const paginationDetailsIntegrated = paginationDetailsText
    .replace("{{from}}", from.toString())
    .replace("{{to}}", to.toString())
    .replace("{{total}}", total.toString());

  if (!pageInfo || pageNumber > pageInfo?.pageCount) {
    redirect("?page=1");
  }

  return (
    <div id="services-container" className="flex flex-col gap-4">
      {(title || subtitle) && (
        <SectionHeader
          {...{ title, subtitle }}
          action={
            paginationDetailsText ? (
              <p className="text-muted font-bold text-xs md:text-lg">
                {paginationDetailsIntegrated}
              </p>
            ) : null
          }
        />
      )}

      {services && services?.length && services?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [@media(min-width:1500px)]:grid-cols-4 gap-3">
          {services?.map((svs, ix: number) =>
            svs && svs?.slug ? (
              <Card
                key={`${svs?.slug?.replaceAll("/", "-")}-${ix}`}
                title={svs?.title}
                subtitle={svs?.subtitle}
                media={svs?.thumbnailImage}
                button={{
                  label: itemsCallToAction ?? "",
                  href: svs?.slug ?? "",
                  ariaLabel: svs?.title ?? "",
                  id: `svs-${svs?.slug}-call-to-action`,
                  endIcon: null,
                  isNewTab: false,
                  startIcon: null,
                }}
                variant={IGenEnum_Componentmoleculescard_Variant?.Contained}
              />
            ) : null,
          )}
        </div>
      ) : (
        <RichTextRenderer
          className="py-20 lg:text-lg text-center"
          content={emptyState}
        />
      )}

      {pageInfo && pageInfo.total > NUMBER_OF_ITEMS_FETCHED && (
        <Pagination
          currentPage={pageNumber}
          total={pageInfo.total}
          pageSize={NUMBER_OF_ITEMS_FETCHED}
          scrollToId="services-container"
        />
      )}
    </div>
  );
};
