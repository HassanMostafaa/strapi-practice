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
    <div className="p-2 bg-background min-h-screen relative text-foreground md:p-4 flex gap-2 lg:gap-3 xl:gap-3 flex-col lg:p-6 xl:p-8">
      {announcementBar?.text && <AnnouncementBar {...announcementBar} />}

      {header && <Header {...header} theme={theme} />}

      <div className="flex-1">{children}</div>

      {footer && <Footer {...footer} />}
    </div>
  );
};
