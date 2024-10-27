import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import BackPage from "@/components/layout/BackPage";
import UserDetails from "./_component/UserDetails";
import CreateMeal from "./_component/create-meal";
import MealManagement from "./_component/meal-management";
import { routes } from "@/store/local/routes.static";
import { getDietByUser } from "../api/dietApi";

export default async function CalculateCalories() {
  const queryClient = new QueryClient();

  const data = { date: "1403/08/01", user_id: 4 };
  await queryClient.prefetchQuery({
    queryKey: ["dietByUser", data],
    // back: it should work without date
    queryFn: () => getDietByUser(data),
  });

  return (
    <div>
      {queryClient.getQueryData(["dietByUser", data]) ? (
        <HydrationBoundary state={dehydrate(queryClient)}>
          <MealManagement />
        </HydrationBoundary>
      ) : (
        <>
          <BackPage
            title="محاسبه کالری و برنامه غذایی"
            link={routes.diet.root}
          />
          <UserDetails />
          <CreateMeal />
        </>
      )}
    </div>
  );
}
