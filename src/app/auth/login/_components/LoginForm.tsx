"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BsPhone } from "react-icons/bs";
import toast from "react-hot-toast";

import { Input } from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import {
  LoginFormSchema,
  LoginFormType,
} from "@/app/auth/login/_models/validations";
import { useLogin } from "../../api/authHooks";
import { setCookie } from "@/lib/helpers/cookie";
import { COOKIES_TEMPLATE, PATH_TEMPLATE } from "@/lib/enumerations";
import { Spinner } from "@/components/ui/spinner/Spinner";

const LoginForm = () => {
  const { mutateAsync: login, isPending } = useLogin();
  const router = useRouter();

  const methods = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    mode: "all",
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    const result = await login(data);
    if (result.code === 200) {
      await setCookie(COOKIES_TEMPLATE.mobile, data.mobile);
      if (result.result) {
        await setCookie(COOKIES_TEMPLATE.isNew, "0");
        router.push(PATH_TEMPLATE.auth.verifyLogin);
      } else {
        await setCookie(COOKIES_TEMPLATE.isNew, "1");
        router.push(PATH_TEMPLATE.auth.signUp);
      }
    } else {
      console.log("error!");
      toast.error("مشکلی پیش آمده است.");
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
        <Button
          variant="contained"
          color="primary"
          className="w-full"
          isDisable={isPending}
          isLoading={isPending}
          loadingContent={<Spinner size={"small"} className="text-white" />}
        >
          ارسال کد تایید
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
