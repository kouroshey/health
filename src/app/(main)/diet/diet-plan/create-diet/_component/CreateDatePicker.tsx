"use client";

import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import usePersianDate, { persianToEnglishMap } from "@/hooks/usePersianDate";
import { PopoverClose } from "@radix-ui/react-popover";
import { CalendarJalali } from "@/components/ui/DatePicker/calendar-jalali";

export function CreateDatePicker({
  onClick,
}: {
  onClick: (selectedDate: string) => void;
}) {
  const [date, setDate] = React.useState<Date>(new Date());
  const formattedData = usePersianDate(date);
  onClick(formattedData);

  const handleDateSelect = (selectedDate: Date) => {
    setDate(selectedDate);
    const date = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      calendar: "persian",
    })
      .format(selectedDate)
      .replace(/[۰-۹]/g, (char) => persianToEnglishMap[char]);
    console.log(date);
    onClick(date);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <span
          className={cn(
            "flex items-center gap-3 border border-gray-300 p-3 rounded-lg w-[280px] justify-start text-left font-normal cursor-pointer",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? formattedData : <span>تاریخ مورد نظرتان را انتخاب کنید</span>}
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white py-3">
        <CalendarJalali
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          className="bg-white"
          required
        />
        {date && (
          <PopoverClose>
            <span className="bg-primary text-white mr-3 cursor-pointer py-1 px-4 rounded-lg">
              تایید
            </span>
          </PopoverClose>
        )}
      </PopoverContent>
    </Popover>
  );
}
