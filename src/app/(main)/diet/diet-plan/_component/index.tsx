"use client";

import { useEffect, useState } from "react";

import Cookies from "js-cookie";

import { routes } from "@/store/local/routes.static";
import { useDietListByUser } from "../../_api/dietHooks";
import { dietIcon } from "../_models/icon";
import { dietBase } from "../_models/types";
import { COOKIES_TEMPLATE } from "@/lib/enumerations";
import { Spinner } from "@/components/ui/spinner/Spinner";
import BackPage from "@/components/layout/BackPage";
import DietDetails from "./DietDetails";
import DietButtons from "./DietButtons";
import usePersianDate from "@/hooks/usePersianDate";
import NewPlanButton from "../create-diet/_component/NewPlanButton";
import DietPlanDatePicker from "./DietPlanDatePicker";
import DietUserInfo from "./DietUserInfo";

export default function DietManagement() {
  const currentDate = usePersianDate();
  const [userId, setUserId] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>(currentDate);

  useEffect(() => {
    setUserId(Cookies.get(COOKIES_TEMPLATE.user_id));
  }, []);

  const { data, isPending } = useDietListByUser({
    date: selectedDate,
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

  const Loading = (
    <div className="h-[40vh] flex-center">
      <Spinner size={"medium"} className="text-primary" />
    </div>
  );

  return (
    <main className="flex flex-col relative mb-28">
      <BackPage title="مدیریت رژیم غذایی" link={`${routes.diet.root}`} />
      {userId.length > 0 ? (
        <>
          <DietUserInfo currentDate={currentDate} />
          <hr className="border rounded-md my-5" />
          <div className="flex items-center gap-1">
            <span>برنامه غذایی در تاریخ : </span>
            <DietPlanDatePicker onClick={(date) => setSelectedDate(date)} />
          </div>
          <hr className="border rounded-md my-5" />
          {!isPending ? (
            result && result.length > 1 && !isPending ? (
              <>
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
              <div className="flex-center h-[20vh] text-gray-500">
                برای این تاریخ برنامه غذایی پیدا نشد.
              </div>
            )
          ) : (
            Loading
          )}
          <NewPlanButton />
        </>
      ) : (
        Loading
      )}
    </main>
  );
}
