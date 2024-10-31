import { ReactElement } from "react";
import { DietPlanFormType } from "./validations";
import { DietPlansResponse } from "../../_api/types/response";

type DietItemT = {
  title: string;
  icon: ReactElement;
  meals: DietFood[] | undefined;
  type?: keyof DietPlanFormType;
};

type DietDetailsItemT = {
  title: string;
  icon: ReactElement;
  meals: DietPlansResponse[] | undefined;
  type?: keyof DietPlanFormType;
};

interface DietFood {
  food_id: number;
  food: string;
  calorie: number;
  meal: string;
}

export interface DietBaseItem {
  title: string;
  type: "BREAKFAST" | "SNACK_1" | "LUNCH" | "SNACK_2" | "DINNER";
  inputType: "breakfast" | "snack1" | "lunch" | "snack2" | "dinner";
}

const dietBase: DietBaseItem[] = [
  { title: "صبحانه", type: "BREAKFAST", inputType: "breakfast" },
  { title: "میان وعده", type: "SNACK_1", inputType: "snack1" },
  { title: "ناهار", type: "LUNCH", inputType: "lunch" },
  { title: "میان وعده", type: "SNACK_2", inputType: "snack2" },
  { title: "شام", type: "DINNER", inputType: "dinner" },
];

export type { DietItemT, DietDetailsItemT };
export { dietBase };
