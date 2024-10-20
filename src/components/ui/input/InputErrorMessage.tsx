import { FC } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { InputErrorProps } from "./types";

export const InputErrorMessage: FC<InputErrorProps> = ({ errors, name }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <p className="text-error text-xs md:text-sm">{message}</p>
      )}
    />
  );
};
