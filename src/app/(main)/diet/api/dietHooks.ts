import { useMutation, useQuery } from "@tanstack/react-query";
import { createDietPlan, getDietByUser, getDietList } from "./dietApi";
import { CreateDietPlanParams, DietByUserParams } from "./types/request";
import toast from "react-hot-toast";

const useDietList = () => {
  return useQuery({
    queryKey: ["dietList"],
    queryFn: async () => {
      const result = await getDietList();
      return result.result;
    },
  });
};

const useCreateDitPlan = () => {
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
    queryFn: async () => {
      const result = await getDietByUser(data);
      return result.result;
    },
    enabled: !!data,
  });
};

export { useDietList, useCreateDitPlan, useDietListByUser };
