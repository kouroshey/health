import { ReactElement } from "react";
import { FieldErrors } from "react-hook-form";

export type FormFieldNames =
  | "mobile"
  | "phone"
  | "name"
  | "family_name"
  | "verify_code"
  | "fullName"
  | "birthdate"
  | "gender"
  | "weight"
  | "height"
  | "province"
  | "city";
export interface InputErrorProps {
  name: FormFieldNames;
  errors: FieldErrors;
}

export interface InputProps extends InputErrorProps {
  label: string;
  type?: "text" | "email" | "time" | "date" | "checkbox" | "number";
  placeholder?: string;
  icon?: ReactElement;
  maxLength?: number;
  minLength?: number;
}

export type Option = {
  value: string;
  label: string;
};

export type SelectOptions = Option[];

export interface SelectProps extends InputProps {
  options: SelectOptions;
  defaultValue?: string;
  onchange: (val: Option) => void;
  trigger: () => void;
  returnValue?: boolean;
}

export interface ReactSelectProps extends InputErrorProps {
  isMulti: boolean;
  defaultValue?: Option;
  options: SelectOptions;
  returnValue?: boolean;
  label: string;
  setValue: (val: Option) => void;
}
