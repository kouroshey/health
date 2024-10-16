import { FC } from "react";
import { Controller, FieldErrors, useFormContext } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import { FormFieldNames } from "@/components/ui/input/types";
import { InputErrorMessage } from "@/components/ui/input/InputErrorMessage";
import "react-datepicker/dist/react-datepicker.css";

type DateInputProps = {
  label: string;
  subtitle?: string;
  placeholder?: string;
  isStartDate?: boolean;
  fromNow?: boolean;
  name: FormFieldNames;
  errors: FieldErrors;
};

export const DateInput: FC<DateInputProps> = ({
  label,
  name,
  errors,
  placeholder,
  isStartDate = false,
  fromNow = false,
}) => {
  const { control, setError, clearErrors, watch } = useFormContext();

  const startDate = watch("startAt");

  return (
    <div className="w-full">
      <div className="mb-5 flex flex-col w-full">
        <label
          htmlFor={name}
          className="text-gray-400 font-light text-sm md:text-md"
        >
          {label}
        </label>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <ReactDatePicker
              placeholderText={placeholder}
              onChange={(date) => {
                const unixTimestamp = date
                  ? Math.floor(date.getTime() / 1000)
                  : 0;
                if (fromNow && date && date < new Date()) {
                  setError(name, {
                    type: "manual",
                    message: "Date cannot be in the past",
                  });
                } else if (
                  !isStartDate &&
                  startDate &&
                  date &&
                  date < new Date(startDate * 1000)
                ) {
                  setError(name, {
                    type: "manual",
                    message: "End date cannot be before start date",
                  });
                } else {
                  clearErrors(name);
                  onChange(unixTimestamp);
                }
              }}
              selected={value && value !== "0" ? new Date(value * 1000) : null}
              dateFormat="d MMM yyyy"
              className={`z-5 w-full cursor-pointer mt-2 p-2 rounded-sm bg-white border border-gray-300 ${Object.prototype.hasOwnProperty.call(errors, name) && "border-red-500"} `}
            />
          )}
        />
      </div>
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
};
