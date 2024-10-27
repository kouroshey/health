import BackPage from "@/components/layout/BackPage";
import { ListItemProps } from "@/components/layout/ListItem";
import SaladImg from "public/salad.png";
import List from "@/components/layout/List";
import { routes } from "@/store/local/routes.static";

const items: ListItemProps[] = [
  {
    id: 1,
    image: SaladImg,
    path: `${routes.diet.cookingMethods}/method`,
    title: "روش اول",
    description: "یک روش عالی برای شما",
  },
  {
    id: 2,
    image: SaladImg,
    path: `${routes.diet.cookingMethods}/method`,
    title: "روش دوم",
    description: "یک روش عالی برای شما",
  },
  {
    id: 3,
    image: SaladImg,
    path: `${routes.diet.cookingMethods}/method`,
    title: "روش سوم",
    description: "یک روش عالی برای شما",
  },
  {
    id: 4,
    image: SaladImg,
    path: `${routes.diet.cookingMethods}/method`,
    title: "روش چهارم",
    description: "یک روش عالی برای شما",
  },
];

export default function SupplementaryAdvice() {
  return (
    <>
      <BackPage title="روش‌های طبخ غذا" link={routes.diet.root} />
      <List items={items} />
    </>
  );
}
