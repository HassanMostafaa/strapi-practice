"use client";

import React from "react";
import { IGenHeader } from "@/types/IGenTypes";
import Button from "@/component/atoms/button/Button";
import { InlineSvg } from "@/component/atoms/inline-svg/InlineSvg";
import Link from "next/link";

type IProps = {
  locale: string;
  items?: IGenHeader["items"];
};

export const HeaderDesktopMenu: React.FC<IProps> = ({ items, locale }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="max-md:hidden flex gap-2 items-center">
      {items.map((item) =>
        item?.label ? (
          <Link key={item.id} href={item.href ?? "/"} locale={locale}>
            <Button
              variant="ghost"
              className={`bg-background-tertiary! hover:bg-background/70! py-1! ${
                !item.startIcon?.url && !item.endIcon?.url && "py-2.5!"
              } ${item.endIcon?.url && "pe-1!"} ${
                item?.startIcon?.url && "ps-1!"
              }`}
              startIcon={
                item.startIcon?.url ? (
                  <InlineSvg
                    url={`${process.env.NEXT_PUBLIC_API_URL}${item.startIcon.url}`}
                    className="rounded-full size-5"
                  />
                ) : null
              }
              endIcon={
                item.endIcon?.url ? (
                  <InlineSvg
                    url={`${process.env.NEXT_PUBLIC_API_URL}${item.endIcon.url}`}
                    className="w-5 h-5"
                  />
                ) : null
              }
            >
              {item.label}
            </Button>
          </Link>
        ) : null,
      )}
    </div>
  );
};
