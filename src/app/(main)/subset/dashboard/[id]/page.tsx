import BackPage from "@/components/layout/BackPage";
import SubUserDashboard from "./_component/SubUserDashboard";

const subUserDashboardPage = () => {
  return (
    <div>
      <BackPage title={`پروفایل`} link="/subset" />
      <SubUserDashboard />
    </div>
  );
};

export default subUserDashboardPage;
