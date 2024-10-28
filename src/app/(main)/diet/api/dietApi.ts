import { ApiResponse } from "@/types";
import { apiRequest } from "@/lib/apiRequest";

import { DietByUserResponse, DietPlansResponse } from "./types/response";

import appConfig from "@/config/appConfig";
import { dietRoutes } from "@/config/apiRoutes";
import { CreateDietPlanParams, DietByUserParams } from "./types/request";

const getDietList = async (): Promise<ApiResponse<DietPlansResponse[]>> => {
  const url = `${appConfig.baseUrl}/${dietRoutes.dietList}`;

  return await apiRequest<DietPlansResponse[]>(url);
};

const createDietPlan = async (
  params: CreateDietPlanParams,
): Promise<ApiResponse<DietPlansResponse[]>> => {
  const url = `${appConfig.baseUrl}/${dietRoutes.dietList}`;
  return await apiRequest<DietPlansResponse[]>(url, {
    body: JSON.stringify(params),
    method: "POST",
  });
};

const getDietByUser = async (
  params: DietByUserParams,
): Promise<ApiResponse<DietByUserResponse[]>> => {
  const url = `${appConfig.baseUrl}/${dietRoutes.dietList}/${params.user_id}?${new URLSearchParams(
    {
      date: params.date,
    },
  )}`;

  // back: make this ISR
  return await apiRequest<DietByUserResponse[]>(url);
};

export { getDietList, createDietPlan, getDietByUser };
