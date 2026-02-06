"use client";

import Link from "next/link";
// import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import {
  IGenUploadFile,
  Maybe,
  Scalars,
  IGenComponentAtomsButton,
} from "@/types/IGenTypes";
import { InlineSvg } from "@/component/atoms/inline-svg/InlineSvg";

interface HeaderMenuItemProps {
  label: IGenComponentAtomsButton["label"];
  href: string;
  onClick?: () => void;
  startIcon?: Maybe<IGenUploadFile>;
  endIcon?: Maybe<IGenUploadFile>;
  ariaLabel?: Maybe<Scalars["String"]["output"]>;
  target?: "_self" | "_blank" | "_parent" | "_top";
}

export const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({
  label,
  href,
  onClick,
  startIcon,
  endIcon,
  ariaLabel,
  target = "_self",
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      target={target}
      aria-label={ariaLabel || undefined}
      className={`
        flex items-center gap-2 font-bold text-foreground text-lg ps-6 p-3 rounded-4xl
        ${
          isActive
            ? "bg-primary pointer-events-none text-black!"
            : "hover:bg-background-tertiary/80 bg-background-tertiary"
        }
      `}
    >
      {startIcon && (
        <InlineSvg
          url={`${process.env.NEXT_PUBLIC_API_URL}${startIcon.url}`}
          className="w-5 h-5"
        />
      )}
      <span className="flex-1">{label}</span>
      {endIcon && (
        <InlineSvg
          url={`${process.env.NEXT_PUBLIC_API_URL}${endIcon.url}`}
          className="w-5 h-5"
        />
      )}
    </Link>
  );
};
