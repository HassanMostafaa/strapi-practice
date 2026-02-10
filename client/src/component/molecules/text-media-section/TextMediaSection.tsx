import Button from "@/component/atoms/button/Button";
import { NextImage } from "@/component/atoms/next-image/NextImage";
import RichTextRenderer from "@/component/atoms/rich-text-renderer/RichTextRenderer";
import { IGenComponentMoleculesTextMediaSection } from "@/types/IGenTypes";
import { FunctionComponent } from "react";

export const TextMediaSection: FunctionComponent<
  IGenComponentMoleculesTextMediaSection
> = ({ title, subtitle, content, button, image }) => {
  return (
    <div className="p-4 flex flex-col bg-background-secondary rounded-4xl lg:flex-row">
      {(title || subtitle || content || button?.label) && (
        <div className="flex flex-col p-4 flex-1 gap-2">
          {title && <p className="text-xl lg:text-4xl">{title}</p>}
          {subtitle && (
            <p className="text-xs md:text-ms lg:text-lg text-foreground-secondary">
              {subtitle}
            </p>
          )}
          {content && <RichTextRenderer content={content} />}

          {button?.label && (
            <Button
              variant="secondary"
              href={button?.href ?? ""}
              className="px-6 font-bold w-fit"
            >
              {button.label}
            </Button>
          )}
        </div>
      )}

      {image?.url && (
        <div className="relative w-full h-64 lg:h-80 lg:w-1/2">
          <NextImage
            url={image?.url}
            alt={image?.alternativeText ?? ""}
            priority={false}
            className="rounded-3xl object-cover flex-1 "
          />
        </div>
      )}
    </div>
  );
};
