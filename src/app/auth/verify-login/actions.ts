// app/auth/login/actions.ts
"use server";

import { COOKIES_TEMPLATE } from "@/lib/enumerations";
import { verifyLogin } from "../api/authApi";
import { VerifyLoginParams } from "../api/types/request";
import { removeCookie, setCookie } from "@/lib/helpers/cookie";

export async function verifyLoginAction(params: VerifyLoginParams) {
  const result = await verifyLogin(params);

  if (result.code === 200 && result.result?.accessToken) {
    removeCookie(COOKIES_TEMPLATE.mobile);
    removeCookie(COOKIES_TEMPLATE.isNew);
    setCookie(COOKIES_TEMPLATE.accessToken, result.result?.accessToken);
  }

  return result;
}
