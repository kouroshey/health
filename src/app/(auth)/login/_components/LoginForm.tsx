"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input/input";
import { BsPhone } from "react-icons/bs";
import Button from "@/components/ui/button/button";
import Image from "next/image";
import {
  LoginFormSchema,
  LoginFormType,
} from "@/app/auth/login/models/validations";

const LoginForm = () => {
  const methods = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<LoginFormType> = (data) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form
        className="w-fll flex flex-col w-full justify-between gap-12 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="text"
          label="شماره موبایل"
          placeholder="*********09"
          name="phone"
          icon={<BsPhone color="gray" />}
          errors={errors}
          maxLength={11}
        />
        <Image src="orange.svg" alt="orange-image" width={100} height={100} />

        <Button variant="contained" color="primary" className="w-full">
          ارسال کد تایید
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
