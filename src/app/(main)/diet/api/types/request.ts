type CreateDietPlanParams = {
  user_id: number;
  meals: {
    food_id: number;
    meal: number; //enum [breakfast:0 , lunch:1, dinner:2 , snack1:3 , snack2:4]
  }[];
  date: string;
};

type DietByUserParams = {
  user_id: number;
  date: string; // this should remove
};

export type { CreateDietPlanParams, DietByUserParams };
