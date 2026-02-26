"use client";

import { IGenService } from "@/types/IGenTypes";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { ServiceBreadcrumbs } from "@/component/molecules/service-breadcrumbs/ServiceBreadcrumbs";
import { ServiceHero } from "@/component/organisms/service-hero/ServiceHero";
import { ServiceContent } from "@/component/molecules/service-content/ServiceContent";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
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
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = [
    { name: t("home"), href: "/" },
    { name: t("services"), href: "/services" },
    { name: title ?? "", href: null },
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-background text-foreground"
    >
      <div className="px-4 py-10 md:px-8 flex flex-col gap-10">
        <motion.div variants={itemVariants}>
          <ServiceBreadcrumbs items={breadcrumbs} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ServiceHero
            title={title}
            subtitle={subtitle}
            category={category}
            image={image}
            createdAt={createdAt}
            locale={locale}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ServiceContent content={content} />
        </motion.div>
      </div>
    </motion.section>
  );
};
