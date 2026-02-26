import "../styles/globals.css";
import { cookies } from "next/headers";
import { Italiana } from "next/font/google";
import { getLocale } from "next-intl/server";
import { rtlLocales } from "../i18n/rounting";
import { getMessages } from "next-intl/server";
import { MainLayout } from "@/layouts/MainLayout";
import { NextIntlClientProvider } from "next-intl";
import { ITheme } from "@/stores/ui/useThemeStore";

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"], // Italiana is only 400
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const rtl = rtlLocales.includes(locale);
  const cookieStore = await cookies();
  const cookieTheme = cookieStore.get("theme")?.value || "light";
  const theme: ITheme = cookieTheme === "dark" ? "dark" : "light";

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`bg-background overflow-x-hidden ${theme === "dark" ? "dark" : ""}`}
      dir={rtl ? "rtl" : "ltr"}
    >
      <body className={`${italiana.variable} container mx-auto antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MainLayout theme={theme}>{children}</MainLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
