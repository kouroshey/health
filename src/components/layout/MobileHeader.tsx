"use client";

import { cloneElement, ReactElement } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { IoDocumentText, IoMenuOutline } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { RiHome5Fill } from "react-icons/ri";
import { TbHeartRateMonitor } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";

import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import paths from "@/store/local/menuPaths.json";
import PaginationLink from "../ui/PaginationLink";
import Button from "../ui/button/button";

const iconMap: { [key: string]: ReactElement } = {
  RiHome5Fill: <RiHome5Fill size={20} />,
  IoIosAddCircle: <IoIosAddCircle color="primary" size={20} />,
  IoDocumentText: <IoDocumentText size={20} />,
  TbHeartRateMonitor: <TbHeartRateMonitor size={20} />,
  FaUsers: <FaUsers size={20} />,
};

const MobileHeader = () => {
  const pathname = usePathname();
  if (pathname === "/") {
    return (
      <div className="w-full px-4 sticky top-0 z-10 bg-white md:hidden h-12 py-4 flex justify-between items-center gap-2">
        <Sheet>
          <SheetTrigger>
            <IoMenuOutline className="text-gray-500" size={30} />
          </SheetTrigger>
          <SheetContent className="rounded-l-md">
            <SheetHeader className="absolute left-2 top-0">
              <Image
                src={"/icon512_maskable.png"}
                alt="logo"
                width={50}
                height={50}
              />
            </SheetHeader>
            <div className="py-5">
              {paths.map((item) => {
                const isActive = pathname === item.path;
                const iconComponent = iconMap[item.icon];

                return (
                  <PaginationLink
                    key={item.path}
                    isActive={isActive}
                    className="text-primary flex items-center gap-x-3 w-full py-2"
                    href={item.path}
                  >
                    <span>
                      {cloneElement(iconComponent, {
                        className: isActive ? "text-primary" : "text-gray-500",
                      })}
                    </span>
                    <h3
                      className={`text-[1.2rem] ${isActive ? "text-primary" : "text-gray-500"}`}
                    >
                      {item.name}
                    </h3>
                  </PaginationLink>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-x-1 relative">
          <span className="text-sm text-gray-500 pt-[4px]">
            تعداد افراد زیر مجموعه :
          </span>
          <Button
            className="text-sm px-2 pt-[4px] h-fit rounded-full"
            variant="contained"
            size="sm"
          >
            5
          </Button>
        </div>
      </div>
    );
  }
};

export default MobileHeader;
