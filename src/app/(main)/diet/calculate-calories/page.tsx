import BackPage from "@/components/layout/BackPage";
import MealPlan from "./_component/MealPlanForm";
import UserDetails from "./_component/UserDetails";
import { routes } from "@/store/local/routes.static";

export default function CalculateCalories() {
  return (
    <div>
      <BackPage title="محاسبه کالری و برنامه غذایی" link={routes.diet.root} />
      <UserDetails />
      <MealPlan />
    </div>
  );
}
