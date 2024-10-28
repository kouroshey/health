"use client";

import React, { useEffect, useState } from "react";

import { FaUser } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import Cookies from "js-cookie";

import BackPage from "@/components/layout/BackPage";
import { routes } from "@/store/local/routes.static";
import DietDetails from "./DietDetails";
import DietButtons from "./DietButtons";
import { useDietListByUser } from "../../../api/dietHooks";
import { dietIcon } from "../../_models/icon";
import { dietBase } from "../../_models/types";
import { COOKIES_TEMPLATE } from "@/lib/enumerations";
import { Spinner } from "@/components/ui/spinner/Spinner";

export default function DietManagement() {
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    setUserId(Cookies.get(COOKIES_TEMPLATE.user_id));
  }, []);

  const { data } = useDietListByUser({
    date: "1403/08/01",
    user_id: +userId,
  });
  const result = data?.result;

  const getDietByType = (type: string) =>
    result?.filter((meal) => meal.meal === type);

  const mealItems = dietBase.map((meal) => ({
    ...meal,
    icon: dietIcon[meal.type.toLowerCase()],
    meals: getDietByType(meal.type),
  }));

  return (
    <main className="flex flex-col">
      <BackPage title="مدیریت رژیم غذایی" link={`${routes.diet.root}`} />
      {userId.length > 0 ? (
        <>
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
              (meal, index) =>
                meal.meals &&
                meal.meals.length > 0 && (
                  <DietDetails
                    key={index}
                    meals={meal.meals}
                    title={meal.title}
                    icon={meal.icon}
                  />
                ),
            )}
          </div>
          <DietButtons />
        </>
      ) : (
        <div className="h-[40vh] flex-center">
          <Spinner size={"medium"} className="text-primary" />
        </div>
      )}
    </main>
  );
}
