"use client";

import React from "react";
import { usePathname } from "next/navigation";

// import { BsPerson } from "react-icons/bs";
// import { IoIosNotificationsOutline } from "react-icons/io";
// import { IoStatsChartOutline } from "react-icons/io5";
// import { RiHome5Fill } from "react-icons/ri";

import PaginationLink from "../ui/PaginationLink";
import paths from "@/store/local/menuPaths.json";

// const iconMap: { [key: string]: ReactElement } = {
//   BsPerson: <BsPerson size={"1.3rem"} />,
//   RiHome5Fill: <RiHome5Fill color="primary" size={25} />,
//   IoIosNotificationsOutline: <IoIosNotificationsOutline size={"1.3rem"} />,
//   IoStatsChartOutline: <IoStatsChartOutline size={"1.3rem"} />,
// };

const MobileMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex md:hidden fixed bottom-2 right-0 w-full justify-center mb-1">
      <div className="flex items-center justify-between shadow-lg rounded-md px-4 sm:px-8 w-full sm:w-1/2 mx-3 py-1 bg-white">
        {paths.map((item) => {
          const isActive = pathname === item.path;
          // const iconComponent = iconMap[item.icon];

          return (
            <PaginationLink
              key={item.path}
              isActive={isActive}
              activeClassName="text-primary shadow-md py-1 px-2 rounded-sm shadow-primary-300"
              href={item.path}
            >
              <div className="flex flex-col gap-1 justify-center items-center">
                {/* <span>
                  {React.cloneElement(iconComponent, {
                    className: isActive ? "text-primary" : "text-gray-500",
                  })}
                </span> */}
                <span
                  className={`text-sm ${isActive ? "text-primary" : "text-gray-500"}`}
                >
                  {item.name}
                </span>
              </div>
            </PaginationLink>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
