import RichTextRenderer from "@/component/atoms/rich-text-renderer/RichTextRenderer";
import { IGenFooter } from "@/types/IGenTypes";
import Link from "next/link";
import React, { FunctionComponent } from "react";

export const Footer: FunctionComponent<IGenFooter> = ({
  logo,
  title,
  content,
}) => {
  return (
    <div>
      <div className="bg-background-secondary rounded-3xl p-4 text-foreground flex flex-col items-start justify-start gap-3">
        {logo && (
          <Link href={"/"} className="text-3xl font-bold">
            <span className="text-primary">{logo.charAt(0)}</span>
            {logo.slice(1)}
          </Link>
        )}

        {title && <p>{title}</p>}

        {content && <RichTextRenderer content={content} />}
      </div>
    </div>
  );
};
