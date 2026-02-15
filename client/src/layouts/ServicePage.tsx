"use client";

import { IGenService } from "@/types/IGenTypes";
import { FunctionComponent } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

import Button from "@/component/atoms/button/Button";
import { NextImage } from "@/component/atoms/next-image/NextImage";
import RichTextRenderer from "@/component/atoms/rich-text-renderer/RichTextRenderer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const ServicePage: FunctionComponent<IGenService> = ({
  title,
  subtitle,
  category,
  image,
  createdAt,
  content,
}) => {
  const pathname = usePathname();

  /* ----------------------------------
     Breadcrumb Generator
  ---------------------------------- */
  const breadcrumbs = pathname
    .split("/")
    .filter(Boolean)
    .map((segment, i, arr) => ({
      name: segment.replace(/-/g, " "),
      href: "/" + arr.slice(0, i + 1).join("/"),
    }))
    .slice(1);

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-background text-foreground"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        {/* ================= Page Wrapper ================= */}
        <div className="flex flex-col gap-10">
          {/* ================= Header ================= */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            {/* Breadcrumb */}
            <nav className="flex flex-wrap items-center gap-2 text-sm text-foreground-secondary">
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>

              {breadcrumbs.map((crumb, index) => (
                <div key={crumb.href} className="flex items-center gap-2">
                  <span>/</span>

                  {index === breadcrumbs.length - 1 ? (
                    <span className="font-medium text-foreground capitalize">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="capitalize hover:text-primary transition"
                    >
                      {crumb.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Back Button */}
            <div>
              <Button href="/services" variant="ghost" size="sm">
                ← Back to Services
              </Button>
            </div>
          </motion.div>

          {/* ================= Hero ================= */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-[2.5rem] bg-background-secondary shadow-lg"
          >
            {/* Background Image */}
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

            {/* Hero Content */}
            <div className="relative z-10 flex min-h-[40vw] md:min-h-[80vh] flex-col justify-end p-6 md:p-10 lg:p-14">
              <div className="flex flex-col gap-4 max-w-3xl">
                {/* Meta */}
                {createdAt && (
                  <div className="text-sm text-foreground-secondary">
                    {new Date(createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                )}

                {/* Category */}
                {category && (
                  <span className="w-fit rounded-full bg-primary/20 border border-primary/80 font-bold px-4 py-1.5 text-sm text-primary">
                    {category}
                  </span>
                )}

                {/* Title */}
                {title && (
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    {title}
                  </h1>
                )}

                {/* Subtitle */}
                {subtitle && (
                  <p className="max-w-2xl text-lg text-foreground-secondary">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          {/* ================= Content ================= */}
          <motion.div variants={itemVariants} className="flex flex-col gap-8">
            {/* Article */}
            {content && (
              <div className="rounded-[2rem] bg-background-secondary p-6 md:p-10 shadow-sm">
                <RichTextRenderer content={content} />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
