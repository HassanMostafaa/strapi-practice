"use client";

import { ITheme, useThemeStore } from "@/stores/ui/useThemeStore";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Button from "../button/Button";
import { useEffect, useState } from "react";

export default function ThemeToggle({ theme }: { theme: ITheme }) {
  const { theme: storeTheme, toggleTheme } = useThemeStore();
  const [isDark, setIsDark] = useState<boolean>(theme === "dark");

  useEffect(() => {
    setTimeout(() => {
      setIsDark(storeTheme === "dark");
    }, 0);
  }, [storeTheme]);

  const iconVariants = {
    initial: { scale: 0.7, opacity: 0, rotate: -20, y: isDark ? -4 : 4 },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: { type: "spring", stiffness: 220, damping: 18, delay: 0.1 },
    },
    exit: {
      scale: 0.7,
      opacity: 0,
      rotate: 20,
      y: isDark ? 4 : -4,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  } satisfies Variants;

  return (
    <Button
      variant="secondary"
      size="square-md"
      onClick={toggleTheme}
      className="relative overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {isDark ? (
            <Sun
              className=" text-foreground-accent drop-shadow-sm"
              strokeWidth={1.8}
            />
          ) : (
            <Moon
              className=" text-foreground-accent drop-shadow-sm"
              strokeWidth={1.6}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
}
