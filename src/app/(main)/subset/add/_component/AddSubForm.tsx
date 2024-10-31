"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/ui/button/button";
import { Input } from "@/components/ui/input/input";
import { AddSubFormSchema, AddSubFormType } from "../_models/validation";
import { ReactSelectInput } from "@/components/ui/input/ReactSelectInput";
import { useEffect, useState } from "react";
import { Option, SelectOptions } from "@/components/ui/input/types";
import { DateInput } from "@/components/ui/date-input/DateInput";
import { useRouter } from "next/navigation";
import {
  useAddSubset,
  useCitiesList,
  useProvincesList,
} from "../../api/subsetHooks";
import { NameId } from "../../api/types/response";
import { Spinner } from "@/components/ui/spinner/Spinner";
import Loader from "@/components/ui/loader/Loader";
import { AddSubsetRequest } from "../../api/types/request";
import { PATH_TEMPLATE } from "@/lib/enumerations";

const AddSubForm = () => {
  const [provinces, setProvinces] = useState<SelectOptions>();
  const [cities, setCities] = useState<SelectOptions>();
  const [activeProvince, setActiveProvince] = useState<Option>();
  const [activeCity, setActiveCity] = useState<Option>({
    value: "",
    label: "",
  });
  const { data: provinceList, isPending: isPendingProvinces } =
    useProvincesList();
  const { mutateAsync: addSubset, isPending: isAddingSubset } = useAddSubset();

  const {
    data: citiesList,
    isLoading: isLoadingCities,
    refetch: refetchCities,
  } = useCitiesList({
    province_id: activeProvince?.value || "",
  });

  useEffect(() => {
    if (provinceList) {
      const modifyProvinces = (provinces: NameId[]): SelectOptions => {
        return provinces.map((province) => ({
          value: province.id.toString(),
          label: province.name,
        }));
      };
      setProvinces(modifyProvinces(provinceList.result));
    }
    if (activeProvince) {
      refetchCities();
    }
  }, [activeProvince, provinceList, refetchCities]);

  useEffect(() => {
    if (citiesList) {
      const modifyCities = (cities: NameId[]): SelectOptions => {
        return cities.map((city) => ({
          value: city.id.toString(),
          label: city.name,
        }));
      };
      setCities(modifyCities(citiesList.result));
    }
  }, [citiesList]);

  const [genderOptions] = useState<SelectOptions>([
    { label: "مذکر", value: "1" },
    { label: "مونث", value: "0" },
  ]);

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
    formState: { errors, isValid },
    setValue,
  } = methods;

  const onSubmit: SubmitHandler<AddSubFormType> = (data) => {
    const addSubsetParams: AddSubsetRequest = {
      name: data.name,
      lastname: data.lastname,
      birthdate: data.birthdate.toString(),
      city_id: activeCity.value || data.city.value,
      province_id: activeProvince?.value || data.province.value,
      gender: Number(activeGender.value),
      height: data.height,
      weight: data.weight,
    };
    addSubset(addSubsetParams).then((res) => {
      if (res.isSuccess) {
        router.push(PATH_TEMPLATE.main.home);
      }
    });
  };

  return (
    <div className="h-full">
      {!provinces ? (
        <Loader />
      ) : (
        <>
          <p className="text-gray-500 my-4 text-sm md:text-md">
            لطفا تمامی فیلد‌ها را پر کرده و در آخر دکمه‌ی «افزودن» را بفشارید.
          </p>
          <div className="w-full  p-4">
            <FormProvider {...methods}>
              <form
                className="w-full flex flex-col justify-between gap-6 items-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  type="text"
                  label="نام"
                  name="name"
                  placeholder="نام خود را وارد کنید"
                  errors={errors}
                  minLength={2}
                />
                <Input
                  type="text"
                  label="نام خانوادگی"
                  name="lastname"
                  placeholder="نام خانوادگی را وارد کنید"
                  errors={errors}
                  minLength={3}
                />
                <DateInput
                  label="تاریخ تولد"
                  name="birthdate"
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
                  name="gender"
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
                  options={provinces}
                  setValue={(value) => {
                    setActiveProvince(value);
                    setValue("province", value);
                  }}
                />
                {isLoadingCities ? (
                  <Spinner className="text-primary" />
                ) : !isLoadingCities && cities ? (
                  <ReactSelectInput
                    isMulti={false}
                    errors={errors}
                    label="شهر"
                    name="city"
                    options={
                      cities || [
                        {
                          label: "لطفا استان مورد نظر را وارد کنید",
                          value: "",
                        },
                      ]
                    }
                    setValue={(value) => {
                      setActiveCity(value);
                      setValue("city", value);
                      console.log(methods.getValues());
                    }}
                  />
                ) : (
                  ""
                )}
                <Button
                  variant="contained"
                  color="primary"
                  className="w-full"
                  isDisable={
                    isLoadingCities ||
                    isPendingProvinces ||
                    !isValid ||
                    activeCity.label.length === 0 ||
                    isAddingSubset
                  }
                  isLoading={isLoadingCities || isPendingProvinces}
                  loadingContent={
                    <Spinner size={"small"} className="text-white" />
                  }
                >
                  افزودن
                </Button>
              </form>
            </FormProvider>
          </div>
        </>
      )}
    </div>
  );
};

export default AddSubForm;
