"use client";
import { usePathname, useRouter } from "next/navigation";
import { locales, defaultLocale } from "../../../../i18n/rounting";
import Button from "../button/Button"; // ← assuming same path as ThemeToggle

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = locales.includes(segments[0])
    ? segments[0]
    : defaultLocale;

  const switchLang = (locale: string) => {
    const newSegments = locales.includes(segments[0])
      ? segments.slice(1)
      : segments;
    const newPath =
      locale === defaultLocale
        ? `/${newSegments.join("/") || ""}`
        : `/${locale}/${newSegments.join("/")}`;
    router.push(newPath || "/");
    router.refresh();
  };

  return (
    <>
      {locales
        .filter((l) => l !== currentLocale)
        .map((locale) => (
          <Button
            variant="secondary"
            size="square-md"
            key={locale}
            onClick={() => switchLang(locale)}
          >
            {locale.toUpperCase()}
          </Button>
        ))}
    </>
  );
};
