import { rtlLocales } from "../../i18n/rounting";

export function isRTL(locale: string) {
  return rtlLocales.includes(locale);
}

export function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; path=/; expires=${expires}; sameSite=lax`;
}

export async function fetchSvg(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch SVG");
  return await res.text(); // returns raw SVG markup
}
