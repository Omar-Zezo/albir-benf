import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import HeroCard from "./HeroCard";

export default function HeroSlidrCards() {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        className="mySwiper services w-full"
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1028: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
      >

        <SwiperSlide>
          <HeroCard/>
        </SwiperSlide>

        <SwiperSlide>
          <HeroCard/>
        </SwiperSlide>

        <SwiperSlide>
          <HeroCard/>
        </SwiperSlide>

        <SwiperSlide>
          <HeroCard/>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
