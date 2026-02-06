"use client";

import { create } from "zustand";

function getInitialTheme(): "light" | "dark" {
  if (typeof document === "undefined") return "light"; // SSR fallback
  const match = document.cookie.match(/theme=(dark|light)/);
  return match ? (match[1] as "light" | "dark") : "light";
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; path=/; expires=${expires}; sameSite=lax`;
}

export type ITheme = "light" | "dark";

interface ThemeState {
  theme: ITheme;
  toggleTheme: () => void;
  setTheme: (theme: ITheme) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: getInitialTheme(),

  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";

      document.documentElement.classList.toggle("dark", newTheme === "dark");

      setCookie("theme", newTheme, 365);

      return { theme: newTheme };
    }),

  setTheme: (theme) =>
    set(() => {
      document.documentElement.classList.toggle("dark", theme === "dark");
      setCookie("theme", theme, 365);
      return { theme };
    }),
}));
