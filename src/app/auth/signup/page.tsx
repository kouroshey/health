import SignupForm from "./_components/SignupForm";

const SignupPage = () => {
  return (
    <div className="w-full gap-3 px-3 backdrop-blur-lg">
      <div className="flex flex-col gap-4 justify-start items-center h-full w-full">
        <div className="mb-10 flex flex-col gap-2 items-center">
          <h2 className="font-bold text-xl text-center text-primary">
            ثبت نام در نارنج
          </h2>
          <p className="text-gray-400 text-center">
            خوش آمدید! <br /> برای تکمیل ثبت نام لطفا اطلاعات خود را وارد کنید
          </p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;