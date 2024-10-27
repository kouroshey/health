import { User } from "@/app/auth/api/types/response";
import { PaginationResponse } from "@/types";

type HealthMetricResponse = null;

type HealthMetricsResult = {
  user: User;
  height: number;
  weight: number;
  bmi: number;
  createdAt: Date;
  updatedAt: Date;
};

type HealthMetricsListResponse = PaginationResponse<HealthMetricsResult>;

export type {
  HealthMetricResponse,
  HealthMetricsListResponse,
  HealthMetricsResult,
};
