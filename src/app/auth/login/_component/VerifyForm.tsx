import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { LoginFormSchema, VerifyFormType } from "../models/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import { BiSolidMessage } from "react-icons/bi";

const VerifyLoginForm = () => {
  const methods = useForm<VerifyFormType>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onChange",
    defaultValues: {
      verify_code: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<VerifyFormType> = (data) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form
        className="w-full flex flex-col justify-between h-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="text"
          label="کد تایید"
          name="phone"
          icon={<BiSolidMessage color="gray" />}
          errors={errors}
          maxLength={5}
        />

        <Button variant="contained" color="primary" className="w-full">
          تایید شماره تلفن
        </Button>
      </form>
    </FormProvider>
  );
};

export default VerifyLoginForm;
