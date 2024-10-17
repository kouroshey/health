"use client";

import React from "react";
import { usePathname } from "next/navigation";

import PaginationLink from "../ui/PaginationLink";
import { mobileMenuItems } from "@/store/local/mobileMenu.static";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";
import { LuUser } from "react-icons/lu";
import { RxBarChart } from "react-icons/rx";

const iconMap = {
  profile: <LuUser />,
  home: <BiHomeAlt2 />,
  notification: <HiOutlineBell />,
  stats: <RxBarChart />,
};

const MobileMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex bg-slate-50 shadow-sm rounded-t-sm items-center justify-between md:hidden fixed bottom-0 right-0 w-full border-t border-gray-100 bg-white">
      {mobileMenuItems.map((item) => {
        const isActive = pathname === item.path;
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
                className={`text-xs my-1 ${isActive ? "text-primary after:bottom-0 after:absolute after:w-full after:bg-primary after:left-0 after:h-1 after:transition-all after:rounded-md" : "text-gray-500"}`}
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
