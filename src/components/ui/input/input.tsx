import { FC } from "react";
import { InputProps } from "./types";
import { InputErrorMessage } from "./InputErrorMessage";
import { useFormContext } from "react-hook-form";
import { cva } from "class-variance-authority";

// const variantStyles = {
//   outlined: {
//     transparent: "bg-transparent text-gray-700",
//   },
//   filled: {},
// };

const inputStyles = cva("form__input", {
  variants: {
    error: {
      true: "border-red-500",
      false: "border-gray-300",
    },
  },
  defaultVariants: {
    error: false,
  },
});

export const Input: FC<InputProps> = ({
  label,
  type,
  name,
  placeholder,
  errors,
}) => {
  const { register } = useFormContext();
  const hasError = Object.prototype.hasOwnProperty.call(errors, name);

  return (
    <div className="form">
      <div>
        <label htmlFor={name} className="form__label">
          {label}
        </label>
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className={inputStyles({ error: hasError })}
        />
      </div>
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
};
