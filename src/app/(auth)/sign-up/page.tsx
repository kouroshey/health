"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { LoginFormSchema, LoginFormType } from "./models/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/button/button";
import { Input } from "@/components/ui/input/input";

const SignUpPage = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onChange",
    defaultValues: {
      age: "",
      family_name: "",
      name: "",
    },
  });
  const methods = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onChange",
    defaultValues: {
      age: "",
      family_name: "",
      name: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormType> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-fit rounded-xl flex justify-center items-center gap-3 px-3 tablet:px-1 desktop:px-6 backdrop-blur-lg">
      {/* <SignUpForm /> */}
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            label="First Name"
            placeholder="Enter your First Name"
            name="firstName"
            errors={errors}
          />
          <Button variant="contained" color="primary">
            ثبت نام
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignUpPage;
