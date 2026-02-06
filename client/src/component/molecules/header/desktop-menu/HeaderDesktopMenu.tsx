"use client";

import React from "react";
import { IGenHeader } from "@/types/IGenTypes";
import Button from "@/component/atoms/button/Button";
import { InlineSvg } from "@/component/atoms/inline-svg/InlineSvg";

type IProps = {
  items?: IGenHeader["items"];
};

export const HeaderDesktopMenu: React.FC<IProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="max-md:hidden flex gap-2 items-center">
      {items.map((item) =>
        item?.label ? (
          <Button
            key={item.id}
            variant="ghost"
            className="bg-background-tertiary! hover:bg-background/70! p-1! pe-3!"
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
            href={item.href ?? "#"}
          >
            {item.label}
          </Button>
        ) : null,
      )}
    </div>
  );
};
