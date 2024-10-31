import BackPage from "@/components/layout/BackPage";
import { routes } from "@/store/local/routes.static";
import ListItem from "@/components/layout/ListItem";
import { Spinner } from "@/components/ui/spinner/Spinner";
import { getCookingMethods } from "../_api/dietApi";
import { ApiResponse } from "@/types";
import { CookingMethodsResponse } from "../_api/types/response";

// back: this should be SSG or ISR
export const dynamic = "force-dynamic";

export default async function CookingMethodsPage() {
  const cookingMethodData: ApiResponse<CookingMethodsResponse[]> | undefined =
    await getCookingMethods();

  return (
    <>
      <BackPage title="روش‌های طبخ غذا" link={routes.diet.root} />
      {cookingMethodData && cookingMethodData.result.length > 0 ? (
        cookingMethodData?.result.map((method) => {
          return (
            <ListItem
              key={method.id + method.title}
              id={method.id}
              image={method.image}
              path={
                routes.diet.root +
                routes.diet.cookingMethods +
                "/" +
                method.title +
                "_" +
                method.id
              }
              title={method.title}
              description={method.description}
            />
          );
        })
      ) : (
        <div className="h-[40vh] flex-center">
          <Spinner size={"medium"} className="text-primary" />
        </div>
      )}
    </>
  );
}
