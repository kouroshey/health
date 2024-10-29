type DietPlansResponse = {
  id: null;
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
  DietPlansResponse,
  DietByUserResponse,
  CookingMethodsResponse,
  SupplementationAdviseResponse,
};
