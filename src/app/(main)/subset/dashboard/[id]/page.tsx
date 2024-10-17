import BackPage from "@/components/layout/BackPage";
import SubUserDashboard from "./_component/SubUserDashboard";

const subUserDashboardPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <BackPage title={`پروفایل`} link="/subset" />
      <SubUserDashboard id={Number(params.id)} />
    </div>
  );
};

export default subUserDashboardPage;
