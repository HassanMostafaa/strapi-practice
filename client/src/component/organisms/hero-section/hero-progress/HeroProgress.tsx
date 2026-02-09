"use client";

import { FunctionComponent, useEffect, useState } from "react";

interface HeroProgressProps {
  duration: number; // in ms
  resetTrigger: number; // can be currentIndex
  size?: number; // optional, default 24px
  color?: string; // optional border color
}

export const HeroProgress: FunctionComponent<HeroProgressProps> = ({
  duration,
  resetTrigger,
  size = 24,
  color = "var(--color-primary)",
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      if (percent < 100) {
        requestAnimationFrame(step);
      }
    };

    // start animation asynchronously to avoid synchronous setState
    const raf = requestAnimationFrame(() => step(performance.now()));

    return () => cancelAnimationFrame(raf);
  }, [resetTrigger, duration]);

  return (
    <div
      className="relative rounded-full overflow-hidden"
      style={{
        width: size,
        height: size,
        border: `2px solid ${color}`,
      }}
    >
      <div
        className="absolute inset-0.5 rounded-full"
        style={{
          background: `conic-gradient(${color} ${progress * 3.6}deg, transparent 0deg)`,
        }}
      />
    </div>
  );
};
