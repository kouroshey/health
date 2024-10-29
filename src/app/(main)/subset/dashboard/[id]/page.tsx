import BackPage from "@/components/layout/BackPage";
import SubUserDashboard from "./_component/SubUserDashboard";
import { usersData } from "@/store/local/users.static";

const subUserDashboardPage = ({ params }: { params: { id: string } }) => {
  console.log(params);
  const user = usersData.subsets.find((item) => item.id === Number(params.id));

  return (
    <div>
      <BackPage title={`پروفایل`} link="/subset" />
      {user ? (
        <SubUserDashboard {...user} />
      ) : (
        <p>اطلاعات کاربر مورد نظر یافت نشد.</p>
      )}
    </div>
  );
};

export default subUserDashboardPage;
