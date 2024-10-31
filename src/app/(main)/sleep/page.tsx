import BackPage from "@/components/layout/BackPage";
import { ListItemProps } from "@/components/layout/ListItem";
import List from "@/components/layout/List";
import { routes } from "@/store/local/routes.static";

const items: ListItemProps[] = [
  {
    id: 1,
    image: "/salad.png",
    path: `${routes.sleep.root}/advice`,
    title: "توصیه اول",
    description: "یک توصیه عالی برای شما",
  },
  {
    id: 2,
    image: "/salad.png",
    path: `${routes.sleep.root}/advice`,
    title: "توصیه دوم",
    description: "یک توصیه عالی برای شما",
  },
  {
    id: 3,
    image: "/salad.png",
    path: `${routes.sleep.root}/advice`,
    title: "توصیه سوم",
    description: "یک توصیه عالی برای شما",
  },
  {
    id: 4,
    image: "/salad.png",
    path: `${routes.sleep.root}/advice`,
    title: "توصیه چهارم",
    description: "یک توصیه عالی برای شما",
  },
];

export default function Sleep() {
  return (
    <>
      <BackPage title="توصیه‌های تکمیلی" link="/" />
      <List items={items} />
    </>
  );
}
