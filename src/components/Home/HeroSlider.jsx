import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Slide1, Slide2 } from "../../images/imgs";

export default function HeroSlider() {
  return (
    <div className="size-full">
      <Swiper
        navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        className="mySwiper hero size-full"
      >
        <SwiperSlide>
          <img
            src={Slide1}
            alt="slide-1"
            className="size-full object-cover rounded-tl-[50px] rounded-bl-[50px]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={Slide2}
            alt="slide-1"
            className="size-full object-cover rounded-tl-[50px] rounded-bl-[50px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
