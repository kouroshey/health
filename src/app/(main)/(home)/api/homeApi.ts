import { appRoutes } from "@/config/apiRoutes";
import appConfig from "@/config/appConfig";
import { apiRequest, paginationRequest } from "@/lib/apiRequest";
import { ApiResponse, PaginationResponse } from "@/types";
import { HealthMetricRequest, HealthMetricsListRequest } from "./types/request";
import { HealthMetricResponse, HealthMetricsResult } from "./types/response";

const getHealthMetricsList = async (
  params: HealthMetricsListRequest,
): Promise<PaginationResponse<HealthMetricsResult>> => {
  const url = `${appConfig.baseUrl}/${appRoutes.healthMetric.list}?${new URLSearchParams(
    {
      user_id: params.user_id,
      per_page: params.per_page,
    },
  )}`;

  return await paginationRequest<HealthMetricsResult>(url);
};

const setHealthMetric = async (
  params: HealthMetricRequest,
): Promise<ApiResponse<HealthMetricResponse>> => {
  const url = `${appConfig.baseUrl}/${appRoutes.healthMetric.store}?${new URLSearchParams(
    {
      user_id: params.user_id,
      height: params.height,
      weight: params.weight,
    },
  )}`;

  return await apiRequest<HealthMetricResponse>(url);
};

export { setHealthMetric, getHealthMetricsList };
