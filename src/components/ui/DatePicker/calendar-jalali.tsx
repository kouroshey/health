"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { DayPicker } from "react-day-picker/jalali";
import { faIR } from "date-fns-jalali/locale";
import { cn } from "@/lib/utils";
import { getClassNames } from "./calendar.styles";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function CalendarJalali({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        ...getClassNames(props),
        ...classNames,
      }}
      components={{
        Chevron(props) {
          if (props.orientation === "left")
            return <ChevronRightIcon className="h-4 w-4" />;
          else if (props.orientation === "right")
            return <ChevronLeftIcon className="h-4 w-4" />;
          return <span />;
        },
      }}
      locale={faIR}
      {...props}
    />
  );
}
CalendarJalali.displayName = "CalendarJalali";

export { CalendarJalali };
