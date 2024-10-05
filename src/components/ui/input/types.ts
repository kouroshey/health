import { FieldErrors } from "react-hook-form";

type EmployeeFieldName =
  | "firstName"
  | "middleName"
  | "lastName"
  | "birthDate"
  | "gender"
  | "phoneNumber"
  | "email"
  | "startAt"
  | "endAt"
  | "jobPosition"
  | "teams"
  | "designation"
  | "billable"
  | "billableHours";
export interface InputErrorProps {
  name: EmployeeFieldName;
  errors: FieldErrors;
}

export interface InputProps extends InputErrorProps {
  label: string;
  type?: "text" | "email" | "time";
  placeholder?: string;
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
