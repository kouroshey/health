"use client";

import LoginForm from "./_component/LoginForm";

const LoginPage = () => {
  return (
    <div className="w-full h-fit rounded-xl flex justify-center items-center gap-3 px-3 tablet:px-1 desktop:px-6 backdrop-blur-lg">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
