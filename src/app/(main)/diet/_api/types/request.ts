type CreateDietPlanParams = {
  user_id: number;
  meals: {
    food_id: number;
    meal: number;
  }[];
  date: string;
};

const MealTypeEnum = {
  BREAKFAST: 0,
  LUNCH: 1,
  DINNER: 2,
  SNACK_1: 3,
  SNACK_2: 4,
};

type DietByUserParams = {
  user_id: number;
  date: string;
};

export type { CreateDietPlanParams, DietByUserParams };
export { MealTypeEnum };
