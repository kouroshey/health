import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getDietList } from "../../../api/dietApi";
import DietPlanList from "./DietPlanList";

export default async function CreateDiet() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["dietList"],
    queryFn: getDietList,
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DietPlanList />
      </HydrationBoundary>
    </div>
  );
}
