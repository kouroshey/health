import { ApiResponse } from "@/types";
import { LoginParams, SignupParams, VerifyLoginParams } from "./types/request";
import {
  LoginResponse,
  SignupResponse,
  VerifyLoginResponse,
} from "./types/response";
import { apiRequest } from "@/lib/apiRequest";
import appConfig from "@/config/appConfig";
import { authRoutes } from "@/config/apiRoutes";

const login = async (params: LoginParams): Promise<ApiResponse<boolean>> => {
  const url = `${appConfig.baseUrl}/${authRoutes.verifyLogin}?${new URLSearchParams(
    {
      mobile: params.mobile,
    },
  )}`;

  return await apiRequest<ApiResponse<LoginResponse>>(url);
};

const verifyLogin = async (
  params: VerifyLoginParams,
): Promise<ApiResponse<VerifyLoginResponse | null>> => {
  const url = `${appConfig.baseUrl}/${authRoutes.login}?${new URLSearchParams({
    mobile: params.mobile,
    otp_token: params.otp_token,
  })}`;

  return await apiRequest<ApiResponse<VerifyLoginResponse>>(url);
};

const signup = async (
  params: SignupParams,
): Promise<ApiResponse<SignupResponse | null>> => {
  const url = `${appConfig.baseUrl}/${authRoutes.login}?${new URLSearchParams({
    mobile: params.mobile,
    otp_token: params.otp_token,
    name: params.name,
    lastname: params.lastname,
    gender: params.gender,
  })}`;

  return await apiRequest<ApiResponse<SignupResponse>>(url);
};

export { verifyLogin, login, signup };
