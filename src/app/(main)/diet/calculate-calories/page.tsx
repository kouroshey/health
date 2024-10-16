import BackPage from "@/components/layout/BackPage";
import MealPlan from "./_component/MealPlanForm";
import UserDetails from "./_component/UserDetails";

export default function CalculateCalories() {
  return (
    <div>
      <BackPage title="محاسبه کالری و برنامه غذایی" link="/" />
      <UserDetails />
      <MealPlan />
    </div>
  );
}
