import { ApiResponse } from "@/types";
import { LoginParams, VerifyLoginParams } from "./types/request";
import { VerifyLoginResponse } from "./types/response";

const login = async (params: LoginParams): Promise<ApiResponse<boolean>> => {
  const response = await fetch(
    `https://narenj.demo.khateroshan.com/api/v1/user/verify?mobile=${params.mobile}`,
  );
  const data = await response.json();
  return data;
};

const verifyLogin = async (
  params: VerifyLoginParams,
): Promise<ApiResponse<VerifyLoginResponse | null>> => {
  const response = await fetch(
    `https://narenj.demo.khateroshan.com/api/v1/user/login?mobile=${params.mobile}&otp_token=${params.otp_token}`,
  );
  const data = await response.json();
  return data;
};

export { verifyLogin, login };
