import { FoodsList } from "../../../_api/types/response";

export const getDietByType = (
  type: string,
  index: number,
  foodsList: FoodsList[] | undefined,
) => {
  if (foodsList) {
    const filteredFoods = foodsList.slice(0, 50);
    return filteredFoods.slice(index * 10, (index + 1) * 10).map((food) => ({
      food_id: food.id,
      food: food.name,
      calorie: food.calorie,
      meal: type,
    }));
  }
  return [];
};
