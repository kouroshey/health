"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";

import Button from "@/components/ui/button/button";
import { useCreateDietPlan, useDietList } from "../../../api/dietHooks";
import { MealPlanFormType, mealPlanSchema } from "../../_models/validations";
import { CreateDietPlanParams } from "../../../api/types/request";
import usePersianDate from "@/hooks/usePersianDate";
import { Spinner } from "@/components/ui/spinner/Spinner";
import MealSection from "./DietSection";
import { dietIcon } from "../../_models/icon";
import { dietBase } from "../../_models/types";
import { COOKIES_TEMPLATE } from "@/lib/enumerations";

export default function MealPlanList() {
  const { data } = useDietList();
  const result = data?.result;
  const { mutate: createPlan, isPending } = useCreateDietPlan();
  const nowDate = usePersianDate();

  const getDietByType = (type: string) =>
    result?.filter((meal) => meal.meal === type);

  const mealItems = dietBase.map((meal) => ({
    ...meal,
    icon: dietIcon[meal.type.toLowerCase()],
    meals: getDietByType(meal.type),
  }));

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<MealPlanFormType>({
    resolver: zodResolver(mealPlanSchema),
  });

  const onSubmit: SubmitHandler<MealPlanFormType> = async () => {
    const user_id: string = await Cookies.get(COOKIES_TEMPLATE.user_id);
    let id = 0;
    const result: CreateDietPlanParams = {
      // back: getting user_id from cookie
      user_id: +user_id,
      meals: [
        { food_id: id++, meal: id++ },
        { food_id: id++, meal: id++ },
      ],
      date: nowDate,
    };
    await createPlan(result);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto py-6 rounded-md flex flex-col gap-8"
    >
      <p className="text-gray-500 text-sm md:text-md">
        لطفا جهت تولید رژیم غذایی مناسب شما، تمامی فیلد‌ها را پر کرده و در آخر
        دکمه‌ی «ثبت» را بفشارید.
      </p>
      {mealItems.map((meal) => (
        <MealSection
          key={meal.type}
          title={meal.title}
          icon={meal.icon}
          meals={meal.meals}
          register={register}
          type={meal.type as keyof MealPlanFormType}
        />
      ))}
      <Button
        isDisable={!isValid}
        loadingContent={<Spinner size={"small"} className="text-white" />}
        isLoading={isPending}
      >
        ثبت
      </Button>
    </form>
  );
}
