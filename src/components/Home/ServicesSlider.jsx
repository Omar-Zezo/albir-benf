import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ServiceCard from "./ServiceCard";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function ServicesSlider() {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={3}
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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1028: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((service) => (
          <SwiperSlide>
            <ServiceCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
