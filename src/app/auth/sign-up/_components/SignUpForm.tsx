"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import { SignUpFormSchema, SignUpFormType } from "../_models/validations";
import { useLogin, useSignUp } from "../../api/authHooks";
import { useEffect, useState } from "react";
import { Option, SelectOptions } from "@/components/ui/input/types";
import { ReactSelectInput } from "@/components/ui/input/ReactSelectInput";
import { useUserActions } from "@/store/users";
import { getCookie, removeCookie, setCookie } from "@/lib/helpers/cookie";
import { COOKIES_TEMPLATE, PATH_TEMPLATE } from "@/lib/enumerations";
import { useRouter } from "next/navigation";
import { BiSolidMessage } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import toast from "react-hot-toast";
import { Spinner } from "@/components/ui/spinner/Spinner";

const SignUpForm = () => {
  const [isResendActive, setIsResendActive] = useState(false);
  const [mobile, setMobile] = useState("");
  const [activationTime, setActivationTime] = useState(30);

  const { mutateAsync: signUp, isPending } = useSignUp();
  const { mutateAsync: login } = useLogin();
  const { setUser } = useUserActions();

  const router = useRouter();

  const [genderOptions] = useState<SelectOptions>([
    { label: "مذکر", value: "1" },
    { label: "مونث", value: "0" },
  ]);
  const [activeGender, setActiveGender] = useState<Option>(genderOptions[0]);

  useEffect(() => {
    const getMobileFromCookie = async () => {
      const mobileNumber = await getCookie(COOKIES_TEMPLATE.mobile);
      if (mobileNumber) {
        setValue("mobile", mobileNumber.value);
        setMobile(mobileNumber.value);
      } else {
        router.push(PATH_TEMPLATE.auth.login);
      }
    };
    getMobileFromCookie();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isResendActive) {
      interval = setInterval(() => {
        setActivationTime((prev) => {
          if (prev > 0) return prev - 1;
          clearInterval(interval);
          setIsResendActive(true);
          return 0;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isResendActive]);

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

  const onSubmit: SubmitHandler<SignUpFormType> = async (data) => {
    const result = await signUp({ ...data, gender: data.gender.value });
    if (result.code === 200 && result.result) {
      await setCookie(COOKIES_TEMPLATE.accessToken, result.result?.accessToken);
      removeCookie(COOKIES_TEMPLATE.mobile);
      removeCookie(COOKIES_TEMPLATE.otpCode);
      setUser({ ...result.result, isNewUser: false });
      router.push(PATH_TEMPLATE.main.home);
      toast.success("شما با موفقیت وارد شدید");
    }
  };

  const resendCodeHandler = async () => {
    if (isResendActive && mobile) {
      try {
        const result = await login({ mobile });
        if (result.code === 200) {
          setIsResendActive(false);
          setActivationTime(30);
        } else {
          console.log("error!");
        }
      } catch (error) {
        console.log(error);
      }
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

        <span
          onClick={resendCodeHandler}
          className={
            isResendActive
              ? "text-primary text-sm cursor-pointer"
              : "text-gray-400 text-sm"
          }
        >
          {isResendActive
            ? "ارسال مجدد کد"
            : `ارسال مجدد تا ${activationTime} ثانیه دیگر`}
        </span>

        <Button
          loadingContent={<Spinner size={"small"} />}
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
