import { IGenComponentMoleculesCard } from "@/types/IGenTypes";
import React, { FunctionComponent } from "react";
import Button from "@/component/atoms/button/Button";
import { NextImage } from "@/component/atoms/next-image/NextImage";

export const Card: FunctionComponent<Partial<IGenComponentMoleculesCard>> = ({
  id,
  media,
  title,
  subtitle,
  button,
  variant,
}) => {
  const variantClasses: Record<string, string> = {
    contained: "bg-background-secondary p-4 rounded-[40px]",
    outlined:
      "border border-border dark:border-background-tertiary p-4 rounded-[40px]",
    ghost: "bg-transparent border border-transparent",
  };

  return (
    <div
      key={id}
      className={`flex flex-col  h-full overflow-hidden  gap-2 transition-all duration-300 ${variant ? variantClasses[variant] : variantClasses["contined"]}`}
    >
      {/* Media */}
      {media?.url && (
        <div className="relative w-full h-52 rounded-4xl overflow-hidden">
          <NextImage
            url={media.url}
            alt={media?.alternativeText ?? title ?? "Card media"}
            fill
          />
        </div>
      )}

      {/* Content */}
      {(title || subtitle) && (
        <div className="flex flex-col gap-1">
          {title && <h3 className="text-xl font-bold">{title}</h3>}
          {subtitle && (
            <p className="text-sm line-clamp-3 text-foreground-secondary">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Button */}
      {button?.label && (
        <div className="mt-auto">
          <Button
            variant={variant === "ghost" ? "outline" : "primary"}
            size="sm"
            className="px-6 rounded-2xl!"
            href={button?.href ?? "/"}
          >
            {button.label}
          </Button>
        </div>
      )}
    </div>
  );
};
