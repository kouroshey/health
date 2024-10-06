"use client";

import { useState } from "react";
import LoginForm from "./_component/LoginForm";
import VerifyLoginForm from "./_component/VerifyForm";
import Link from "next/link";

const LoginPage = () => {
  const [isLoggedIn] = useState(true);
  return (
    <div className="w-full gap-3 px-3 backdrop-blur-lg">
      <div className="flex flex-col gap-4 justify-start items-center h-full w-full">
        <div className="mb-10 flex flex-col gap-2 items-center">
          <h2 className="font-bold text-xl text-center text-primary">
            ورود به نارنج
          </h2>
          <p className="text-gray-400">
            {isLoggedIn
              ? "لطفا کد تایید ارسال شده را وارد کنید"
              : "لطفا شماره موبایل خود را وارد کنید"}
          </p>
          {isLoggedIn && (
            <Link
              href={"/login"}
              className="text-gray-400 font-light text-sm text-center w-max after:absolute after:w-full after:h-[2px] after:rounded-sm after:left-0 after:bg-primary relative after:-bottom-1 cursor-pointer hover:text-primary-600"
            >
              تغییر شماره موبایل
            </Link>
          )}
        </div>
        {isLoggedIn ? <VerifyLoginForm /> : <LoginForm />}
      </div>
    </div>
  );
};

export default LoginPage;
