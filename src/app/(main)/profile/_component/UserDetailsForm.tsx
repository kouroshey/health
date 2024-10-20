import React, { Dispatch, SetStateAction } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  PersonalDetailsFormSchema,
  PersonalDetailsFormType,
} from "@/app/(main)/profile/_models/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import Avatar from "@/components/ui/Avatar/Avatar";
import FileInput from "@/components/ui/file-input/file-input";

interface UserDetailsProps {
  isEditMode: boolean;
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
}

const UserDetailsForm: React.FC<UserDetailsProps> = ({ setIsEditMode }) => {
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
    setIsEditMode(false);
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
          src="/user-avatar-placeholder.png"
        />
        <FileInput
          fileType="all"
          isLoading={isLoading}
          title="آپلود پروفایل جدید"
          uploadHandler={() => {}}
        />
      </div>
      <FormProvider {...methods}>
        <form className="form-center" onSubmit={handleSubmit(onSubmit)}>
          <Input
            errors={errors}
            label="نام"
            placeholder="نام خود را وارد کنید"
            name="name"
            type="text"
          />
          <Input
            errors={errors}
            label="نام خانوادگی"
            name="lastname"
            placeholder="نام خانوادگی خود را وارد کنید"
            type="text"
          />

          <Button
            variant="contained"
            color="primary"
            className="w-full"
            size="sm"
          >
            ثبت
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default UserDetailsForm;
