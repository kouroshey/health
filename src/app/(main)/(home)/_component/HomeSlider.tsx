"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { usersData } from "@/store/local/users.static";

import "swiper/css";
import "swiper/css/pagination";
import "./homeClass.css";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { FaWeightScale } from "react-icons/fa6";
import { RxHeight } from "react-icons/rx";
import { IoBody } from "react-icons/io5";
import { MdOutlineUpdate } from "react-icons/md";
import Button from "@/components/ui/button/button";
import { PiSmileySad, PiWarningOctagonLight } from "react-icons/pi";

const slideThemes = {
  5: {
    background: "bg-blue-100",
    text: "text-blue-900",
  },
  2: {
    background: "bg-indigo-100",
    text: "text-indigo-900",
  },
  3: {
    background: "bg-gray-100",
    text: "text-gray-900",
  },
  4: {
    background: "bg-sky-100",
    text: "text-sky-900",
  },
  1: {
    background: "bg-purple-100",
    text: "text-purple-900",
  },
};

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
        {usersData.subsets.map((subset) => {
          const subsetHeight = Number(subset.height) / 100;
          const bmi = Number(subset.weight) / (subsetHeight * 2);
          return (
            <SwiperSlide key={subset.id} className="w-full h-full relative">
              <div
                className={`rounded-md px-3 py-6 h-full flex justify-between ${slideThemes[subset.id].background} ${slideThemes[subset.id].text}`}
              >
                <div className="flex flex-col justify-between text-sm">
                  <p className="flex gap-1 items-center">
                    <span className="flex gap-1 items-center">
                      <FaUser />
                      <span className="font-bold">نام: </span>
                    </span>
                    <span>{subset.name + " " + subset.familyName}</span>
                  </p>
                  <p className="flex gap-1 items-center">
                    <span className="flex gap-1 items-center">
                      <RxHeight />
                      <span className="font-bold">قد: </span>
                    </span>
                    <span>{subset.height} سانتیمتر</span>
                  </p>
                  <p className="flex gap-1 items-center">
                    <span className="flex gap-1 items-center">
                      <FaWeightScale />
                      <span className="font-bold">وزن: </span>
                    </span>
                    <span>{subset.weight} کیلوگرم</span>
                  </p>
                  <p className="flex gap-1 items-center">
                    <span className="flex gap-1 items-center">
                      <IoBody />
                      <span className="font-bold">BMI کاربر: </span>
                    </span>
                    <span>{bmi.toLocaleString()}</span>
                  </p>
                  <p className="flex gap-1 items-center">
                    <span className="flex gap-1 items-center">
                      <MdOutlineUpdate />
                      <span className="font-bold">بروزرسانی: </span>
                    </span>
                    <span>{subset.lastUpdate}</span>
                  </p>
                </div>
                <div className="flex text-sm">
                  <p className="flex gap-1 flex-col items-center">
                    <span className="font-bold">وضعیت سلامت</span>
                    <Button
                      className="text-white"
                      size="sm"
                      color={
                        subset.healthStatus === "سالم"
                          ? "success"
                          : subset.healthStatus === "ناسالم"
                            ? "error"
                            : "warning"
                      }
                      endIcon={
                        subset.healthStatus === "سالم" ? (
                          <FaRegHeart />
                        ) : subset.healthStatus === "ناسالم" ? (
                          <PiSmileySad />
                        ) : (
                          <PiWarningOctagonLight />
                        )
                      }
                    >
                      {subset.healthStatus}
                    </Button>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default HomeSlider;
