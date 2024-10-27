import { useMutation } from "@tanstack/react-query";
import { HealthMetricRequest, HealthMetricsListRequest } from "./types/request";
import { getHealthMetricsList, setHealthMetric } from "./homeApi";
import toast from "react-hot-toast";

const useHealthMetricsList = () => {
  return useMutation({
    mutationFn: (data: HealthMetricsListRequest) => getHealthMetricsList(data),
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

const useSetHealthMetric = () => {
  return useMutation({
    mutationFn: (data: HealthMetricRequest) => setHealthMetric(data),
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export { useHealthMetricsList, useSetHealthMetric };
