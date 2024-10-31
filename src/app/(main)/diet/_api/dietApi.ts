import { ApiResponse } from "@/types";
import { apiRequest } from "@/lib/apiRequest";

import {
  CookingMethodsResponse,
  DietByUserResponse,
  DietPlansResponse,
  FoodsList,
  SupplementationAdviseResponse,
} from "./types/response";

import appConfig from "@/config/appConfig";
import { appRoutes } from "@/config/apiRoutes";
import { CreateDietPlanParams, DietByUserParams } from "./types/request";

const getFoodsList = async (): Promise<ApiResponse<FoodsList[]>> => {
  const url = `${appConfig.baseUrl}/${appRoutes.public.foods}`;

  return await apiRequest<FoodsList[]>(url);
};

const getDietList = async (): Promise<ApiResponse<DietPlansResponse[]>> => {
  const url = `${appConfig.baseUrl}/${appRoutes.diet.list}`;

  return await apiRequest<DietPlansResponse[]>(url);
};

const createDietPlan = async (
  params?: CreateDietPlanParams,
): Promise<ApiResponse<DietPlansResponse[]>> => {
  const url = `${appConfig.baseUrl}/${appRoutes.diet.list}`;
  return await apiRequest<DietPlansResponse[]>(url, {
    body: JSON.stringify(params),
    method: "POST",
  });
};

const getDietByUser = async (
  params: DietByUserParams,
): Promise<ApiResponse<DietByUserResponse[]>> => {
  const url = `${appConfig.baseUrl}/${appRoutes.diet.list}/${params.user_id}?${new URLSearchParams(
    {
      date: params.date,
    },
  )}`;

  // back: make this ISR
  return await apiRequest<DietByUserResponse[]>(url);
};

const getCookingMethods = async (): Promise<
  ApiResponse<CookingMethodsResponse[]>
> => {
  const url = `${appConfig.baseUrl}/${appRoutes.diet.cookingMethods}`;

  // back: make this ISR
  return await apiRequest<CookingMethodsResponse[]>(url);
};

const getSupplementationAdvise = async (): Promise<
  ApiResponse<SupplementationAdviseResponse[]>
> => {
  const url = `${appConfig.baseUrl}/${appRoutes.diet.supplementationAdvice}`;

  // back: make this ISR
  return await apiRequest<SupplementationAdviseResponse[]>(url);
};

export {
  getFoodsList,
  getDietList,
  createDietPlan,
  getDietByUser,
  getCookingMethods,
  getSupplementationAdvise,
};
