"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import Image from "next/image";
import {
  SignupFormSchema,
  SignupFormType,
} from "@/app/auth/signup/_models/validations";
// import { useSignup } from "../../api/authHooks";
import { useState } from "react";
import { Option, SelectOptions } from "@/components/ui/input/types";
import { ReactSelectInput } from "@/components/ui/input/ReactSelectInput";

const SignupForm = () => {
  // const { mutateAsync: signup } = useSignup();
  const [genderOptions] = useState<SelectOptions>([
    { label: "مذکر", value: "male" },
    { label: "مونث", value: "female" },
  ]);
  const [activeGender, setActiveGender] = useState<Option>({
    value: "",
    label: "",
  });
  const methods = useForm<SignupFormType>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      name: "",
      lastname: "",
      gender: activeGender,
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = methods;

  const onSubmit: SubmitHandler<SignupFormType> = async () => {
    // const result = await signup(data);
    // if (result.code == 200) {
    //   console.log(result);
    // } else {
    //   console.log("error!");
    // }
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
        <Image
          src="/image/orange.svg"
          alt="orange-image"
          width={100}
          height={100}
        />
        <Button variant="contained" color="primary" className="w-full">
          ثبت نام
        </Button>
      </form>
    </FormProvider>
  );
};

export default SignupForm;
