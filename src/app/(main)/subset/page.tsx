import BackPage from "@/components/layout/BackPage";
import SubsetsList from "./_component/SubsetsList";
import Button from "@/components/ui/button/button";
import { usersData } from "@/store/local/users.static";

const SubsetPage = () => {
  // back: fetch through the database for getting the subset person.
  // if it was any subset: show the SubsetList
  // if it wasn't: show the AddSubset with a message that there is no subset
  const subsetsList = usersData.subsets;
  return (
    <main>
      <BackPage
        title={subsetsList.length > 0 ? "لیست افراد زیرمجموعه" : "زیرمجموعه"}
        link="/"
      />
      {subsetsList.length > 0 ? (
        <SubsetsList subList={subsetsList} />
      ) : (
        <div className="w-full flex flex-col flex-center gap-y-4 h-[70vh]">
          <h4 className="text-lg text-gray-500">
            در حال حاضر هیچ زیرمجموعه ای ندارید.
          </h4>
          <Button variant="contained" asLink href="/subset/add">
            اضافه کردن زیرمجموعه
          </Button>
        </div>
      )}
    </main>
  );
};

export default SubsetPage;
