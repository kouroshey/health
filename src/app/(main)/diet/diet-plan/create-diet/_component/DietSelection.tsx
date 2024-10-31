import { Control, Controller } from "react-hook-form";
import DietSection from "./DietSection";
import { DietPlanFormType } from "../../_models/validations";
import { DietBaseItem } from "../../_models/types";

export interface MealItem extends DietBaseItem {
  icon: JSX.Element;
  meals: {
    food_id: number;
    food: string;
    calorie: number;
    meal: string;
  }[];
}

export type DietSelectionProps = {
  control: Control<DietPlanFormType>;
  mealItems: MealItem[];
};

export default function DietSelection({
  control,
  mealItems,
}: DietSelectionProps) {
  return (
    <div>
      <h3 className="text-lg">انتخاب وعده های غذایی</h3>
      <hr className="border rounded-md mb-8" />
      <div className="flex flex-col gap-5">
        {mealItems.map((meal) => (
          <Controller
            key={meal.type}
            control={control}
            name={meal.inputType}
            render={({ field }) => (
              <DietSection
                title={meal.title}
                icon={meal.icon}
                meals={meal.meals}
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
        ))}
      </div>
    </div>
  );
}
