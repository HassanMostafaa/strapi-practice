"use client";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Link from "next/link";

interface IRichtextRenderer {
  content: BlocksContent;
  className?: string;
}

const RichTextRenderer: React.FunctionComponent<IRichtextRenderer> = ({
  content,
  className,
}) => {
  return (
    <div className={className}>
      <BlocksRenderer
        content={content}
        blocks={{
          link: ({ children, url }) => {
            const isExternal =
              url.startsWith("http") || url.startsWith("https");

            return (
              <Link
                className="text-foreground-secondary hover:text-foreground/50 active:text-foreground/80 underline"
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
    </div>
  );
};

export default RichTextRenderer;
