"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MealPlanFormType, mealPlanSchema } from "../_models/validations";
import { meals } from "@/store/local/mealPlan.static";
import Button from "@/components/ui/button/button";
import { useRouter } from "next/navigation";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { RiDrinksLine } from "react-icons/ri";
import { CiPizza } from "react-icons/ci";
import { BiCheese } from "react-icons/bi";
import { PiBowlFood } from "react-icons/pi";
import { routes } from "@/store/local/routes.static";

export default function MealPlan() {
  const {
    register,
    // handleSubmit,
    formState: { errors, isValid },
  } = useForm<MealPlanFormType>({
    resolver: zodResolver(mealPlanSchema),
  });
  const router = useRouter();

  // const onSubmit: SubmitHandler<MealPlanFormType> = (data) => {
  //   console.log(data);
  //   console.log(isValid);
  // };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(
          `${routes.diet.calculateCalories}/${routes.diet.mealManagement}`,
          { scroll: false },
        );
      }}
      className="max-w-md mx-auto py-6 rounded-md flex flex-col gap-8"
    >
      {/* صبحانه */}
      <div>
        <p className="text-gray-500 mb-4 text-sm md:text-md">
          لطفا جهت تولید رژیم غذایی مناسب شما، تمامی فیلد‌ها را پر کرده و در آخر
          دکمه‌ی «ثبت» را بفشارید.
        </p>
        <p className="text-md flex gap-1 items-center mb-3 after:absolute after:rounded-md after:right-0 after:w-full w-max after:h-[1px] after:bottom-0 after:bg-primary-500 relative">
          <MdOutlineFreeBreakfast />
          صبحانه
        </p>
        <div className="grid grid-cols-2 gap-4 items-center overflow-hidden">
          {meals.breakfast.map((item) => (
            <label key={item.id} className="flex items-center gap-1 w-max">
              <input
                type="radio"
                value={item.value}
                {...register("breakfast")}
                className="appearance-none h-6 w-6 border border-primary-500 rounded-sm checked:bg-primary-500 checked:border-transparent focus:outline-none relative"
              />
              <span className="ml-2 w-max text-sm md:text-md text-gray-600">
                {item.label}
              </span>
            </label>
          ))}
          <div
            id="left-indicator"
            className="absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-gray-400 to-transparent pointer-events-none opacity-0 transition-opacity duration-300"
          ></div>
        </div>
        {errors.breakfast?.message && (
          <p className="text-red-500 text-sm mt-1">
            {errors.breakfast.message.toString()}
          </p>
        )}
      </div>

      {/* میان وعده ۱ */}
      <div>
        <p className="text-md mb-3 flex gap-1 items-center after:absolute after:rounded-md after:right-0 after:w-full w-max after:h-[1px] after:bottom-0 after:bg-primary-500 relative">
          <RiDrinksLine />
          میان وعده
        </p>
        <div className="grid grid-cols-2 gap-4 items-center overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
          {meals.snack1.map((item) => (
            <label key={item.id} className="flex items-center gap-1 w-max">
              <input
                type="radio"
                value={item.value}
                {...register("snack1")}
                className="appearance-none h-4 w-4 border border-primary-500 rounded-sm checked:bg-primary-500 checked:border-transparent focus:outline-none"
              />
              <span className="ml-2 w-max text-sm md:text-md text-gray-600">
                {item.label}
              </span>
            </label>
          ))}
          <div
            id="left-indicator"
            className="absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-gray-400 to-transparent pointer-events-none opacity-0 transition-opacity duration-300"
          ></div>
        </div>
        {errors.snack1?.message && (
          <p className="text-red-500 text-sm mt-1">
            {errors.snack1.message.toString()}
          </p>
        )}
      </div>

      {/* ناهار */}
      <div>
        <p className="text-md mb-3 flex gap-1 items-center after:absolute after:rounded-md after:right-0 after:w-full w-max after:h-[1px] after:bottom-0 after:bg-primary-500 relative">
          <PiBowlFood />
          ناهار
        </p>
        <div className="grid grid-cols-2 gap-4 items-center overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
          {meals.lunch.map((item) => (
            <label key={item.id} className="flex items-center gap-1 w-max">
              <input
                type="radio"
                value={item.value}
                {...register("lunch")}
                className="appearance-none h-4 w-4 border border-primary-500 rounded-sm checked:bg-primary-500 checked:border-transparent focus:outline-none"
              />
              <span className="ml-2 w-max text-sm md:text-md text-gray-600">
                {item.label}
              </span>
            </label>
          ))}
          <div
            id="left-indicator"
            className="absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-gray-400 to-transparent pointer-events-none opacity-0 transition-opacity duration-300"
          ></div>
        </div>
        {errors.lunch?.message && (
          <p className="text-red-500 text-sm mt-1">
            {errors.lunch.message.toString()}
          </p>
        )}
      </div>

      {/* میان وعده ۲ */}
      <div>
        <p className="text-md mb-3 flex gap-1 items-center after:absolute after:rounded-md after:right-0 after:w-full w-max after:h-[1px] after:bottom-0 after:bg-primary-500 relative">
          <BiCheese />
          میان وعده
        </p>
        <div className="grid grid-cols-2 gap-4 items-center overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
          {meals.snack2.map((item) => (
            <label key={item.id} className="flex items-center gap-1 w-max">
              <input
                type="radio"
                value={item.value}
                {...register("snack2")}
                className="appearance-none h-4 w-4 border border-primary-500 rounded-sm checked:bg-primary-500 checked:border-transparent focus:outline-none"
              />
              <span className="ml-2 w-max text-sm md:text-md text-gray-600">
                {item.label}
              </span>
            </label>
          ))}
          <div
            id="left-indicator"
            className="absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-gray-400 to-transparent pointer-events-none opacity-0 transition-opacity duration-300"
          ></div>
        </div>
        {errors.snack2?.message && (
          <p className="text-red-500 text-sm mt-1">
            {errors.snack2.message.toString()}
          </p>
        )}
      </div>

      {/* شام */}
      <div>
        <p className="text-md mb-3 flex gap-1 items-center after:absolute after:rounded-md after:right-0 after:w-full w-max after:h-[1px] after:bottom-0 after:bg-primary-500 relative">
          <CiPizza />
          شام
        </p>
        <div className="grid grid-cols-2 gap-4 items-center overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
          {meals.dinner.map((item) => (
            <label key={item.id} className="flex items-center gap-1 w-max">
              <input
                type="radio"
                value={item.value}
                {...register("dinner")}
                className="appearance-none h-4 w-4 border border-primary-500 rounded-sm checked:bg-primary-500 checked:border-transparent focus:outline-none"
              />
              <span className="ml-2 w-max text-sm md:text-md text-gray-600">
                {item.label}
              </span>
            </label>
          ))}
          <div
            id="left-indicator"
            className="absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-gray-400 to-transparent pointer-events-none opacity-0 transition-opacity duration-300"
          ></div>
        </div>
        {errors.dinner?.message && (
          <p className="text-red-500 text-sm mt-1">
            {errors.dinner.message.toString()}
          </p>
        )}
      </div>

      <Button isDisable={!isValid}>ثبت</Button>
    </form>
  );
}
