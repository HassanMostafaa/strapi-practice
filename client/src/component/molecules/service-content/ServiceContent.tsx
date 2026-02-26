"use client";

import RichTextRenderer from "@/component/atoms/rich-text-renderer/RichTextRenderer";
import { IGenService } from "@/types/IGenTypes";

export const ServiceContent = ({ content }: IGenService["content"]) => {
  if (!content) return null;
  return (
    <div className="rounded-4xl bg-background-secondary p-6 md:p-10 shadow-sm">
      <RichTextRenderer content={content} />
    </div>
  );
};
