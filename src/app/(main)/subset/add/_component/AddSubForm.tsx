"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/ui/button/button";
import { Input } from "@/components/ui/input/input";
import { AddSubFormSchema, AddSubFormType } from "../_models/validation";
import { ReactSelectInput } from "@/components/ui/input/ReactSelectInput";
import { useState } from "react";
import { Option, SelectOptions } from "@/components/ui/input/types";
import { DateInput } from "@/components/ui/date-input/DateInput";
import { useRouter } from "next/navigation";
import { routes } from "@/store/local/routes.static";

const AddSubForm = () => {
  const [citiesOptions] = useState<SelectOptions>([
    { value: "teh", label: "تهران" },
    { value: "esf", label: "اصفهان" },
    { value: "msh", label: "مشهد" },
    { value: "shz", label: "شیراز" },
    { value: "tbz", label: "تبریز" },
    { value: "ahv", label: "اهواز" },
    { value: "qom", label: "قم" },
    { value: "kar", label: "کرج" },
    { value: "ksh", label: "کرمانشاه" },
    { value: "rsh", label: "رشت" },
    { value: "urd", label: "ارومیه" },
  ]);
  const [genderOptions] = useState<SelectOptions>([
    { label: "مذکر", value: "male" },
    { label: "مونث", value: "female" },
  ]);
  const [activeCity, setActiveCity] = useState<Option>({
    value: "",
    label: "",
  });
  const [activeProvince, setActiveProvince] = useState<Option>({
    value: "",
    label: "",
  });
  const [activeGender, setActiveGender] = useState<Option>({
    value: "",
    label: "",
  });

  const router = useRouter();

  const methods = useForm<AddSubFormType>({
    resolver: zodResolver(AddSubFormSchema),
    mode: "onChange",
    defaultValues: {
      city: activeCity,
      province: activeProvince,
      gender: activeGender,
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = methods;

  const onSubmit: SubmitHandler<AddSubFormType> = (data) => {
    console.log(data);
    router.push(routes.subset.root);
  };

  return (
    <>
      <p className="text-gray-500 my-4 text-sm md:text-md">
        لطفا تمامی فیلد‌ها را پر کرده و در آخر دکمه‌ی «افزودن» را بفشارید.
      </p>
      <div className="w-full border border-gray-100 bg-slate-50 rounded-md p-4">
        <FormProvider {...methods}>
          <form
            className="w-full flex flex-col justify-between gap-6 items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              type="text"
              label="نام و نام خانوادگی"
              name="fullName"
              placeholder="نام و نام خانوادگی را وارد کنید"
              errors={errors}
              minLength={5}
            />
            <DateInput
              label="تاریخ تولد"
              name="birthDate"
              errors={errors}
              placeholder="تاریخ تولد را وارد کنید"
              isStartDate={true}
            />
            <Input
              type="number"
              label="وزن (کیلوگرم)"
              name="weight"
              placeholder="مثال: ۶۰"
              errors={errors}
            />
            <Input
              type="number"
              label="قد (سانتی‌متر)"
              placeholder="مثال: ۱۷۰"
              name="height"
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
            <ReactSelectInput
              isMulti={false}
              errors={errors}
              label="استان"
              name="province"
              options={citiesOptions}
              setValue={(value) => {
                setActiveProvince(value);
                setValue("province", value);
              }}
            />
            <ReactSelectInput
              isMulti={false}
              errors={errors}
              label="شهر"
              name="city"
              options={citiesOptions}
              setValue={(value) => {
                setActiveCity(value);
                setValue("city", value);
              }}
            />
            <Button variant="contained" color="primary" className="w-full">
              افزودن
            </Button>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default AddSubForm;
