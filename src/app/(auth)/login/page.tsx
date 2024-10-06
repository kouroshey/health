"use client";

// import LoginForm from "./_component/LoginForm";
import VerifyLoginForm from "./_component/VerifyForm";

const LoginPage = () => {
  return (
    <div className="w-full h-screen md:h-[60vh] flex justify-center items-center gap-3 px-3 backdrop-blur-lg">
      <div className="flex flex-col gap-4 items-center h-full w-full">
        <h2 className="font-bold text-xl text-center mb-10 text-secondary">
          ورود به نارنج
        </h2>
        {/* <LoginForm /> */}
        <VerifyLoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
