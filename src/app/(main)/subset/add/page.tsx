import BackPage from "@/components/layout/BackPage";
import AddSubForm from "./_component/AddSubForm";

const AddSubsetPage = () => {
  return (
    <div>
      <BackPage title="افزودن زیرمجموعه جدید" link="/subset" />
      <AddSubForm />
    </div>
  );
};

export default AddSubsetPage;
