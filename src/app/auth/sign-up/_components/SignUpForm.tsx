"use client";

import { useState } from "react";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BiSolidMessage } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import toast from "react-hot-toast";

import { Input } from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import { SignUpFormSchema, SignUpFormType } from "../_models/validations";
import { useLogin, useSignUp } from "../../api/authHooks";
import { Option, SelectOptions } from "@/components/ui/input/types";
import { ReactSelectInput } from "@/components/ui/input/ReactSelectInput";
import { Spinner } from "@/components/ui/spinner/Spinner";
import { useResendTimer } from "@/hooks/useResendTimer";

const SignUpForm = () => {
  const { isResendActive, activationTime, resetTimer } = useResendTimer(30);

  const { mutateAsync: login, isPending: resendPending } = useLogin();

  const [genderOptions] = useState<SelectOptions>([
    { label: "مذکر", value: "1" },
    { label: "مونث", value: "0" },
  ]);
  const [activeGender, setActiveGender] = useState<Option>(genderOptions[0]);

  const methods = useForm<SignUpFormType>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      name: "",
      lastname: "",
      gender: activeGender,
      mobile: "",
      otp_token: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = methods;

  const { mutate: signUp, isPending } = useSignUp();

  const onSubmit: SubmitHandler<SignUpFormType> = async (data) => {
    signUp({ ...data, gender: data.gender.value });
  };

  const resendCodeHandler = async () => {
    const formMobile = methods.getValues("mobile");
    if (isResendActive) {
      if (formMobile.length > 0) {
        console.log("mobile exists");
        try {
          const result = await login({ mobile: formMobile });
          if (result.code === 200) resetTimer();
          else console.log("error!");
        } catch (error) {
          console.log(error);
        }
      } else toast("لطفا شماره تلفن خود را وارد نمایید.");
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="form-center" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="نام"
          placeholder="نام خود را وارد کنید"
          name="name"
          errors={errors}
        />

        <Input
          type="text"
          label="نام خانوادگی"
          placeholder="نام خانوادگی خود را وارد کنید"
          name="lastname"
          errors={errors}
        />

        <ReactSelectInput
          isMulti={false}
          errors={errors}
          label="جنسیت"
          name="province"
          options={genderOptions}
          setValue={(value) => {
            setActiveGender(value);
            setValue("gender", value);
          }}
        />

        <Input
          type="text"
          label="شماره موبایل"
          placeholder="*********09"
          name="mobile"
          icon={<BsPhone color="gray" />}
          errors={errors}
          maxLength={11}
        />

        <Input
          type="text"
          label="کد تایید"
          name="otp_token"
          icon={<BiSolidMessage color="gray" />}
          errors={errors}
          maxLength={4}
        />

        {resendPending ? (
          <Spinner size={"small"} className="text-white" />
        ) : (
          <span
            onClick={resendCodeHandler}
            className={
              isResendActive
                ? "text-primary text-sm cursor-pointer"
                : "text-gray-300 text-sm"
            }
          >
            {isResendActive
              ? "ارسال مجدد کد"
              : `ارسال مجدد تا ${activationTime} ثانیه دیگر`}
          </span>
        )}

        <Button
          loadingContent={<Spinner size={"small"} className="text-white" />}
          variant="contained"
          color="primary"
          className="w-full"
          isDisable={isPending}
          isLoading={isPending}
        >
          ثبت نام
        </Button>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
