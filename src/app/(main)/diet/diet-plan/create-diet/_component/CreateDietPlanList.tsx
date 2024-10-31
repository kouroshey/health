"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";

import Button from "@/components/ui/button/button";
import { useCreateDietPlan, useFoodsList } from "../../../_api/dietHooks";
import { DietPlanFormType, dietPlanSchema } from "../../_models/validations";
import { CreateDietPlanParams } from "../../../_api/types/request";
import { Spinner } from "@/components/ui/spinner/Spinner";
import { COOKIES_TEMPLATE } from "@/lib/enumerations";
import { routes } from "@/store/local/routes.static";
import DateSelection from "./DateSelection";
import BackPage from "@/components/layout/BackPage";
import UserDetails from "./UserDetails";
import { useMealItems } from "../_hooks/useMealItems";
import DietSelection from "./DietSelection";

export default function CreateDietPlanList() {
  const { data: foodsData } = useFoodsList();
  const foodsList = foodsData?.result;
  const mealItems = useMealItems(foodsList);
  const { mutate: createPlan, isPending, isError } = useCreateDietPlan();

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { isValid },
  } = useForm<DietPlanFormType>({
    resolver: zodResolver(dietPlanSchema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    const user_id = await Cookies.get(COOKIES_TEMPLATE.user_id);
    const meals = [
      formData.breakfast,
      formData.snack1,
      formData.lunch,
      formData.snack2,
      formData.dinner,
    ]
      .filter((meal) => meal)
      .map((meal) => ({
        food_id: meal.food_id,
        meal: meal.meal,
      }));

    const result: CreateDietPlanParams = {
      user_id: user_id ? +user_id : 463782278362,
      meals,
      date: formData.Date,
    };

    await createPlan(result);
    if (!isPending && !isError) reset();
  };

  const handleDateSelect = (selectedDate: string) => {
    setValue("Date", selectedDate);
  };

  return (
    <>
      <BackPage
        title="برنامه غذایی جدید"
        link={`${routes.diet.root}${routes.diet.dietPlan}`}
      />
      <UserDetails />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto py-6 rounded-md flex flex-col gap-8"
      >
        <p className="text-gray-500 text-sm md:text-md">
          لطفا جهت تولید رژیم غذایی مناسب شما، تمامی فیلد‌ها را پر کرده و در آخر
          دکمه‌ی «ثبت» را بفشارید.
        </p>
        <DateSelection control={control} handleDateSelect={handleDateSelect} />
        <DietSelection control={control} mealItems={mealItems} />
        <Button
          isDisable={!isValid}
          loadingContent={<Spinner size="small" className="text-white" />}
          isLoading={isPending}
        >
          ثبت
        </Button>
      </form>
    </>
  );
}
