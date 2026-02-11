import { Page } from "@/layouts/Page";
import { EPageType, getPageProps } from "@/services/content/getPageProps";
import { getPageSeo } from "@/services/content/getPageSeo";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next/types";

type Props = {
  params: { slug?: string[]; locale: string };
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | null> {
  const paramsPromise = await params;
  const slugArray = paramsPromise?.slug;
  const locale = await getLocale();
  const slug = slugArray?.join("/") ?? "home";
  const isServiceRoute =
    slugArray &&
    slugArray?.length &&
    slugArray?.length > 1 &&
    slugArray?.[0] === "services";

  const seo = await getPageSeo({
    slug,
    locale,
    pageType: isServiceRoute ? EPageType.Service : EPageType.Page,
  });

  if (!seo) return null; // or fallback metadata

  const { title, description, ogTitle, ogDescription, ogImage } = seo || {};

  return {
    title,
    description,
    openGraph: {
      title: ogTitle ?? title ?? "",
      description: ogDescription ?? description ?? "",
      images: ogImage?.url
        ? `${process.env.NEXT_PUBLIC_API_URL}${ogImage?.url}`
        : "",
    },
  };
}

export default async function NextjsPage({
  params: promiseParams,
  searchParams: promiseSearchParams,
}: {
  params: { slug: string[] };
  searchParams: { page?: string };
}) {
  const params = await promiseParams;
  const searchParams = await promiseSearchParams;

  const slug = params?.slug?.join("/") ?? "home";
  const isServiceRoute =
    params?.slug?.length > 1 && params?.slug?.[0] === "services";

  const locale = await getLocale();

  const { is404, page } = await getPageProps({
    slug,
    locale,
    pageType: isServiceRoute ? EPageType.Service : EPageType.Page,
  });

  if (is404) {
    notFound();
  }

  return (
    <>
      {page?.__typename === "Service" && "SERVICE PAGE"}
      {page?.__typename === "Page" && page?.sections && (
        <Page
          slug={slug}
          sections={page.sections}
          searchParams={searchParams}
        />
      )}
    </>
  );
}
