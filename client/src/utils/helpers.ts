import { rtlLocales } from "../../i18n/rounting";

/**
 * Checks if the given locale is Right-To-Left (RTL).
 *
 * @param {string} locale The locale to check.
 * @returns {boolean} True if the locale is RTL, false otherwise.
 */
export function isRTL(locale: string) {
  return rtlLocales.includes(locale);
}

/**
 * Sets a cookie with the given name and value that expires after the specified number of days.
 * @param {string} name The name of the cookie.
 * @param {string} value The value of the cookie.
 * @param {number} days The number of days until the cookie expires.
 */
export function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; path=/; expires=${expires}; sameSite=lax`;
}

/**
 * Fetches an SVG from a given URL and returns the raw SVG markup.
 *
 * @throws {Error} If the fetch request fails.
 *
 * @param {string} url The URL of the SVG to fetch.
 * @returns {Promise<string>} The raw SVG markup.
 */
export async function fetchSvg(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch SVG");
  return await res.text(); // returns raw SVG markup
}

/**
 * Scrolls to the given target element (or to the top of the page if target is "top").
 * The scrolling behavior can be set to "smooth" or "instant".
 * The offset can be used to account for sticky headers, for example.
 *
 * @param {string} target The ID of the target element, or "top" to scroll to the top of the page.
 * @param {{behavior?: ScrollBehavior, offset?: number}} [options] Optional parameters.
 * @returns {void}
 */
export function scrollToTarget(
  target: "top" | string,
  options: {
    behavior?: ScrollBehavior;
    offset?: number; // useful if you have sticky headers
  } = {},
) {
  if (typeof window === "undefined") return;

  const { behavior = "smooth", offset = 100 } = options;

  if (target === "top") {
    window.scrollTo({
      top: 0,
      behavior,
    });
    return;
  }

  const element = document.getElementById(target);

  if (!element) return;

  const elementTop = element.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: elementTop - offset,
    behavior,
  });
}

interface FormatDateOptions {
  date: string | Date;
  locale: string;
  variant?: "fullDate" | "dateOnly" | "timeOnly";
  timeZone?: string;
}
export function formatDate({
  date,
  locale,
  variant = "fullDate",
  timeZone = "UTC",
}: FormatDateOptions): string {
  const baseOptions: Intl.DateTimeFormatOptions = {
    timeZone,
  };

  const formats: Record<
    "fullDate" | "dateOnly" | "timeOnly",
    Intl.DateTimeFormatOptions
  > = {
    fullDate: {
      ...baseOptions,
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    },
    dateOnly: {
      ...baseOptions,
      year: "numeric",
      month: "long",
      day: "numeric",
    },
    timeOnly: {
      ...baseOptions,
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    },
  };

  return new Intl.DateTimeFormat(locale, formats[variant]).format(
    new Date(date),
  );
}
