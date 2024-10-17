import BackPage from "@/components/layout/BackPage";
import Quiz from "./_component/Quiz";

const MentalHealth = () => {
  return (
    <main>
      <BackPage title="سلامت روان" link="/" />
      <div>
        <div className="flex flex-col gap-1">
          <h2 className="text-gray-600 text-xl ">پرسشنامه</h2>
          <p className="text-gray-400 text-sm md:text-md">
            لطفا به سوالات زیر پاسخ دهید و در انتها دکمه‌ی ثبت را بفشارید.
          </p>
        </div>
        <Quiz />
      </div>
    </main>
  );
};

export default MentalHealth;
