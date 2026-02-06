"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function InlineSvg({
  url,
  className,
}: {
  url: string;
  className?: string;
}) {
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    let mounted = true;

    fetch(url)
      .then((res) => res.text())
      .then((rawSvg) => {
        if (!mounted) return;

        // Remove width/height attributes to allow Tailwind sizing
        const cleanedSvg = rawSvg
          .replace(/\s(width|height)="[^"]*"/g, "")
          .replace("<svg", `<svg class="${className || ""}"`);

        setSvg(cleanedSvg);
      })
      .catch(() => {
        if (mounted) setSvg("");
      });

    return () => {
      mounted = false;
    };
  }, [url, className]);

  if (!svg) return null;

  return (
    <motion.span
      className={`inline-block ${className || ""}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
