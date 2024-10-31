import React from "react";
import { FaUser } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";

const DietUserInfo = ({ currentDate }: { currentDate: string }) => {
  return (
    <div className="flex text-sm md:text-md justify-between items-center flex-col text-gray-600">
      <p className="flex gap-1 items-center">
        <span className="flex gap-1 items-center">
          <FaUser />
          <span className="font-bold">نام کاربر: </span>
        </span>
        <span>سعیده موسوی</span>
      </p>
      <p className="flex gap-1 items-center">
        <span className="flex gap-1 items-center">
          <MdOutlineTimer />
          <span className="font-bold">تاریخ: </span>
        </span>
        <span>{currentDate}</span>
      </p>
    </div>
  );
};

export default DietUserInfo;
