"use client";

import { IGenHeader } from "@/types/IGenTypes";
import { ITheme } from "@/stores/ui/useThemeStore";
import Button from "@/component/atoms/button/Button";
import { HeaderMobileMenu } from "./mobile-menu/HeaderMobileMenu";
import { HeaderDesktopMenu } from "./desktop-menu/HeaderDesktopMenu";
import ThemeToggle from "@/component/atoms/theme-toggle/ThemeToggle";
import { LanguageSwitcher } from "@/component/atoms/language-switcher/LanguageSwitcher";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type IProps = Pick<IGenHeader, "items" | "logo" | "primaryAction"> & {
  theme: ITheme;
};

export const Header: React.FunctionComponent<IProps> = ({
  items,
  logo,
  primaryAction,
  theme,
}) => {
  const [stuck, setStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: 1.0 }, // fully visible
    );

    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="h-px top-6 absolute" />
      <div
        className={`bg-background-secondary border-background-tertiary sticky z-50 top-4 rounded-full p-1 text-foreground flex items-center justify-between gap-3 transition-all  ${
          stuck ? "shadow-xl border-2" : ""
        }`}
      >
        {logo && (
          <Link href={"/"} className="text-3xl font-normal ms-4">
            {logo}
          </Link>
        )}

        {items && items.length > 0 && <HeaderDesktopMenu items={items} />}

        <div className="flex bg-background-accent p-1 rounded-full items-center gap-1 max-md:hidden">
          {primaryAction && (
            <Button variant="primary">{primaryAction.label}</Button>
          )}
          <ThemeToggle theme={theme} />
          <LanguageSwitcher />
        </div>

        <HeaderMobileMenu theme={theme} items={items} />
      </div>
    </>
  );
};
