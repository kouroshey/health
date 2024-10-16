import BackPage from "@/components/layout/BackPage";
import { routes } from "@/store/local/routes.static";
import React from "react";
import { FaUser } from "react-icons/fa6";
import { MdOutlineFreeBreakfast, MdOutlineTimer } from "react-icons/md";
import SaladImg from "public/salad.png";
import MealDetails, { MealItem } from "./_component/page";
import { PiBowlFood } from "react-icons/pi";
import { RiDrinksLine } from "react-icons/ri";
import { BiCheese } from "react-icons/bi";
import { CiPizza, CiSaveDown2 } from "react-icons/ci";
import Button from "@/components/ui/button/button";
import { IoReturnDownBack, IoShareSocialSharp } from "react-icons/io5";

const items: MealItem[] = [
  {
    img: SaladImg,
    title: "سالاد شیرازی",
    callories: "۱۵۰",
    weight: "۱۸۰",
  },
  {
    img: SaladImg,
    title: "سالاد شیرازی",
    callories: "۱۵۰",
    weight: "۱۸۰",
  },
  {
    img: SaladImg,
    title: "سالاد شیرازی",
    callories: "۱۵۰",
    weight: "۱۸۰",
  },
];

export default function Mealmanagement() {
  return (
    <main className="flex flex-col gap-6">
      <BackPage
        title="مدیریت رژیم غذایی"
        link={`${routes.diet.root}/${routes.diet.calculateCalories}`}
      />
      <div className="flex text-sm md:text-md justify-between items-center text-gray-600">
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
      <hr className="border rounded-md" />
      <div className="flex flex-col gap-5">
        <MealDetails
          items={items}
          label="صبحانه"
          icon={<MdOutlineFreeBreakfast />}
        />
        <MealDetails
          items={items.slice(2)}
          label="میان وعده"
          icon={<RiDrinksLine />}
        />
        <MealDetails
          items={items.slice(1)}
          label="ناهار"
          icon={<PiBowlFood />}
        />
        <MealDetails
          items={items.slice(1)}
          label="میان وعده"
          icon={<BiCheese />}
        />
        <MealDetails items={items} label="شام" icon={<CiPizza />} />
      </div>
      <div className="flex gap-2 justify-between">
        <div className="flex gap-2">
          <Button
            className="text-white"
            size="sm"
            color="success"
            endIcon={<CiSaveDown2 />}
          >
            ذخیره
          </Button>
          <Button
            className="text-white"
            size="sm"
            color="error"
            endIcon={<IoReturnDownBack />}
          >
            بازگشت
          </Button>
        </div>
        <Button
          size="sm"
          color="primary"
          className="mr-auto"
          endIcon={<IoShareSocialSharp />}
        />
      </div>
    </main>
  );
}
