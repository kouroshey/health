"use server";

import { User } from "@/app/auth/api/types/response";
import { appRoutes } from "@/config/apiRoutes";
import appConfig from "@/config/appConfig";
import { apiRequest, paginationRequest } from "@/lib/apiRequest";
import { ApiResponse, PaginationRequest, PaginationResponse } from "@/types";
import { AddSubsetRequest } from "./types/request";
import { AddSubsetResponse } from "./types/response";

const getSubsetsList = async (
  params: PaginationRequest,
): Promise<PaginationResponse<User[]>> => {
  const url = `${appConfig.baseUrl}/${appRoutes.subset.list}?${new URLSearchParams(
    {
      per_page: params.per_page,
    },
  )}`;

  return await paginationRequest<User[]>(url);
};

const addSubset = async (
  params: AddSubsetRequest,
): Promise<ApiResponse<AddSubsetResponse>> => {
  const url = `${appConfig.baseUrl}/${appRoutes.subset.add}?${new URLSearchParams(
    {
      name: params.name,
      lastname: params.lastname,
      birthdate: params.birthdate,
      gender: params.gender,
      weight: params.weight,
      height: params.height,
      province_id: params.province_id,
      city_id: params.city_id,
    },
  )}`;

  return await apiRequest<AddSubsetResponse>(url);
};

export { getSubsetsList, addSubset };
