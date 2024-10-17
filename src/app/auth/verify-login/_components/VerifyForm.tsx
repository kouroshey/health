"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { VerifyFormSchema, VerifyFormType } from "../_models/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import { BiSolidMessage } from "react-icons/bi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const VerifyLoginForm = () => {
  const methods = useForm<VerifyFormType>({
    resolver: zodResolver(VerifyFormSchema),
    mode: "onChange",
  });
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<VerifyFormType> = () => {
    Cookies.set("is_verified", "true", { expires: 7 });
    router.push("/");
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
          name="verify_code"
          icon={<BiSolidMessage color="gray" />}
          errors={errors}
          maxLength={5}
        />
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
