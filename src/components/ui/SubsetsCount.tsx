"use client";
import { useSubsetsList } from "@/app/(main)/subset/api/subsetHooks";
import Button from "./button/button";
import { usePathname } from "next/navigation";

const SubsetsCount = () => {
  const { data: subsetsList, refetch } = useSubsetsList({ per_page: "100" });
  const pathname = usePathname();

  if (pathname === "/") {
    refetch();
    return (
      <Button className="flex gap-2 items-center" variant="contained" size="sm">
        <span>کاربران زیرمجموعه: </span>
        <span> {subsetsList?.data.result.length || 0}</span>
      </Button>
    );
  }
};

export default SubsetsCount;
