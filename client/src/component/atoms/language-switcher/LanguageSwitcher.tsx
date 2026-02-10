"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales } from "../../../../i18n/rounting";
import Button from "../button/Button";
import { useEffect } from "react";

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = locales.includes(segments[0]) ? segments[0] : "en";

  const switchLang = (locale: string) => {
    // Replace the first segment with the new locale
    const newSegments = [...segments];
    if (locales.includes(newSegments[0])) {
      newSegments[0] = locale;
    } else {
      newSegments.unshift(locale);
    }

    const newPath = "/" + newSegments.join("/");
    router.push(newPath);
    router.refresh();
  };

  useEffect(() => {
    router.refresh();
  }, [currentLocale]);

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
