import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { LoginFormSchema, VerifyFormType } from "../_models/Validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import { BiSolidMessage } from "react-icons/bi";
import Image from "next/image";

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
        className="w-full flex flex-col justify-between gap-12 items-center"
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
        <Image
          src="orange-glasses.svg"
          alt="orange-image"
          width={100}
          height={100}
        />
        <Button variant="contained" color="primary" className="w-full">
          تایید
        </Button>
      </form>
    </FormProvider>
  );
};

export default VerifyLoginForm;
