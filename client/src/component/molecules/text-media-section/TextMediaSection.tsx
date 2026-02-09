import Button from "@/component/atoms/button/Button";
import { NextImage } from "@/component/atoms/next-image/NextImage";
import RichTextRenderer from "@/component/atoms/rich-text-renderer/RichTextRenderer";
import { IGenComponentMoleculesTextMediaSection } from "@/types/IGenTypes";
import React, { FunctionComponent } from "react";

export const TextMediaSection: FunctionComponent<
  IGenComponentMoleculesTextMediaSection
> = ({ title, subtitle, content, button, image }) => {
  return (
    <div className="p-4 flex flex-col bg-background-secondary rounded-4xl lg:flex-row">
      {(title || subtitle || content || button?.label) && (
        <div className="flex flex-col p-4 flex-1 gap-2">
          {title && <p className="text-base lg:text-2xl">{title}</p>}
          {subtitle && (
            <p className="text-xs md:text-ms text-foreground-secondary">
              {subtitle}
            </p>
          )}
          {content && <RichTextRenderer content={content} />}

          {button?.label && (
            <Button variant="outline" className="px-6">
              {button.label}
            </Button>
          )}
        </div>
      )}

      {image?.url && (
        <NextImage
          url={image?.url}
          alt={image?.alternativeText ?? ""}
          priority={false}
          className="rounded-3xl flex-1"
          fill={false}
          width={600}
          height={300}
        />
      )}
    </div>
  );
};
