"use client";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { VerifyFormSchema, VerifyFormType } from "../_models/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import { BiSolidMessage } from "react-icons/bi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getCookie, removeCookie, setCookie } from "@/lib/helpers/cookie";
import { COOKIES_TEMPLATE, PATH_TEMPLATE } from "@/lib/enumerations";
import { useEffect, useState } from "react";
import { useLogin, useVerifyLogin } from "../../api/authHooks";
import { useUserActions } from "@/store/users";
import toast from "react-hot-toast";
import { Spinner } from "@/components/ui/spinner/Spinner";

const VerifyLoginForm = () => {
  const { mutateAsync: verifyLogin, isPending } = useVerifyLogin();
  const { mutateAsync: login } = useLogin();
  const { setUser } = useUserActions();

  const [isResendActive, setIsResendActive] = useState(false);
  const [mobile, setMobile] = useState("");
  const [activationTime, setActivationTime] = useState(30);

  useEffect(() => {
    const getMobileFromCookie = async () => {
      const mobileNumber = await getCookie(COOKIES_TEMPLATE.mobile);
      if (mobileNumber) {
        setMobile(mobileNumber.value);
      } else {
        router.push(PATH_TEMPLATE.auth.login);
      }
    };
    getMobileFromCookie();
  });

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
        await setCookie(
          COOKIES_TEMPLATE.accessToken,
          result.result?.accessToken,
        );
        removeCookie(COOKIES_TEMPLATE.mobile);
        removeCookie(COOKIES_TEMPLATE.otpCode);
        setUser({ ...result.result, isNewUser: false });
        router.push(PATH_TEMPLATE.main.home);
        toast.success("شما با موفقیت وارد شدید");
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
        <Image
          src="/image/orange-glasses.svg"
          alt="orange-image"
          width={100}
          height={100}
        />
        <Button
          loadingContent={<Spinner size={"small"} />}
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
