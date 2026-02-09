"use client";

import Button from "@/component/atoms/button/Button";
import { NextImage } from "@/component/atoms/next-image/NextImage";
import { IGenComponentMoleculesHeroSlide } from "@/types/IGenTypes";
import { FunctionComponent, useRef } from "react";
import { motion } from "motion/react";
import { useMotionPresets } from "@/hooks/useMotionPresets";

export const HeroSlide: FunctionComponent<IGenComponentMoleculesHeroSlide> = ({
  button,
  title,
  subtitle,
  slideMedia,
  id,
}) => {
  const { staggerContainer, staggerChild, fadeIn } = useMotionPresets();
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaOnly = !title || !subtitle || !button?.label;

  return (
    <motion.div
      key={id}
      layout
      transition={{ layout: { duration: 0.45, ease: "easeInOut" } }}
      className="flex gap-2 lg:gap-3 xl:gap-4 flex-col lg:flex-row justify-between overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        ref={containerRef}
        className="flex flex-col max-md:min-h-[60vh] lg:min-h-[30vh] lg:flex-row gap-2  w-full lg:gap-3 xl:gap-4"
      >
        {/* TEXT SIDE */}
        {(title || subtitle || button?.label) && (
          <motion.div
            {...staggerContainer({})}
            className="flex bg-background-secondary flex-1  justify-start rounded-4xl p-6 flex-col gap-2 lg:gap-4"
          >
            {title && (
              <motion.p
                {...staggerChild({ y: 0, x: -40 })}
                className="text-4xl md:text-5xl lg:text-8xl"
              >
                {title}
              </motion.p>
            )}
            {subtitle && (
              <motion.p
                {...staggerChild({ y: 0, x: -30 })}
                className="text-sm lg:text-lg text-justify font-medium"
              >
                {subtitle}
              </motion.p>
            )}
            {button?.label && (
              <motion.div {...staggerChild()}>
                <Button variant="primary" size="md" className="px-6 w-fit">
                  {button?.label}
                </Button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* MEDIA SIDE */}
        {slideMedia?.url && (
          <motion.div
            {...fadeIn({ delay: 0.3, y: 20 })}
            className={`relative w-full ${!mediaOnly && "lg:max-w-1/2"} flex-1 rounded-4xl overflow-hidden aspect-3/1 lg:aspect-[2/1.2] max-h-[60vh]`}
          >
            <NextImage
              url={slideMedia.url}
              alt={
                slideMedia?.alternativeText ??
                `${title ?? ""}-hero-slide-media-alt`
              }
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
