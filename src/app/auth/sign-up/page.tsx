import SignUpForm from "./_components/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="w-full gap-3 backdrop-blur-lg">
      <div className="flex flex-col gap-4 justify-start items-center h-full w-full">
        <div className="mb-10 flex flex-col gap-2 items-center">
          <h2 className=" text-center primary-h1">ثبت نام در نارنج</h2>
          <p className="text-gray-400 text-sm md:text-md text-center">
            خوش آمدید! <br /> برای تکمیل ثبت نام لطفا اطلاعات خود را وارد کنید
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
