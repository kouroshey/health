"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BsPhone } from "react-icons/bs";

import { Input } from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import { Spinner } from "@/components/ui/spinner/Spinner";
import {
  LoginFormSchema,
  LoginFormType,
} from "@/app/auth/login/_models/validations";
import { useLogin } from "../../api/authHooks";

const LoginForm = () => {
  const methods = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    mode: "all",
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const { mutate: login, isPending } = useLogin();

  const onSubmit: SubmitHandler<LoginFormType> = (data) => {
    login(data);
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
