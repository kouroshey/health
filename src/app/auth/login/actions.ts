"use server";

import { cookies } from "next/headers";
import { COOKIES_TEMPLATE } from "@/lib/enumerations";
import { login } from "../api/authApi";

interface LoginParams {
  mobile: string;
}

export async function loginAction({ mobile }: LoginParams) {
  const result = await login({ mobile });

  if (result.code === 200) {
    const cookieStore = cookies();
    cookieStore.set(COOKIES_TEMPLATE.mobile, mobile, {
      path: "/",
      maxAge: 3600,
    });

    const isNewUser = result.result ? "0" : "1";
    cookieStore.set(COOKIES_TEMPLATE.isNew, isNewUser, {
      path: "/",
      maxAge: 3600,
    });
  }

  return result;
}
