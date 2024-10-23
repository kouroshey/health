"use client";

import { usePathname } from "next/navigation";

import { IoDocumentText, IoExit, IoMenuOutline } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { RiHome5Fill } from "react-icons/ri";
import { TbHeartRateMonitor } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import PaginationLink from "../ui/PaginationLink";
import Button from "../ui/button/button";
import { routes } from "@/store/local/routes.static";

const paths = [
  {
    path: "/",
    name: "خانه",
    knownAs: "home",
    icon: <RiHome5Fill size={20} />,
  },
  {
    path: routes.subset.add,
    name: "افزودن کاربر جدید",
    knownAs: routes.subset.add,
    icon: <IoIosAddCircle color="primary" size={20} />,
  },
  {
    path: "#",
    name: "اطلاعیه‌ها",
    knownAs: "test",
    icon: <IoDocumentText size={20} />,
  },
  {
    path: `${routes.subset.dashboard}/1`,
    name: "داشبورد",
    knownAs: "dashboard",
    icon: <TbHeartRateMonitor size={20} />,
  },
  {
    path: routes.subset.root,
    name: "لیست کاربران",
    knowAs: "personsList",
    icon: <FaUsers size={20} />,
  },
  {
    path: "/logout",
    name: "خروج",
    knowAs: "personsList",
    icon: <IoExit size={20} />,
  },
];

const MobileHeader = () => {
  const pathname = usePathname();
  if (pathname === "/") {
    return (
      <div className="w-full px-4 sticky top-0 z-10 bg-white md:hidden h-12 flex justify-between items-center gap-2 shadow-sm mb-4 py-6 rounded-b-md">
        <Sheet>
          <SheetTrigger className="outline-none">
            <IoMenuOutline className="text-gray-500 outline-none" size={30} />
          </SheetTrigger>
          <SheetContent className="rounded-l-md text-xs">
            <div className="py-5 text-xs">
              {paths.map((item, index) => {
                const isActive = pathname === item.path;

                return (
                  <PaginationLink
                    key={index}
                    isActive={isActive}
                    className="text-primary text-xs flex items-center gap-x-3 w-full py-2"
                    href={item.path}
                  >
                    <span
                      className={isActive ? "text-primary" : "text-gray-500"}
                    >
                      {item.icon}
                    </span>
                    <h3
                      className={`text-md ${isActive ? "text-primary" : "text-gray-500"}`}
                    >
                      {item.name}
                    </h3>
                  </PaginationLink>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
        <Button variant="contained" size="sm">
          کاربران زیرمجموعه: ۶
        </Button>
      </div>
    );
  }
};

export default MobileHeader;
