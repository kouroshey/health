import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createDietPlan,
  getDietByUser,
  getDietList,
  getFoodsList,
} from "./dietApi";
import { CreateDietPlanParams, DietByUserParams } from "./types/request";
import toast from "react-hot-toast";

const useFoodsList = () => {
  return useQuery({
    queryKey: ["foodsList"],
    queryFn: () => getFoodsList(),
    staleTime: 60000,
    gcTime: 300000,
  });
};

const useDietList = () => {
  return useQuery({
    queryKey: ["dietList"],
    queryFn: () => getDietList(),
    staleTime: 60000,
    gcTime: 300000,
  });
};

const useCreateDietPlan = () => {
  return useMutation({
    mutationFn: (data: CreateDietPlanParams) => createDietPlan(data),
    onSuccess: () => {
      toast.success("رژیم غذایی شما با موفقیت ثبت شد");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

const useDietListByUser = (data: DietByUserParams) => {
  return useQuery({
    queryKey: ["dietByUser", data],
    queryFn: () => getDietByUser(data),
    enabled: !!data,
  });
};

export { useDietList, useCreateDietPlan, useDietListByUser, useFoodsList };
