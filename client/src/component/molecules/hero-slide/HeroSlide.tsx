import { IGenComponentMoleculesHeroSlide } from "@/types/IGenTypes";
import { FunctionComponent } from "react";

export const HeroSlide: FunctionComponent<IGenComponentMoleculesHeroSlide> = ({
  button,
  title,
  subtitle,
  slideMedia,
}) => {
  return <div>{title}</div>;
};
