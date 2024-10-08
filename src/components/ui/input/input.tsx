"use client";

import { FC, useState } from "react";
import { InputProps } from "./types";
import { InputErrorMessage } from "./InputErrorMessage";
import { useFormContext } from "react-hook-form";
import { cva } from "class-variance-authority";

const inputStyles = cva(
  "border border-300 rounded-sm px-4 py-2 w-full text-md text-gray-500",
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
  const [inputPhrase, setInputPhrase] = useState("");
  const { register } = useFormContext();
  const hasError = Object.prototype.hasOwnProperty.call(errors, name);
  const iconElem = (
    <span className="absolute top-1/2 left-5 transform -translate-x-1/2 -translate-y-1/2">
      {icon ? icon : ""}
    </span>
  );

  return (
    <div className="form w-full">
      <div className="w-full">
        <label htmlFor={name} className="text-gray-400 font-light text-sm">
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
            onChange={(event) => {
              setInputPhrase(event.target.value);
            }}
          />
          {maxLength && (
            <span className="absolute text-primary left-2 -bottom-6 text-sm">
              {maxLength}/{inputPhrase.length}
            </span>
          )}
        </div>
      </div>
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
};
