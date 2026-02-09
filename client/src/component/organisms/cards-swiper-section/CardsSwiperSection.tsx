"use client";

import { Card } from "@/component/molecules/card/Card";
import { IGenComponentOrganismsCardsSwiperSection } from "@/types/IGenTypes";
import { FunctionComponent, useState } from "react";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const CardsSwiperSection: FunctionComponent<
  IGenComponentOrganismsCardsSwiperSection
> = ({ items, maxColumns, subtitle, title, variant }) => {
  const variantClasses: Record<string, string> = {
    contained: "bg-background-secondary p-4 rounded-3xl",
    outlined:
      "border border-border dark:border-background-tertiary p-4 rounded-3xl",
    ghost: "bg-transparent border border-transparent",
  };
  const [swiperReady, setSwiperReady] = useState<boolean>(false);
  return (
    <div
      className={`flex flex-col gap-4 ${variantClasses[variant ?? "ghost"]}`}
    >
      {/* HEADER */}
      {(title || subtitle) && (
        <div className="flex flex-col gap-2">
          {title && <p className="text-xl lg:text-4xl">{title}</p>}
          {subtitle && (
            <p className="text-xs md:text-ms lg:text-lg text-foreground-secondary">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* SWIPER */}
      {items?.length && items?.length !== 0 && (
        <Swiper
          modules={[Pagination, Mousewheel]}
          spaceBetween={16}
          onAfterInit={() => setSwiperReady(true)}
          className={`w-full ${!swiperReady ? "opacity-0" : "opacity-100"}  transition-opacity`}
          effect="creative"
          mousewheel={{
            forceToAxis: true,
            enabled: true,
            releaseOnEdges: false,
          }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={items?.length > (maxColumns ?? 1)}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: Math.min(3, maxColumns ?? 1) },
            1024: { slidesPerView: 3 },
            1224: { slidesPerView: maxColumns ?? 1 },
          }}
        >
          {items?.map((item) =>
            item ? (
              <SwiperSlide className="h-auto!" key={item.id}>
                <Card {...item} />
              </SwiperSlide>
            ) : null,
          )}
        </Swiper>
      )}
    </div>
  );
};
