"use client";

import { HeroSlide } from "@/component/molecules/hero-slide/HeroSlide";
import {
  FunctionComponent,
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { IGenComponentOrganismsHeroSection } from "@/types/IGenTypes";
import { HeroDots } from "./hero-dots/HeroDots";
import { HeroProgress } from "./hero-progress/HeroProgress";

const AUTO_PLAY_DURATON = 7000;

export const HeroSection: FunctionComponent<
  IGenComponentOrganismsHeroSection
> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = slides?.length ?? 0;

  //
  const goTo = useCallback(
    (index: number) => {
      const normalized = (index + total) % total;
      setCurrentIndex(normalized);
    },
    [total],
  );

  const currentSlide = useMemo(
    () => slides?.[currentIndex] ?? null,
    [slides, currentIndex],
  );

  // Auto-swipe every 4 seconds
  useEffect(() => {
    if (total <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, AUTO_PLAY_DURATON);

    return () => clearInterval(interval);
  }, [total, currentIndex]);

  if (!currentSlide) return null;

  return (
    <motion.div className={`relative z-10 ${total > 1 && "mb-8"} w-full`}>
      {/* PROGRESS INDICATOR */}
      {slides && slides?.length > 1 && (
        <div className="absolute top-4 right-4 z-10">
          <HeroProgress
            resetTrigger={currentIndex}
            duration={AUTO_PLAY_DURATON}
          />
        </div>
      )}

      <motion.section className="overflow-hidden">
        <div ref={containerRef} className="relative">
          <AnimatePresence mode="wait">
            <HeroSlide key={currentSlide.id} {...currentSlide} />
          </AnimatePresence>
        </div>
      </motion.section>

      <HeroDots
        total={total}
        currentIndex={currentIndex}
        onChange={goTo}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2"
      />
    </motion.div>
  );
};
