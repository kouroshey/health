"use client";

import Image from "next/image";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BiSolidMessage } from "react-icons/bi";
import Cookies from "js-cookie";

import { VerifyFormSchema, VerifyFormType } from "../_models/validations";
import { Input } from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import { COOKIES_TEMPLATE } from "@/lib/enumerations";
import { useLogin, useVerifyLogin } from "../../api/authHooks";
import { Spinner } from "@/components/ui/spinner/Spinner";
import { useResendTimer } from "@/hooks/useResendTimer";

const VerifyLoginForm = () => {
  const mobile: string = Cookies.get(COOKIES_TEMPLATE.mobile);

  const { isResendActive, activationTime } = useResendTimer(30);

  const methods = useForm<VerifyFormType>({
    resolver: zodResolver(VerifyFormSchema),
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { errors, isValid },
  } = methods;

  const { mutate: verifyLogin, isPending } = useVerifyLogin();
  const { mutate: login, isPending: resendPending } = useLogin();

  const onSubmit: SubmitHandler<VerifyFormType> = async (data) => {
    if (mobile) {
      verifyLogin({ mobile, otp_token: data.otp_token });
    }
  };

  const resendCodeHandler = async () => {
    if (isResendActive && mobile) {
      login({ mobile });
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
          <Spinner size={"small"} className="text-primary" />
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
          isDisable={isPending || !isValid}
          isLoading={isPending}
        >
          تایید
        </Button>
      </form>
    </FormProvider>
  );
};

export default VerifyLoginForm;
