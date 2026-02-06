import { RefObject, useEffect } from "react";

export function useClickOutside(
  ref: React.RefObject<HTMLElement> | RefObject<HTMLDivElement | null>,
  callback: () => void,
  active = true,
) {
  useEffect(() => {
    if (!active) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback, active]);
}
