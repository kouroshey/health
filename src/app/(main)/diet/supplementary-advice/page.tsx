import BackPage from "@/components/layout/BackPage";
import { ListItemProps } from "@/components/layout/ListItem";
import SaladImg from "public/salad.png";
import List from "@/components/layout/List";

const items: ListItemProps[] = [
  {
    id: 1,
    image: SaladImg,
    path: "",
    title: "توصیه اول",
    description: "یک توصیه عالی برای شما",
  },
  {
    id: 2,
    image: SaladImg,
    path: "",
    title: "توصیه دوم",
    description: "یک توصیه عالی برای شما",
  },
  {
    id: 3,
    image: SaladImg,
    path: "",
    title: "توصیه سوم",
    description: "یک توصیه عالی برای شما",
  },
  {
    id: 4,
    image: SaladImg,
    path: "",
    title: "توصیه چهارم",
    description: "یک توصیه عالی برای شما",
  },
];

const SupplementaryAdvice = () => {
  return (
    <>
      <BackPage title="توصیه‌های مکملی" link="/" />
      <List items={items} />
    </>
  );
};

export default SupplementaryAdvice;
