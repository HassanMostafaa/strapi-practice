"use client";

import { FunctionComponent } from "react";
import { motion } from "motion/react";
import { NextImage } from "@/component/atoms/next-image/NextImage";
import { IGenComponentMoleculesHeroSlide } from "@/types/IGenTypes";
import { useMotionPresets } from "@/hooks/useMotionPresets";
import { HeroSlideContent } from "./HeroSlideContent";

export const HeroSlide: FunctionComponent<IGenComponentMoleculesHeroSlide> = ({
  button,
  title,
  subtitle,
  slideMedia,
  id,
}) => {
  const { fadeIn } = useMotionPresets();

  const hasContent = title || subtitle || button?.label;
  const hasMedia = !!slideMedia?.url;

  if (!hasContent && !hasMedia) return null;

  return (
    <motion.section
      key={id}
      layout
      transition={{ layout: { duration: 0.45, ease: "easeInOut" } }}
      className="relative w-full overflow-hidden rounded-4xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {hasMedia && (
        <motion.div
          {...fadeIn({ delay: 0.2, y: 20 })}
          className="absolute inset-0"
        >
          <NextImage
            url={slideMedia!.url}
            alt={
              slideMedia?.alternativeText ??
              `${title ?? ""}-hero-slide-media-alt`
            }
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      )}

      {hasContent && (
        <div className="relative flex min-h-[60vh] lg:min-h-[75vh] items-end justify-end p-5 lg:p-10">
          <HeroSlideContent title={title} subtitle={subtitle} button={button} />
        </div>
      )}
    </motion.section>
  );
};
