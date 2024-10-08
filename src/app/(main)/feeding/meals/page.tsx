import MealsCard from "./[mealsType]/_component/MealsCard";
import Image from "next/image";

import NavMealsItem from "./_component/NavMealsItem";
import BackPage from "@/components/layout/BackPage";

const page = () => {
  return (
    <>
      <BackPage
        title="وعده های غذایی"
        icon={
          <div className="relative h-9 w-8">
            <Image
              src="/image/orange-drink.svg"
              alt="orange drink"
              fill={true}
              sizes="(max-width: 768px) 20vw, (max-width: 1200px) 40vw, 33vw"
            />
          </div>
        }
      />
      <NavMealsItem />
      <MealsCard />
    </>
  );
};

export default page;
