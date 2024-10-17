import { FC } from "react";
import { SelectProps } from "./types";
import { InputErrorMessage } from "./InputErrorMessage";
import { useFormContext } from "react-hook-form";

export const SelectInput: FC<SelectProps> = ({
  name,
  errors,
  label,
  options,
  onchange,
  trigger,
  defaultValue,
}) => {
  const { register } = useFormContext();
  return (
    <div className="form-field-parent">
      <div className="mb-5">
        <label
          htmlFor={name}
          className="form-label fs-6 fw-bolder text-gray-900"
        >
          {label}
        </label>
        <select
          {...register(name)}
          defaultValue={defaultValue}
          className={`form__input form-select mt-2 bg-body ${
            Object.prototype.hasOwnProperty.call(errors, name) &&
            "border-red-500"
          } `}
        >
          {options.map((item, index) => (
            <option
              onChange={trigger}
              onClick={() => onchange(item)}
              value={item.value}
              key={index}
            >
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
};
