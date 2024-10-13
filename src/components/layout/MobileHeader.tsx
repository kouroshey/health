"use client";

import { usePathname } from "next/navigation";

import { MdOutlineMenu } from "react-icons/md";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import paths from "@/store/local/menuPaths.json";
import PaginationLink from "../ui/PaginationLink";
import { FaUsers } from "react-icons/fa6";
import Button from "../ui/button/button";

const MobileHeader = () => {
  const pathname = usePathname();
  if (pathname === "/") {
    return (
      <div className="w-full px-4 relative md:hidden h-12 py-4 flex justify-between items-center gap-2">
        <Sheet>
          <SheetTrigger>
            <MdOutlineMenu color="black" size={30} />
          </SheetTrigger>
          <SheetContent>
            <div className="py-5">
              {paths.map((item) => {
                const isActive = pathname === item.path;

                return (
                  <PaginationLink
                    key={item.path}
                    isActive={isActive}
                    className="text-primary block w-full py-2"
                    href={item.path}
                  >
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
        <div className="flex items-center gap-x-3 relative">
          <Button
            className="text-md px-2 h-fit rounded-full absolute right-[-17px] bottom-[-6px]"
            variant="contained"
            size="sm"
          >
            5
          </Button>
          <FaUsers size={30} />
        </div>
      </div>
    );
  }
};

export default MobileHeader;
