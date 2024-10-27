import { ApiResponse } from "@/types";
import { apiRequest } from "@/lib/apiRequest";

import { DietByUserResponse, DietPlansResponse } from "./types/response";

import appConfig from "@/config/appConfig";
import { dietRoutes } from "@/config/apiRoutes";
import { CreateDietPlanParams, DietByUserParams } from "./types/request";

const getDietList = async (): Promise<ApiResponse<DietPlansResponse[]>> => {
  const url = `${appConfig.baseUrl}/${dietRoutes.dietList}`;

  return await apiRequest<DietPlansResponse[]>(url, {
    next: { revalidate: 600 },
  });
};

const createDietPlan = async (
  params: CreateDietPlanParams,
): Promise<ApiResponse<DietPlansResponse[]>> => {
  const url = `${appConfig.baseUrl}/${dietRoutes.dietList}`;
  console.log(params);
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

  return await apiRequest<DietByUserResponse[]>(url, {
    next: { revalidate: 60 },
  });
};

export { getDietList, createDietPlan, getDietByUser };
