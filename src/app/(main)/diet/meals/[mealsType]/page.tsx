import Image from "next/image";

import NavMealsItem from "../_component/NavMealsItem";
import BackPage from "@/components/layout/BackPage";
import MealsItemData from "@/store/local/MealsItemData.json";

const page = ({ params }: { params: { mealsType: string } }) => {
  // back: get the meal data from server and showing them here
  const persianNameMeal = MealsItemData.find(
    (meal) => meal.link.slice(15) === params.mealsType,
  )!;

  return (
    <div>
      <BackPage
        title={persianNameMeal.name}
        link={"/feeding"}
        icon={
          <div className="relative h-9 w-8">
            <Image
              src={"/image/orange-drink.svg"}
              alt="orange drink"
              fill={true}
              sizes="(max-width: 768px) 20vw, (max-width: 1200px) 40vw, 33vw"
            />
          </div>
        }
      />
      <NavMealsItem />
    </div>
  );
};

export default page;
