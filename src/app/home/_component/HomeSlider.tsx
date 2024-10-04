"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HomeSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
      >
        {/* back: <HomeSliderMap /> */}
        <SwiperSlide>
          <Image
            src={
              "https://images.unsplash.com/photo-1727117774086-074d19d8df85?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="the first one"
            width={100}
            height={100}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
