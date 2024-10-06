"use client";

import React, { ReactElement } from "react";
import { usePathname } from "next/navigation";

import { BsPerson } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoStatsChartOutline } from "react-icons/io5";
import { RiHome5Fill } from "react-icons/ri";

import CustomPagination from "../ui/PaginationLink";
import paths from "@/store/local/menuPaths.json";

const iconMap: { [key: string]: ReactElement } = {
  BsPerson: <BsPerson size={"1.3rem"} />,
  RiHome5Fill: <RiHome5Fill color="primary" size={25} />,
  IoIosNotificationsOutline: <IoIosNotificationsOutline size={"1.3rem"} />,
  IoStatsChartOutline: <IoStatsChartOutline size={"1.3rem"} />,
};

const MobileMenu = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between md:hidden fixed bottom-0 right-0 w-full h-14 border-t border-gray-300 rounded-t-lg px-12 bg-white">
      {paths.map((item) => {
        const isActive = pathname === item.path;
        const iconComponent = iconMap[item.icon];

        return (
          <CustomPagination
            key={item.path}
            isActive={isActive}
            activeClassName="text-primary shadow-md p-1 rounded-sm shadow-primary-300"
            href={item.path}
          >
            <span>
              {React.cloneElement(iconComponent, {
                className: isActive ? "text-primary" : "text-gray-500",
              })}
            </span>
          </CustomPagination>
        );
      })}
    </div>
  );
};

export default MobileMenu;
