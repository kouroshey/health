"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const MobileHeader = () => {
  const pathname = usePathname();
  console.log(pathname);
  if (pathname === "/") {
    return (
      <div className="w-full px-4 relative md:hidden h-12 py-8 flex-center gap-2">
        <h1 className="primary-h1">نارنج</h1>
        <Image alt="" src="/image/orange-smile-2.svg" width={30} height={30} />
      </div>
    );
  }
};

export default MobileHeader;
