type DietPlansResponse = {
  id: null;
  food: string;
  calorie: number;
  meal: string;
  date: string;
};

type DietByUserResponse = DietPlansResponse;

export type { DietPlansResponse, DietByUserResponse };
