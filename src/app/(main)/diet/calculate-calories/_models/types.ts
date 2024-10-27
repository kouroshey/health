import { ReactElement } from "react";
import { UseFormRegister } from "react-hook-form";
import { MealPlanFormType } from "./validations";
import { DietPlansResponse } from "../../api/types/response";

type DietItemT = {
  title: string;
  icon: ReactElement;
  meals: DietPlansResponse[] | undefined;
  register: UseFormRegister<MealPlanFormType>;
  type: keyof MealPlanFormType;
};

const dietBase = [
  { title: "صبحانه", type: "BREAKFAST" },
  { title: "میان وعده", type: "SNACK_1" },
  { title: "ناهار", type: "LUNCH" },
  { title: "میان وعده", type: "SNACK_2" },
  { title: "شام", type: "DINNER" },
];

export type { DietItemT };
export { dietBase };
