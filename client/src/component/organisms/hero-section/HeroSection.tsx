import { HeroSlide } from "@/component/molecules/hero-slide/HeroSlide";
import { IGenComponentOrganismsHeroSection } from "@/types/IGenTypes";
import { FunctionComponent } from "react";

export const HeroSection: FunctionComponent<
  IGenComponentOrganismsHeroSection
> = ({ slides }) => {
  if (!slides || slides.length === 0) return null;

  return (
    <div className="border-4 border-red-400">
      {slides.map((slide) => slide && <HeroSlide key={slide?.id} {...slide} />)}
    </div>
  );
};
