import { PaginationRequest } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addSubset, getCitiesListApi, getSubsetsList } from "./subsetApi";
import { AddSubsetRequest, CitiesListRequest } from "./types/request";
import { getProvincesAction } from "../actions";

const useSubsetsList = (data: PaginationRequest) => {
  return useQuery({
    queryKey: ["subsetsList", data],
    queryFn: () =>
      getSubsetsList(data).catch((error: Error) => {
        toast.error(error.message);
        throw error;
      }),
    enabled: false,
  });
};

const useAddSubset = () => {
  return useMutation({
    mutationFn: (data: AddSubsetRequest) => addSubset(data),
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

const useProvincesList = () => {
  return useQuery({
    queryKey: ["provinces"],
    queryFn: () =>
      getProvincesAction().catch((error: Error) => {
        toast.error(error.message);
        throw error;
      }),
  });
};

const useCitiesList = (data: CitiesListRequest) => {
  return useQuery({
    queryKey: ["cities", data],
    queryFn: () =>
      getCitiesListApi(data).catch((error: Error) => {
        toast.error(error.message);
        throw error;
      }),
    enabled: false,
  });
};

export { useSubsetsList, useAddSubset, useCitiesList, useProvincesList };
