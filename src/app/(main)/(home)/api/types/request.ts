type HealthMetricRequest = {
  user_id: string;
  height: string;
  weight: string;
};

type HealthMetricsListRequest = {
  user_id: string;
  per_page: string;
};

export type { HealthMetricRequest, HealthMetricsListRequest };
