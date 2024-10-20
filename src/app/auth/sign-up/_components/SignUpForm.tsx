"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import { SignUpFormSchema, SignUpFormType } from "../_models/validations";
import { useSignUp } from "../../api/authHooks";
import { useEffect, useState } from "react";
import { Option, SelectOptions } from "@/components/ui/input/types";
import { ReactSelectInput } from "@/components/ui/input/ReactSelectInput";
import { useUserActions } from "@/store/users";
import { getCookie } from "@/lib/helpers/cookie";
import { COOKIES_TEMPLATE, PATH_TEMPLATE } from "@/lib/enumerations";
import { useRouter } from "next/navigation";
import { BiSolidMessage } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import toast from "react-hot-toast";

const SignUpForm = () => {
  const { mutateAsync: signUp } = useSignUp();
  const { setUser } = useUserActions();

  const router = useRouter();

  const [genderOptions] = useState<SelectOptions>([
    { label: "مذکر", value: "1" },
    { label: "مونث", value: "0" },
  ]);
  const [activeGender, setActiveGender] = useState<Option>({
    value: "",
    label: "",
  });

  useEffect(() => {
    const getMobileFromCookie = async () => {
      const mobileNumber = await getCookie(COOKIES_TEMPLATE.mobile);
      if (mobileNumber) {
        setValue("mobile", mobileNumber.value);
      } else {
        router.push(PATH_TEMPLATE.auth.login);
      }
    };
    getMobileFromCookie();
  }, []);

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
    if (result.code == 200) {
      console.log(result);
      setUser({ ...result, isNewUser: false });
      router.push(PATH_TEMPLATE.auth.verifyLogin);
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
        <Button variant="contained" color="primary" className="w-full">
          ثبت نام
        </Button>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
