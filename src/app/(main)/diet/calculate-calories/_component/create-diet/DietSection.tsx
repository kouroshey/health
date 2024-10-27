"use client";

import { DietItemT } from "../../_models/types";

export default function DietSection({
  title,
  icon,
  meals,
  register,
  type,
}: DietItemT) {
  return (
    <div>
      <p className="text-md flex gap-1 items-center mb-3 after:absolute after:rounded-md after:right-0 after:w-full w-max after:h-[1px] after:bottom-0 after:bg-primary-500 relative">
        {icon}
        {title}
      </p>
      <div className="grid grid-cols-2 gap-4 items-center overflow-hidden">
        {meals?.map((item, index) => (
          <label key={index} className="flex items-center gap-1 w-max">
            <input
              type="radio"
              value={item.food}
              {...register(type)}
              className="appearance-none h-6 w-6 border border-primary-500 rounded-sm checked:bg-primary-500 checked:border-transparent focus:outline-none relative"
            />
            <span className="ml-2 w-max text-sm md:text-md text-gray-600">
              ({item.calorie}) {item.food}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
