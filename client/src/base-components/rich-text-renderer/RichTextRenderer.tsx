"use client";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Link from "next/link";

interface IRichtextRenderer {
  content: BlocksContent;
}

const RichTextRenderer: React.FunctionComponent<IRichtextRenderer> = ({
  content,
}) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        link: ({ children, url }) => {
          const isExternal = url.startsWith("http") || url.startsWith("https");

          return (
            <Link
              className="text-slate-300 hover:text-slate-100 underline"
              rel={isExternal ? "noopener noreferrer" : ""}
              target={isExternal ? "_blank" : "_self"}
              href={url}
            >
              {children}
            </Link>
          );
        },
      }}
    />
  );
};

export default RichTextRenderer;
