import BackPage from "@/components/layout/BackPage";
import { ListItemProps } from "@/components/layout/ListItem";
import SaladImg from "public/salad.png";
import List from "@/components/layout/List";
import { routes } from "@/store/local/routes.static";

const items: ListItemProps[] = [
  {
    id: 1,
    image: SaladImg,
    path: `${routes.diet.supplementaryAdvice}/advice`,
    title: "توصیه اول",
    description: "یک توصیه عالی برای شما",
  },
  {
    id: 2,
    image: SaladImg,
    path: `${routes.diet.supplementaryAdvice}/advice`,
    title: "توصیه دوم",
    description: "یک توصیه عالی برای شما",
  },
  {
    id: 3,
    image: SaladImg,
    path: `${routes.diet.supplementaryAdvice}/advice`,
    title: "توصیه سوم",
    description: "یک توصیه عالی برای شما",
  },
  {
    id: 4,
    image: SaladImg,
    path: `${routes.diet.supplementaryAdvice}/advice`,
    title: "توصیه چهارم",
    description: "یک توصیه عالی برای شما",
  },
];

export default function SupplementaryAdvice() {
  return (
    <>
      <BackPage title="توصیه‌های تکمیلی" link={routes.diet.root} />
      <List items={items} />
    </>
  );
}
