"use server";

import { User } from "@/app/auth/api/types/response";
import { appRoutes } from "@/config/apiRoutes";
import appConfig from "@/config/appConfig";
import { apiRequest, paginationRequest } from "@/lib/apiRequest";
import { ApiResponse, PaginationRequest, PaginationResponse } from "@/types";
import { AddSubsetRequest, CitiesListRequest } from "./types/request";
import { AddSubsetResponse, ProvinceAndCitiesResponse } from "./types/response";

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
  const url = `${appConfig.baseUrl}/${appRoutes.subset.add}`;
  const formData = new FormData();
  formData.append("name", params.name);
  formData.append("lastname", params.lastname);
  formData.append("birthdate", params.birthdate);
  formData.append("gender", params.gender);
  formData.append("weight", params.weight);
  formData.append("height", params.height);
  formData.append("province_id", params.province_id);
  formData.append("city_id", params.city_id);
  return await apiRequest<AddSubsetResponse>(url, {
    body: formData,
    method: "POST",
    redirect: "follow",
  });
};

const getProvincesListApi = async (): Promise<
  ApiResponse<ProvinceAndCitiesResponse>
> => {
  const url = `${appConfig.baseUrl}/${appRoutes.subset.provincesAndCities}`;

  return await apiRequest<ProvinceAndCitiesResponse>(url, { method: "GET" });
};

const getCitiesListApi = async (
  params: CitiesListRequest,
): Promise<ApiResponse<ProvinceAndCitiesResponse>> => {
  const url = `${appConfig.baseUrl}/${appRoutes.subset.provincesAndCities}?province_id=${params.province_id},
  )}`;

  return await apiRequest<ProvinceAndCitiesResponse>(url);
};

export { getSubsetsList, addSubset, getProvincesListApi, getCitiesListApi };
