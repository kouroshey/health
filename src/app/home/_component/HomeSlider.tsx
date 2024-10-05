"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./homeClass.css";

const HomeSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        speed={1000}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="w-full h-48 md:h-96 rounded-md homeSlider"
      >
        {/* back: (change the hardcode and automate the process with mapping on the data from backed and pass them to the forward component) <HomeSliderMap /> */}
        <SwiperSlide className="w-full h-full relative">
          <Image
            src={"/icon512_maskable.png"}
            alt="the first one"
            fill={true}
            className="object-fill rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full relative">
          <Image
            src={"/icon512_maskable.png"}
            alt="the first one"
            fill={true}
            className="object-fill rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full relative">
          <Image
            src={"/icon512_maskable.png"}
            alt="the first one"
            fill={true}
            className="object-fill rounded-md"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
