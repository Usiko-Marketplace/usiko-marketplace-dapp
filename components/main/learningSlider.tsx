"use client";
import React, { ReactNode, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";

export const LearningSlider = ({
  data,
}: {
  data: {
    title?: string | ReactNode;
    imageUrl?: string | StaticImageData;
  }[];
}) => {
  const sliderRef = useRef<any>(null);

  return (
    <section className="relative overflow-hidden">
      <Swiper
        ref={sliderRef}
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          nextEl: ".btnNext",
          prevEl: ".btnPrev",
          disabledClass: "swiper-button-disabled",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.4,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },

          1024: {
            slidesPerView: 3.4,
            spaceBetween: 20,
          },
        }}
        loop={true}
        scrollbar={{ el: ".swiper-scrollbar" }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // pagination={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {data?.map(({ title, imageUrl }, idx) => (
          <SwiperSlide key={idx}>
            <section className="relative overflow-hidden rounded-2xl">
              <figure className="relative h-[310px] overflow-hidden">
                <Image
                  src={imageUrl as string}
                  alt=""
                  className="!h-full !w-full object-cover"
                  sizes="100%"
                  fill
                />
              </figure>

              <article className="absolute bottom-0 flex h-16 w-full flex-col justify-center bg-gray-400/60 px-6 py-4 text-white">
                <h5 className="text-lg font-semibold">{title}</h5>
              </article>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
