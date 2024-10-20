"use client";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { VerifyFormSchema, VerifyFormType } from "../_models/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import { BiSolidMessage } from "react-icons/bi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getCookie, setCookie } from "@/lib/helpers/cookie";
import { COOKIES_TEMPLATE, PATH_TEMPLATE } from "@/lib/enumurations";
import { useEffect, useState } from "react";
import { useLogin, useVerifyLogin } from "../../api/authHooks";

const VerifyLoginForm = () => {
  const { mutateAsync: verifyLogin } = useVerifyLogin();
  const { mutateAsync: login } = useLogin();

  const [isResendActive, setIsResendActive] = useState(false);
  const [mobile, setMobile] = useState("");
  const [activationTime, setActivationTime] = useState(30);

  useEffect(() => {
    const getMobileFromCookie = async () => {
      const mobileNumber = await getCookie(COOKIES_TEMPLATE.mobile);
      if (mobileNumber) {
        setMobile(mobileNumber.value);
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

  const methods = useForm<VerifyFormType>({
    resolver: zodResolver(VerifyFormSchema),
    mode: "onChange",
  });
  const router = useRouter();
  const isOldUser = true;

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<VerifyFormType> = async (data) => {
    if (mobile) {
      const result = await verifyLogin({
        mobile: mobile,
        otp_token: data.otp_code,
      });
      if (result.code === 200) {
        setCookie(COOKIES_TEMPLATE.otpCode, data.otp_code);
        if (isOldUser) {
          setCookie("is_verified", "true");
          router.push(PATH_TEMPLATE.main.home);
        } else {
          router.push(PATH_TEMPLATE.auth.signup);
        }
      }
    }
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
          name="otp_code"
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
            ? "ارسال دوباره‌ی کد"
            : `ارسال مجدد تا ${activationTime} ثانیه دیگر`}
        </span>
        <Image
          src="/image/orange-glasses.svg"
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
