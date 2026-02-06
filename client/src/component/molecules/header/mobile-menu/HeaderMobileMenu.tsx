"use client";

import Button from "@/component/atoms/button/Button";
import { LanguageSwitcher } from "@/component/atoms/language-switcher/LanguageSwitcher";
import ThemeToggle from "@/component/atoms/theme-toggle/ThemeToggle";
import { ITheme } from "@/stores/ui/useThemeStore";
import { ListMinus } from "lucide-react";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useClickOutside } from "@/hooks/useClickOutside";
import { HeaderMenuItem } from "./HeaderMenuItem";
import { IGenHeader } from "@/types/IGenTypes";

export const HeaderMobileMenu = ({
  theme,
  items,
}: {
  items: IGenHeader["items"];
  theme: ITheme;
}) => {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -10 },
  };

  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, () => setOpen(false), open);

  return (
    <div className="md:hidden" ref={menuRef}>
      {/* Menu toggle button */}
      <Button
        variant="primary"
        size="square-md"
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        <ListMinus />
      </Button>

      {/* Animated dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute right-0 top-full mt-2 w-full bg-background-secondary rounded-4xl shadow-lg p-2 flex flex-col gap-1"
          >
            {items?.map((item) =>
              item?.label ? (
                <HeaderMenuItem
                  key={item?.id}
                  href={item?.href || "#"}
                  onClick={() => setOpen(false)}
                  label={item.label}
                  startIcon={item?.startIcon}
                  endIcon={item?.endIcon}
                  ariaLabel={item?.ariaLabel}
                  target={item?.isNewTab ? "_blank" : "_self"}
                />
              ) : (
                <></>
              ),
            )}

            {/* Optional: include theme toggle and language switcher */}
            <div className="flex items-center gap-2 justify-end">
              <ThemeToggle theme={theme} />
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
