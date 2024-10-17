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
} from "@/app/auth/login/_models/validations";
import { useRouter } from "next/navigation";
import { routes } from "@/store/local/routes.static";

const LoginForm = () => {
  const methods = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
  });
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  console.log(errors);

  const onSubmit: SubmitHandler<LoginFormType> = () => {
    router.push(routes.auth.verifyLogin);
  };

  return (
    <FormProvider {...methods}>
      <form className="form-center" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="شماره موبایل"
          placeholder="*********09"
          name="phone"
          icon={<BsPhone color="gray" />}
          errors={errors}
          maxLength={11}
        />
        <Image
          src="/image/orange.svg"
          alt="orange-image"
          width={100}
          height={100}
        />

        <Button variant="contained" color="primary" className="w-full">
          ارسال کد تایید
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
