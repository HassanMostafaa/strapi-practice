import { AllServicesSection } from "@/component/molecules/all-services-section/AllServicesSection";
import { ServicesTeaserSection } from "@/component/molecules/services-teaser-section/ServicesTeaserSection";
import { TextMediaSection } from "@/component/molecules/text-media-section/TextMediaSection";
import { CardsSwiperSection } from "@/component/organisms/cards-swiper-section/CardsSwiperSection";
import { HeroSection } from "@/component/organisms/hero-section/HeroSection";
import { IGenPageSectionsDynamicZone, Maybe } from "@/types/IGenTypes";

function renderSectionByType(
  section: IGenPageSectionsDynamicZone,
  searchParams: { page?: string },
) {
  switch (section.__typename) {
    case "ComponentOrganismsHeroSection":
      return <HeroSection {...section} />;

    case "ComponentMoleculesTextMediaSection":
      return <TextMediaSection {...section} />;

    case "ComponentOrganismsCardsSwiperSection":
      return <CardsSwiperSection {...section} />;
    case "ComponentMoleculesServicesTeaser":
      return <ServicesTeaserSection {...section} />;
    case "ComponentMoleculesAllServicesSection":
      return <AllServicesSection {...section} searchParams={searchParams} />;
    default:
      return <div>{section.__typename} - Unimplemented Section</div>;
  }
}

export const Page: React.FC<{
  sections: Maybe<Maybe<IGenPageSectionsDynamicZone>[]>;
  slug: string;
  searchParams: { page?: string };
}> = ({ sections, slug, searchParams }) => {
  if (!sections || sections.length === 0) {
    return <div>No sections available for this page.</div>;
  }
  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      {sections?.map((section, ix: number) =>
        section && section?.__typename ? (
          <div key={`${slug}-${section.__typename}-${ix}`}>
            {renderSectionByType(section, searchParams)}
          </div>
        ) : (
          <></>
        ),
      )}
    </div>
  );
};
