import { ReactElement } from "react";
import { FieldErrors } from "react-hook-form";

type FormFieldNames =
  | "mobile"
  | "phone"
  | "name"
  | "family_name"
  | "verify_code";
export interface InputErrorProps {
  name: FormFieldNames;
  errors: FieldErrors;
}

export interface InputProps extends InputErrorProps {
  label: string;
  type?: "text" | "email" | "time";
  placeholder?: string;
  icon?: ReactElement;
  maxLength?: number;
  minLength?: number;
}

export interface SelectProps extends InputProps {
  options: {
    value: string;
    label: string;
  }[];
}

export interface ReactSelectProps extends SelectProps {
  isMulti: boolean;
}
