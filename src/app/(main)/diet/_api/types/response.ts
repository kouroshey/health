type FoodsList = {
  id: number;
  name: string;
  description: string;
  calorie: number;
  created_at: string;
  updated_at: string;
};

type DietPlansResponse = {
  id: number;
  food: string;
  calorie: number;
  meal: string;
  date: string;
};

type DietByUserResponse = DietPlansResponse;

type CookingMethodsResponse = {
  id: number;
  title: string;
  description: string;
  image: string;
  video: string;
  type: string;
};

type SupplementationAdviseResponse = CookingMethodsResponse;

export type {
  FoodsList,
  DietPlansResponse,
  DietByUserResponse,
  CookingMethodsResponse,
  SupplementationAdviseResponse,
};
