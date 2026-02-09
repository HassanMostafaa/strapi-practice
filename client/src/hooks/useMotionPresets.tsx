// hooks/useMotionPresets.ts
import type { Variants, Transition } from "motion/react";

type StaggerOptions = {
  delayChildren?: number;
  staggerChildren?: number;
};

type ChildOptions = {
  x?: number;
  y?: number;
  duration?: number;
  ease?: Transition["ease"];
};

type FadeOptions = {
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  ease?: Transition["ease"];
};

// const DEFAULT_EASE: Transition['ease'] = [0.16, 1, 0.3, 1]
const DEFAULT_EASE: Transition["ease"] = "easeInOut";

export const useMotionPresets = () => {
  /**
   * Stagger container: returns full motion props including variants + initial + animate
   */
  const staggerContainer = (opts: StaggerOptions = {}) => {
    const { delayChildren = 0.5, staggerChildren = 0.15 } = opts;

    const variants: Variants = {
      hidden: { opacity: 0, pointerEvents: "none" },
      visible: {
        opacity: 1,
        pointerEvents: "auto",
        transition: { delayChildren, staggerChildren },
      },
    };

    return {
      variants,
      initial: "hidden",
      animate: "visible",
    };
  };

  /**
   * Stagger child: returns just the variants object
   */
  const staggerChild = (opts: ChildOptions = {}) => {
    const { x = 0, y = 6, duration = 0.25, ease = DEFAULT_EASE } = opts;

    const variants: Variants = {
      hidden: { opacity: 0, x, y },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration, ease },
      },
    };

    return { variants };
  };

  /* FadeIn preset: returns initial + animate props directly, ready to spread */
  const fadeIn = (opts: FadeOptions = {}) => {
    const {
      delay = 0,
      duration = 0.32,
      x = 0,
      y = 0,
      ease = DEFAULT_EASE,
    } = opts;

    return {
      initial: { opacity: 0, x, y },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration, delay, ease },
      },
      exit: {
        opacity: 0,
        x,
        y,
        transition: { duration, ease },
      },
    };
  };

  return { staggerContainer, staggerChild, fadeIn };
};
