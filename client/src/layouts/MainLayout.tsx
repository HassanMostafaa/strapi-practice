import { getLocale } from "next-intl/server";
import { ITheme } from "@/stores/ui/useThemeStore";
import { FunctionComponent, PropsWithChildren } from "react";
import { Header } from "@/component/molecules/header/Header";
import { getLayoutProps } from "@/services/content/getLayoutProps";
import { AnnouncementBar } from "@/component/molecules/announcement-bar/AnnouncementBar";
import { Footer } from "@/component/molecules/footer/Footer";

export const MainLayout: FunctionComponent<
  PropsWithChildren & { theme: ITheme }
> = async ({ children, theme }) => {
  const locale = await getLocale();

  // HEADER / FOOTER / ANNOUNCMENT BAR ...
  const { header, footer, announcementBar } =
    (await getLayoutProps(locale)) || {};

  return (
    <div className="min-h-screen relative text-foreground flex gap-2 lg:gap-3 xl:gap-3 flex-col p-2">
      {announcementBar?.text && <AnnouncementBar {...announcementBar} />}

      {header && <Header {...header} theme={theme} locale={locale} />}

      <div className="flex-1">{children}</div>

      {footer && <Footer {...footer} />}
    </div>
  );
};
