"use client";
import React, { ReactNode, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

export const LearningSlider = ({
  data,
}: {
  data: {
    title?: string | ReactNode;
    imageUrl?: string | StaticImageData;
    path: string;
  }[];
}) => {
  const sliderRef = useRef<any>(null);

  const next = () => {
    sliderRef?.current?.swiper?.slideNext();
  };

  const previous = () => {
    sliderRef.current.swiper.slidePrev();
  };

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
        {data?.map(({ title, imageUrl, path }, idx) => (
          <SwiperSlide key={idx}>
            <a href={path} target="_blank" rel="no referrer">
              <article className="relative !overflow-hidden !rounded-2xl">
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
              </article>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={next}
        className="btnNext absolute top-0 bottom-0 left-0 z-10 text-white lg:left-10"
      >
        <div className="!bg-primary/40 grid size-14 place-items-center rounded-full">
          <MdArrowBackIosNew size={30} />
        </div>
      </button>
      <button
        onClick={previous}
        className="btnPrev absolute top-0 right-0 bottom-0 z-10 text-white lg:right-10"
      >
        <div className="!bg-primary/40 grid size-14 place-items-center rounded-full">
          <MdArrowForwardIos size={30} />
        </div>
      </button>
    </section>
  );
};
