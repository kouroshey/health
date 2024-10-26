"use server";

import { removeCookie, setCookie } from "@/lib/helpers/cookie";
import { signup } from "../api/authApi";
import { SignupParams } from "../api/types/request";
import { COOKIES_TEMPLATE } from "@/lib/enumerations";

export async function signUpAction(params: SignupParams) {
  const result = await signup(params);

  if (result.code === 200 && result.result) {
    removeCookie(COOKIES_TEMPLATE.mobile);
    removeCookie(COOKIES_TEMPLATE.isNew);
    setCookie(COOKIES_TEMPLATE.accessToken, result.result?.accessToken);
  }

  return result;
}
