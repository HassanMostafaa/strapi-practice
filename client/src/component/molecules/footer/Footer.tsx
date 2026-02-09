import RichTextRenderer from "@/component/atoms/rich-text-renderer/RichTextRenderer";
import { IGenFooter } from "@/types/IGenTypes";
import React, { FunctionComponent } from "react";

export const Footer: FunctionComponent<IGenFooter> = ({
  logo,
  title,
  content,
}) => {
  return (
    <div className="bg-background-secondary shadow-sm rounded-3xl p-4 text-foreground flex flex-col items-start justify-start gap-3">
      {logo && (
        <div className="text-3xl font-bold">
          <span className="text-primary">{logo.charAt(0)}</span>
          {logo.slice(1)}
        </div>
      )}

      {title && <p>{title}</p>}

      {content && <RichTextRenderer content={content} />}
    </div>
  );
};
