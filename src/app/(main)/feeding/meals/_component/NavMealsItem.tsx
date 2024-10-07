"use client";

import React from "react";
import { usePathname } from "next/navigation";

import PaginationLink from "@/components/ui/PaginationLink";
import MealsItemData from "@/store/local/MealsItemData.json";
import { cn } from "@/lib/utils";

import "./mealsStyle.css";

const NavMealsItem = () => {
  const pathname = usePathname();
  const activeDefault = MealsItemData.map((item) => item.link === pathname);

  return (
    <div className="flex gap-x-4 border-b border-gray-300 pb-3 overflow-x-auto mealItemScroll">
      {MealsItemData.map((item) => {
        const isActive = activeDefault.includes(true)
          ? pathname === item.link
          : item.default;

        return (
          <PaginationLink
            key={item.link}
            isActive={isActive}
            activeClassName="mb-[-.75rem] border-b-2 border-primary"
            className="transition-all duration-75 text-nowrap"
            href={item.link}
          >
            <span
              className={cn(
                isActive ? "text-primary" : "text-gray-500",
                "transition-all duration-150 text-sm",
              )}
            >
              {item.name}
            </span>
          </PaginationLink>
        );
      })}
    </div>
  );
};

export default NavMealsItem;
