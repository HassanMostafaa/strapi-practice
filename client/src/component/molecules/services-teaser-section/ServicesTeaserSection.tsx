"use client";
import {
  IGenComponentMoleculesServicesTeaser,
  IGenEnum_Componentmoleculescard_Variant,
} from "@/types/IGenTypes";
import { FunctionComponent, useState } from "react";
import { SectionHeader } from "../section-header/SectionHeader";
import Button from "@/component/atoms/button/Button";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../card/Card";
import Link from "next/link";

export const ServicesTeaserSection: FunctionComponent<
  IGenComponentMoleculesServicesTeaser
> = ({ title, subtitle, ViewAllButton, services }) => {
  const [swiperReady, setSwiperReady] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-3">
      {(title || subtitle) && (
        <SectionHeader
          title={title}
          subtitle={subtitle}
          action={
            ViewAllButton?.label ? (
              <Button href={ViewAllButton?.href ?? ""} size="lg">
                {ViewAllButton?.label}
              </Button>
            ) : null
          }
        />
      )}

      {services?.length && services?.length !== 0 && (
        <Swiper
          modules={[Pagination, Mousewheel]}
          navigation={{ enabled: true }}
          spaceBetween={16}
          onAfterInit={() => setSwiperReady(true)}
          className={`w-full px-1! ${!swiperReady ? "opacity-0" : "opacity-100"}  transition-opacity`}
          effect="creative"
          mousewheel={{
            forceToAxis: true,
            enabled: true,
            releaseOnEdges: false,
          }}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services?.map((item) =>
            item && item?.slug ? (
              <SwiperSlide className="h-auto!" key={item?.documentId}>
                <Link href={item?.slug}>
                  <Card
                    media={item?.thumbnailImage}
                    title={item?.title}
                    subtitle={item?.subtitle}
                    id={item?.documentId}
                    variant={IGenEnum_Componentmoleculescard_Variant?.Contained}
                  />
                </Link>
              </SwiperSlide>
            ) : null,
          )}
        </Swiper>
      )}
    </div>
  );
};
