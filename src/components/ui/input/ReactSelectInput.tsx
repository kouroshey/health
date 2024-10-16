import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";
import { Option, ReactSelectProps } from "../input/types";
import { InputErrorMessage } from "../input/InputErrorMessage";

export const ReactSelectInput: FC<ReactSelectProps> = ({
  name,
  label,
  errors,
  options,
  isMulti,
  defaultValue,
  setValue,
}) => {
  const { control } = useFormContext();
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#fff",
      color: "#fff",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#9A9CAE",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#333",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#00FF00",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#222",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#444" : "#222",
      color: state.isSelected ? "#0067ff" : "#fff",
      cursor: "pointer",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9ca3af",
    }),
  };

  return (
    <div className="w-full">
      <div className="mb-5">
        <label
          htmlFor={name}
          className="text-gray-400 font-light text-sm md:text-md"
        >
          {label}
        </label>
        <Controller
          control={control}
          name={name}
          render={() => (
            <Select
              isMulti={isMulti}
              onChange={(val) => setValue(val as Option)}
              options={options}
              defaultValue={defaultValue}
              styles={customStyles}
              placeholder="انتخاب کنید"
              classNames={{
                control: (state) =>
                  `text-gray-100 form-select rounded-2 border-gray-500 py-1 px-1 bg-white ${
                    Object.prototype.hasOwnProperty.call(errors, name) &&
                    !state.isFocused &&
                    "!border-2 !border-danger"
                  } `,
              }}
            />
          )}
        />
      </div>
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
};
