import { useMutation, useQuery } from "@tanstack/react-query";
import { createDietPlan, getDietByUser, getDietList } from "./dietApi";
import { CreateDietPlanParams, DietByUserParams } from "./types/request";
import toast from "react-hot-toast";

const useDietList = () => {
  return useQuery({
    queryKey: ["dietList"],
    queryFn: () => getDietList(),
  });
};

const useCreateDietPlan = () => {
  return useMutation({
    mutationFn: (data: CreateDietPlanParams) => createDietPlan(data),
    onSuccess: () => {
      toast.success("شما با موفقیت وارد شدید");
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
    staleTime: 60000,
    gcTime: 300000,
  });
};

export { useDietList, useCreateDietPlan, useDietListByUser };
