export const dynamic = "force-dynamic";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { getFoodsList } from "../../_api/dietApi";
import DietPlanList from "./_component/CreateDietPlanList";

export default async function CreateDiet() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["foodsList"],
    queryFn: getFoodsList,
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DietPlanList />
      </HydrationBoundary>
    </div>
  );
}
