"use client";

import Avatar from "@/components/ui/Avatar/Avatar";
import FileInput from "@/components/ui/file-input/file-input";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  PersonalDetailsFormSchema,
  PersonalDetailsFormType,
} from "../../user-details/_models/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import { FaArrowRight } from "react-icons/fa6";

const PersonalDetails = () => {
  const isLoading = false;
  const methods = useForm<PersonalDetailsFormType>({
    resolver: zodResolver(PersonalDetailsFormSchema),
    mode: "onChange",
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<PersonalDetailsFormType> = (data) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 w-full">
        <Avatar
          alt="آواتار"
          className="bg-center bg-cover border border-muted rounded-full shadow-sm"
          rounded
          width="70px"
          height="70px"
          src="/avatars/boy-redhead.svg"
        />
        <FileInput
          fileType="all"
          isLoading={isLoading}
          title="آپلود آواتار جدید"
          uploadHandler={() => {}}
        />
      </div>
      <FormProvider {...methods}>
        <form className="form-center" onSubmit={handleSubmit(onSubmit)}>
          <Input
            errors={errors}
            label="نام"
            name="name"
            placeholder="نام شما ..."
            type="text"
          />
          <Input
            errors={errors}
            label="نام خانوادگی"
            name="family_name"
            placeholder="نام خانوادگی شما ..."
            type="text"
          />

          <Button
            startIcon={<FaArrowRight size="25" />}
            variant="contained"
            color="primary"
            className="w-full"
          >
            قدم بعدی
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default PersonalDetails;
