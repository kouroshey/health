"use client";

import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarJalali } from "@/components/ui/DatePicker/calendar-jalali";
import usePersianDate from "@/hooks/usePersianDate";
import { PopoverClose } from "@radix-ui/react-popover";

export default function DietPlanDatePicker({
  onClick,
}: {
  onClick: (selectedDate: string) => void;
}) {
  const [date, setDate] = React.useState<Date>(new Date());
  const formattedData = usePersianDate(date);

  const handleDateSelect = (selectedDate: Date) => {
    setDate(selectedDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <span
          className={cn(
            "flex items-center gap-3 border border-gray-300 p-2 rounded-lg w-[250px] justify-start text-left font-normal cursor-pointer",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? formattedData : <span>انتخاب تاریخ</span>}
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white py-3">
        <CalendarJalali
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          className="bg-white border-0"
          required
        />
        {date && (
          <PopoverClose>
            <span
              className="bg-primary text-white mr-3 cursor-pointer py-1 px-4 rounded-lg"
              onClick={() => onClick(formattedData)}
            >
              تایید
            </span>
          </PopoverClose>
        )}
      </PopoverContent>
    </Popover>
  );
}
