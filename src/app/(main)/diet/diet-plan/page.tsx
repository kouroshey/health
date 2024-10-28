import { cookies } from "next/headers";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import BackPage from "@/components/layout/BackPage";
import UserDetails from "./_component/UserDetails";
import CreateDiet from "./_component/create-diet";
import DietManagement from "./_component/diet-management";
import { routes } from "@/store/local/routes.static";
import { getDietByUser } from "../api/dietApi";
import { COOKIES_TEMPLATE } from "@/lib/enumerations";
import { ApiResponse } from "@/types";
import { DietByUserResponse } from "../api/types/response";

export const dynamic = "force-dynamic";

export default async function DietPlanPage() {
  const cookieStore = cookies();
  const user_id = (await cookieStore.get(COOKIES_TEMPLATE.user_id)
    ?.value) as string;
  const data = { date: "1403/08/01", user_id: +user_id };

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["dietByUser", data],
    // back: it should work without date
    queryFn: () => getDietByUser(data),
  });

  const dietData: ApiResponse<DietByUserResponse[]> | undefined =
    await queryClient.getQueryData(["dietByUser", data]);

  return (
    <div>
      {dietData && dietData.result.length > 1 ? (
        <HydrationBoundary state={dehydrate(queryClient)}>
          <DietManagement />
        </HydrationBoundary>
      ) : (
        <>
          <BackPage
            title="محاسبه کالری و برنامه غذایی"
            link={routes.diet.root}
          />
          <UserDetails />
          <CreateDiet />
        </>
      )}
    </div>
  );
}
