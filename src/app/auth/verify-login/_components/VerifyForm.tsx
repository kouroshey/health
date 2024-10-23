"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BiSolidMessage } from "react-icons/bi";
import toast from "react-hot-toast";

import { VerifyFormSchema, VerifyFormType } from "../_models/validations";
import { Input } from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import { getCookie, removeCookie, setCookie } from "@/lib/helpers/cookie";
import { COOKIES_TEMPLATE, PATH_TEMPLATE } from "@/lib/enumerations";
import { useLogin, useVerifyLogin } from "../../api/authHooks";
import { useUserActions } from "@/store/users";
import { Spinner } from "@/components/ui/spinner/Spinner";
import { useResendTimer } from "@/hooks/useResendTimer";

const VerifyLoginForm = () => {
  const router = useRouter();

  const { mutateAsync: verifyLogin, isPending } = useVerifyLogin();
  const { mutateAsync: login, isPending: resendPending } = useLogin();
  const { setUser } = useUserActions();

  const { isResendActive, activationTime, resetTimer } = useResendTimer(30);
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    const validateMobileCookie = async () => {
      const mobileNumber = await getCookie(COOKIES_TEMPLATE.mobile);
      if (mobileNumber) setMobile(mobileNumber.value);
    };
    validateMobileCookie();
  });

  const methods = useForm<VerifyFormType>({
    resolver: zodResolver(VerifyFormSchema),
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<VerifyFormType> = async (data) => {
    if (mobile) {
      const result = await verifyLogin({
        mobile: mobile,
        otp_token: data.otp_token,
      });
      if (result.code === 200 && result.result) {
        await removeCookie(COOKIES_TEMPLATE.mobile);
        await removeCookie(COOKIES_TEMPLATE.isNew);
        await setCookie(
          COOKIES_TEMPLATE.accessToken,
          result.result?.accessToken,
        );
        setUser({ ...result.result, isNewUser: false });
        router.push(PATH_TEMPLATE.main.home);
        toast.success("شما با موفقیت وارد شدید");
      }
    }
  };

  const resendCodeHandler = async () => {
    if (isResendActive && mobile) {
      try {
        const result = await login({ mobile });
        if (result.code === 200) resetTimer();
        else console.log("error!");
      } catch (error) {
        console.log(error);
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
        <Image
          src="/image/orange-glasses.svg"
          alt="orange-image"
          width={100}
          height={100}
        />
        <Button
          loadingContent={<Spinner size={"small"} className="text-white" />}
          variant="contained"
          color="primary"
          className="w-full"
          isDisable={isPending}
          isLoading={isPending}
        >
          تایید
        </Button>
      </form>
    </FormProvider>
  );
};

export default VerifyLoginForm;
