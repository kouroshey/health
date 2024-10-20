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
import { useLogin } from "../../api/authHooks";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { setCookie } from "@/lib/helpers/cookie";
import { COOKIES_TEMPLATE, PATH_TEMPLATE } from "@/lib/enumerations";

const LoginForm = () => {
  const { mutateAsync: login } = useLogin();
  const router = useRouter();

  const methods = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    const result = await login(data);
    if (result.code === 200) {
      setCookie(COOKIES_TEMPLATE.mobile, data.mobile);
      if (result.result) {
        router.push(PATH_TEMPLATE.auth.verifyLogin);
      } else {
        router.push(PATH_TEMPLATE.auth.signUp);
      }
    } else {
      console.log("error!");
      toast.error("ش");
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="form-center" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="شماره موبایل"
          placeholder="*********09"
          name="mobile"
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
