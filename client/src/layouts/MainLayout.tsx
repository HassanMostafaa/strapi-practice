import { Header } from "@/component/molecules/header/Header";
import { getLayoutProps } from "@/services/content/getLayoutProps";
import { FunctionComponent, PropsWithChildren } from "react";
import { getLocale } from "next-intl/server";
import { AnnouncementBar } from "@/component/molecules/announcement-bar/AnnouncementBar";
import { ITheme } from "@/stores/ui/useThemeStore";

export const MainLayout: FunctionComponent<
  PropsWithChildren & { theme: ITheme }
> = async ({ children, theme }) => {
  const locale = await getLocale();

  // HEADER / FOOTER / ANNOUNCMENT BAR ...
  const { header, footer, announcementBar } =
    (await getLayoutProps(locale)) || {};

  return (
    <div className="p-2 bg-background overflow-auto h-screen  text-foreground md:p-4 flex gap-1 md:gap-2 lg:gap-3 xl:gap-4 flex-col min-h-dvh lg:p-6 xl:p-8">
      {announcementBar?.text && <AnnouncementBar {...announcementBar} />}

      {header && <Header {...header} theme={theme} />}

      <div className="flex-1">{children}</div>
      {footer && <div>Footer here</div>}
    </div>
  );
};
