import BackPage from "@/components/layout/BackPage";
import FeedingBanners from "./_component/FeedingBanners";

const page = () => {
  return (
    <div>
      <BackPage title="تغذیه" link="/" />
      <FeedingBanners />
    </div>
  );
};

export default page;
