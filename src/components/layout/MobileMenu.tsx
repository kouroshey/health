"use client";

import React, { ReactElement } from "react";
import { usePathname } from "next/navigation";

import { BsPerson } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";

import PaginationLink from "../ui/PaginationLink";
import { mobileMenuItems } from "@/store/local/mobileMenu.static";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";

const iconMap: { [key: string]: ReactElement } = {
  profile: <BsPerson />,
  home: <BiHomeAlt2 color="primary" />,
  notification: <HiOutlineBell />,
  stats: <IoStatsChart />,
};

const MobileMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between md:hidden fixed bottom-0 right-0 w-full border-t border-gray-100 bg-white">
      {mobileMenuItems.map((item) => {
        const isActive = pathname.startsWith(item.path);
        const iconComponent = iconMap[item.icon];

        return (
          <PaginationLink
            key={item.path}
            isActive={isActive}
            className="px-6 py-2"
            activeClassName="relative text-primary"
            href={item.path}
          >
            <div className="flex flex-col justify-center items-center">
              <span>
                {React.cloneElement(iconComponent, {
                  className: isActive
                    ? "text-primary text-2xl"
                    : "text-gray-500 text-2xl",
                })}
              </span>
              <span
                className={`text-sm my-1 ${isActive ? "text-primary after:bottom-0 after:absolute after:w-full after:bg-primary after:left-0 after:h-1 after:transition-all after:rounded-md" : "text-gray-500"}`}
              >
                {item.name}
              </span>
            </div>
          </PaginationLink>
        );
      })}
    </div>
  );
};

export default MobileMenu;
