import { TextMediaSection } from "@/component/molecules/text-media-section/TextMediaSection";
import { HeroSection } from "@/component/organisms/hero-section/HeroSection";
import { IGenPageSectionsDynamicZone, Maybe } from "@/types/IGenTypes";

function renderSectionByType(section: IGenPageSectionsDynamicZone) {
  switch (section.__typename) {
    case "ComponentOrganismsHeroSection":
      return <HeroSection {...section} />;

    case "ComponentMoleculesTextMediaSection":
      return <TextMediaSection {...section} />;

    case "ComponentOrganismsCardsSwiperSection":
      return <div>Cards Swiper Section</div>;

    default:
      return <div>{section.__typename} - Unimplemented Section</div>;
  }
}

export const Page: React.FC<{
  sections: Maybe<Maybe<IGenPageSectionsDynamicZone>[]>;
  slug: string;
}> = ({ sections, slug }) => {
  if (!sections || sections.length === 0) {
    return <div>No sections available for this page.</div>;
  }
  return (
    <div className="flex flex-col gap-3">
      {sections?.map((section, ix: number) =>
        section && section?.__typename ? (
          <div key={`${slug}-${section.__typename}-${ix}`}>
            {renderSectionByType(section)}
          </div>
        ) : (
          <></>
        ),
      )}
    </div>
  );
};
