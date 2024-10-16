"use client";

import { slideThemes } from "@/app/(main)/(home)/_component/HomeSlider";
import Button from "@/components/ui/button/button";
import { usersData } from "@/store/local/users.static";
import { FaRegHeart, FaUser, FaWeightScale } from "react-icons/fa6";
import { IoBody } from "react-icons/io5";
import { MdOutlineUpdate } from "react-icons/md";
import { PiSmileySad, PiWarningOctagonLight } from "react-icons/pi";
import { RxHeight } from "react-icons/rx";

const SubUserDashboard = ({ id }: { id: number }) => {
  const findUser = usersData.subsets.find((sub) => sub.id === id);
  const subsetHeight = Number(findUser?.height) / 100;
  const bmi = Number(findUser?.weight) / (subsetHeight * 2);
  return (
    <div
      className={`rounded-md px-3 py-6 h-full flex justify-between ${slideThemes[id].background} ${slideThemes[id].text}`}
    >
      <div className="flex flex-col justify-between text-sm">
        <p className="flex gap-1 items-center">
          <span className="flex gap-1 items-center">
            <FaUser />
            <span className="font-bold">نام: </span>
          </span>
          <span>{findUser?.name + " " + findUser?.familyName}</span>
        </p>
        <p className="flex gap-1 items-center">
          <span className="flex gap-1 items-center">
            <RxHeight />
            <span className="font-bold">قد: </span>
          </span>
          <span>{findUser?.height} سانتیمتر</span>
        </p>
        <p className="flex gap-1 items-center">
          <span className="flex gap-1 items-center">
            <FaWeightScale />
            <span className="font-bold">وزن: </span>
          </span>
          <span>{findUser?.weight} کیلوگرم</span>
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
          <span>{findUser?.lastUpdate}</span>
        </p>
      </div>
      <div className="flex text-sm">
        <p className="flex gap-1 flex-col items-center">
          <span className="font-bold">وضعیت سلامت</span>
          <Button
            className="text-white"
            size="sm"
            color={
              findUser?.healthStatus === "سالم"
                ? "success"
                : findUser?.healthStatus === "ناسالم"
                  ? "error"
                  : "warning"
            }
            endIcon={
              findUser?.healthStatus === "سالم" ? (
                <FaRegHeart />
              ) : findUser?.healthStatus === "ناسالم" ? (
                <PiSmileySad />
              ) : (
                <PiWarningOctagonLight />
              )
            }
          >
            {findUser?.healthStatus}
          </Button>
        </p>
      </div>
    </div>
  );
};

export default SubUserDashboard;
