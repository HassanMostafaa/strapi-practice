"use client";

import { IGenHeader } from "@/types/IGenTypes";
import { ITheme } from "@/stores/ui/useThemeStore";
import Button from "@/component/atoms/button/Button";
import { HeaderMobileMenu } from "./mobile-menu/HeaderMobileMenu";
import { HeaderDesktopMenu } from "./desktop-menu/HeaderDesktopMenu";
import ThemeToggle from "@/component/atoms/theme-toggle/ThemeToggle";
import { LanguageSwitcher } from "@/component/atoms/language-switcher/LanguageSwitcher";

type IProps = Pick<IGenHeader, "items" | "logo" | "primaryAction"> & {
  theme: ITheme;
};

export const Header: React.FunctionComponent<IProps> = ({
  items,
  logo,
  primaryAction,
  theme,
}) => {
  return (
    <div className="bg-background-secondary sticky top-0 rounded-full p-1 text-foreground flex items-center justify-between gap-3">
      {logo && <div className="text-3xl font-normal ms-4">{logo}</div>}

      {items && items?.length > 0 && <HeaderDesktopMenu items={items} />}

      <div className="flex bg-background-accent p-1 rounded-full items-center gap-1 max-md:hidden">
        {primaryAction && (
          <Button variant="primary">{primaryAction.label}</Button>
        )}
        <ThemeToggle theme={theme} />
        <LanguageSwitcher />
      </div>

      <HeaderMobileMenu theme={theme} items={items} />
    </div>
  );
};
