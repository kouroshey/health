"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/ui/button/button";
import { Input } from "@/components/ui/input/input";
import { AddSubFormSchema, AddSubFormType } from "../_models/validation";

const AddSubForm = () => {
  const methods = useForm<AddSubFormType>({
    resolver: zodResolver(AddSubFormSchema),
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<AddSubFormType> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full border rounded-md p-4">
      <FormProvider {...methods}>
        <form
          className="w-full flex flex-col justify-between gap-6 items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="text"
            label="نام و نام خانوادگی"
            name="fullName"
            errors={errors}
            minLength={5}
          />
          <Input
            type="date"
            label="تاریخ تولد"
            name="birthDate"
            errors={errors}
          />
          {/* <label htmlFor="gender">جنسیت</label>
          <select name="gender">
            <option value="مذکر">مذکر</option>
            <option value="مونث">مونث</option>
          </select> */}
          {/* <Input type="0" label="جنسیت" name="gender" errors={errors} /> */}
          <Input type="number" label="وزن" name="weight" errors={errors} />
          <Input type="number" label="قد" name="height" errors={errors} />
          <Input type="text" label="استان" name="province" errors={errors} />
          <Input type="text" label="شهر" name="city" errors={errors} />
          <Button variant="contained" color="primary" className="w-full">
            افزودن
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddSubForm;
