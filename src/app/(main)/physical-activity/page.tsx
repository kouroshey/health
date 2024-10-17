import BackPage from "@/components/layout/BackPage";
import Quiz from "./_component/Quiz";

const PhysicalActivity = () => {
  return (
    <main>
      <BackPage title="فعالیت بدنی" link="/" />
      <div>
        <div className="flex flex-col gap-3 items-center">
          <h2 className="text-gray-600 text-xl text-center underline underline-offset-8 decoration-primary">
            پرسشنامه
          </h2>
          <p className="text-gray-400 text-sm md:text-md">
            لطفا به سوالات زیر پاسخ دهید و در انتها دکمه‌ی ثبت را بفشارید.
          </p>
        </div>
        <Quiz />
      </div>
    </main>
  );
};

export default PhysicalActivity;
