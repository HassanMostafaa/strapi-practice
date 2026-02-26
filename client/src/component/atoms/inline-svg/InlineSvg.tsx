"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface InlineSvgProps {
  url: string;
  className?: string;
  size?: number;
}

export function InlineSvg({ url, className, size = 20 }: InlineSvgProps) {
  const [svg, setSvg] = useState<string>("");
  const [loading, setLoading] = useState(true); // initialize to true

  useEffect(() => {
    let mounted = true;

    fetch(url)
      .then((res) => res.text())
      .then((rawSvg) => {
        if (!mounted) return;

        const cleanedSvg = rawSvg
          .replace(/\s(width|height)="[^"]*"/g, "")
          .replace("<svg", `<svg class="${className || ""}"`);

        setSvg(cleanedSvg);
        setLoading(false);
      })
      .catch(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [url, className]);

  if (loading) {
    return (
      <span
        className={`inline-block bg-background-tertiary animate-pulse rounded-full`}
        style={{ width: size, height: size }}
      />
    );
  }

  if (!svg) return null;

  return (
    <motion.span
      className={`inline-block ${className || ""}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
