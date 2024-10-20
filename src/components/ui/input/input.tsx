"use client";

import { FC } from "react";
import { InputProps } from "./types";
import { InputErrorMessage } from "./InputErrorMessage";
import { useFormContext } from "react-hook-form";
import { cva } from "class-variance-authority";

const inputStyles = cva(
  "border border-300 rounded-sm px-4 py-2 w-full text-md text-gray-500 outline-0",
  {
    variants: {
      error: {
        true: "border-red-500",
        false: "border-gray-300",
      },
    },
    defaultVariants: {
      error: false,
    },
  },
);

export const Input: FC<InputProps> = ({
  label,
  type,
  name,
  placeholder,
  errors,
  icon,
  maxLength,
  minLength,
}) => {
  const { register, watch } = useFormContext();
  const hasError = Object.prototype.hasOwnProperty.call(errors, name);
  const iconElem = (
    <span className="absolute top-1/2 left-5 transform -translate-x-1/2 -translate-y-1/2">
      {icon ? icon : ""}
    </span>
  );

  const inputValue = watch(name, "");

  return (
    <div className="form w-full">
      <div className="w-full">
        <label
          htmlFor={name}
          className="text-gray-400 font-light text-sm md:text-md"
        >
          {label}
        </label>
        <div className="relative w-full">
          {icon && iconElem}
          <input
            type={type}
            {...register(name)}
            placeholder={placeholder}
            className={inputStyles({ error: hasError })}
            maxLength={maxLength}
            minLength={minLength}
          />
          {maxLength && (
            <span className="absolute text-gray-500 left-0 -top-4 text-xs">
              {inputValue.length}/{maxLength}
            </span>
          )}
        </div>
      </div>
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
};
