"use client";

import { motion } from "motion/react";
import Button from "@/component/atoms/button/Button";
import { useMotionPresets } from "@/hooks/useMotionPresets";
import { IGenComponentMoleculesHeroSlide } from "@/types/IGenTypes";

type Props = Pick<
  IGenComponentMoleculesHeroSlide,
  "title" | "subtitle" | "button"
>;

export const HeroSlideContent = ({ title, subtitle, button }: Props) => {
  const { staggerContainer, staggerChild } = useMotionPresets();

  return (
    <motion.div
      {...staggerContainer({})}
      className="
        w-full
        lg:w-1/2
        bg-background/20
        backdrop-blur-xs
        border-2
        border-primary/50
        rounded-2xl
        px-6
        py-10
      "
    >
      {title && (
        <motion.h1
          {...staggerChild({ y: 40 })}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]"
        >
          {title}
        </motion.h1>
      )}

      {subtitle && (
        <motion.p
          {...staggerChild({ y: 30 })}
          className="mt-4 text-base lg:text-lg text-white/75 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {button?.label && (
        <motion.div {...staggerChild({ y: 20 })} className="mt-6">
          <Button variant="primary" size="md" className="px-8 py-3 rounded-xl">
            {button.label}
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
};
