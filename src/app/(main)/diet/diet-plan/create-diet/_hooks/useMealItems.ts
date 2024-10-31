import { dietIcon } from "../../_models/icon";
import { dietBase } from "../../_models/types";
import { FoodsList } from "../../../_api/types/response";
import { getDietByType } from "../_utils/dietUtils";

export const useMealItems = (foodsList: FoodsList[] | undefined) => {
  return dietBase.map((meal, index) => ({
    ...meal,
    icon: dietIcon[meal.type.toLowerCase()],
    meals: getDietByType(meal.type, index, foodsList),
  }));
};
