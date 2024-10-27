import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getDietList } from "../../../api/dietApi";
import MealPlanList from "./MealPlanList";

export default async function CreateMeal() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["dietList"],
    queryFn: getDietList,
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MealPlanList />
      </HydrationBoundary>
    </div>
  );
}
