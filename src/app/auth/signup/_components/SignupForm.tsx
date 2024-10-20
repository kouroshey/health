"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import { SignUpFormSchema, SignUpFormType } from "../_models/validations";
// import { useSignUp } from "../../api/authHooks";
import { useState } from "react";
import { Option, SelectOptions } from "@/components/ui/input/types";
import { ReactSelectInput } from "@/components/ui/input/ReactSelectInput";

const SignUpForm = () => {
  // const { mutateAsync: signUp } = useSignUp();
  const [genderOptions] = useState<SelectOptions>([
    { label: "مذکر", value: "male" },
    { label: "مونث", value: "female" },
  ]);
  const [activeGender, setActiveGender] = useState<Option>({
    value: "",
    label: "",
  });
  const methods = useForm<SignUpFormType>({
    resolver: zodResolver(SignUpFormSchema),
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

  const onSubmit: SubmitHandler<SignUpFormType> = async () => {
    // const result = await signUp(data);
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
        <Button variant="contained" color="primary" className="w-full">
          ثبت نام
        </Button>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
