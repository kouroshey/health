"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { cn } from "@/lib/utils";

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
        className={cn("sm:w-4/5 h-48 rounded-md")}
      >
        {/* back: (change the hardcode and automate the process with mapping on the data from backed and pass them to the forward component) <HomeSliderMap /> */}
        <SwiperSlide className={cn("w-full h-full")}>
          <Image
            src={"/icon512_maskable.png"}
            alt="the first one"
            fill={true}
            className={cn("object-fill")}
          />
        </SwiperSlide>
        <SwiperSlide className={cn("w-full h-full")}>
          <Image
            src={"/icon512_maskable.png"}
            alt="the first one"
            fill={true}
            className={cn("object-fill")}
          />
        </SwiperSlide>
        <SwiperSlide className={cn("w-full h-full")}>
          <Image
            src={"/icon512_maskable.png"}
            alt="the first one"
            fill={true}
            className={cn("object-fill")}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
