"use client";

import { IGenService } from "@/types/IGenTypes";
import { NextImage } from "@/component/atoms/next-image/NextImage";
import { formatDate } from "@/utils/helpers";

interface IServiceHeroProps {
  title: IGenService["title"];
  subtitle: IGenService["subtitle"];
  category: IGenService["category"];
  image: IGenService["image"];
  createdAt: IGenService["createdAt"];
  locale: string;
}

export const ServiceHero = ({
  title,
  subtitle,
  category,
  image,
  createdAt,
  locale,
}: IServiceHeroProps) => (
  <div className="relative overflow-hidden rounded-[2.5rem] bg-background-secondary shadow-lg">
    {image?.url && (
      <div className="absolute inset-0 z-0">
        <NextImage
          url={image.url}
          alt={image?.alternativeText || title || "Service image"}
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/50 to-transparent" />
      </div>
    )}

    {(createdAt || title || subtitle || category) && (
      <div className="relative z-10 flex min-h-[40vw] flex-col justify-end p-6 md:p-10 lg:p-14">
        <div className="flex flex-col gap-4 max-w-3xl bg-background/60 p-4 rounded-2xl backdrop-blur-xs border border-primary/40">
          {createdAt && (
            <div className="text-sm text-foreground-secondary">
              {formatDate({ variant: "fullDate", date: createdAt, locale })}
            </div>
          )}

          {category && (
            <span className="w-fit rounded-full bg-primary/20 border border-primary/80 font-bold px-4 py-1.5 text-sm text-primary">
              {category}
            </span>
          )}

          {title && (
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {title}
            </h1>
          )}

          {subtitle && (
            <p className="text-lg text-justify text-foreground-secondary">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    )}
  </div>
);
