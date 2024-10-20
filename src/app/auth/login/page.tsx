import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
  return (
    <div className="w-full gap-3 backdrop-blur-lg">
      <div className="flex flex-col gap-4 justify-start items-center h-full w-full">
        <div className="mb-10 flex flex-col gap-2 items-center">
          <h2 className="font-bold text-xl text-center text-primary">
            ورود به نارنج
          </h2>
          <p className="text-gray-400">لطفا شماره موبایل خود را وارد کنید</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
