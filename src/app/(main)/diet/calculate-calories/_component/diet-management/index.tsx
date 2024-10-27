"use client";

import React from "react";

import { FaUser } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";

import BackPage from "@/components/layout/BackPage";
import { routes } from "@/store/local/routes.static";
import DietDetails from "./DietDetails";
import DietButtons from "./DietButtons";
import { useDietListByUser } from "../../../api/dietHooks";
import { dietIcon } from "../../_models/icon";
import { dietBase } from "../../_models/types";

export default function DietManagement() {
  const { data } = useDietListByUser({ date: "1403/08/01", user_id: 4 });

  const getDietByType = (type: string) =>
    data?.filter((meal) => meal.meal === type);

  const mealItems = dietBase.map((meal) => ({
    ...meal,
    icon: dietIcon[meal.type.toLowerCase()],
    meals: getDietByType(meal.type),
  }));

  return (
    <main className="flex flex-col">
      <BackPage
        title="مدیریت رژیم غذایی"
        link={`${routes.diet.root}/${routes.diet.calculateCalories}`}
      />
      <div className="flex text-sm md:text-md justify-between items-center flex-col text-gray-600">
        <p className="flex gap-1 items-center">
          <span className="flex gap-1 items-center">
            <FaUser />
            <span className="font-bold">نام کاربر: </span>
          </span>
          <span>سعیده موسوی</span>
        </p>
        <p className="flex gap-1 items-center">
          <span className="flex gap-1 items-center">
            <MdOutlineTimer />
            <span className="font-bold">تاریخ: </span>
          </span>
          <span>۱۴۰۳/۶/۲۳</span>
        </p>
      </div>
      <hr className="border rounded-md my-5" />
      <div className="flex flex-col gap-5">
        {mealItems.map(
          (meal) =>
            meal.meals &&
            meal.meals.length > 0 && (
              <DietDetails
                key={meal.icon}
                meals={meal.meals}
                title={meal.title}
                icon={meal.icon}
              />
            ),
        )}
      </div>
      <DietButtons />
    </main>
  );
}
