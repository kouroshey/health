import { cookies } from "next/headers";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import DietManagement from "./_component";
import { getDietByUser } from "../_api/dietApi";
import { COOKIES_TEMPLATE } from "@/lib/enumerations";
import { ApiResponse } from "@/types";
import { DietByUserResponse } from "../_api/types/response";
import usePersianDate from "@/hooks/usePersianDate";
import NewPlanButton from "./create-diet/_component/NewPlanButton";
import BackPage from "@/components/layout/BackPage";
import { routes } from "@/store/local/routes.static";

export const dynamic = "force-dynamic";

export default async function DietPlanPage() {
  const todayDate = usePersianDate();
  const cookieStore = cookies();
  const user_id = (await cookieStore.get(COOKIES_TEMPLATE.user_id)
    ?.value) as string;
  const data = { date: todayDate, user_id: +user_id };

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["dietByUser", data],
    queryFn: () => getDietByUser(data),
  });

  const dietData: ApiResponse<DietByUserResponse[]> | undefined =
    await queryClient.getQueryData(["dietByUser", data]);

  if (!dietData)
    return (
      <>
        <BackPage title="مدیریت رژیم غذایی" link={`${routes.diet.root}`} />
        <div className="flex-center flex-col h-[250px]">
          مشکلی پیش آمده است. لطفا اینترنت خود را چک کنید و دوباره امتحان کنید
        </div>
      </>
    );

  return (
    <div>
      {dietData && dietData.result.length > 0 ? (
        <HydrationBoundary state={dehydrate(queryClient)}>
          <DietManagement />
        </HydrationBoundary>
      ) : (
        <>
          <BackPage title="مدیریت رژیم غذایی" link={`${routes.diet.root}`} />
          <div className="flex-center flex-col h-[250px]">
            <span>برای امروز برنامه غذایی موجود نمی باشد</span>
            <NewPlanButton className="relative px-4 py-6" />
          </div>
        </>
      )}
    </div>
  );
}
