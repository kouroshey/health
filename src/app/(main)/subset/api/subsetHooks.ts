import { PaginationRequest } from "@/types";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addSubset, getSubsetsList } from "./subsetApi";
import { AddSubsetRequest } from "./types/request";

const useSubsetsList = () => {
  return useMutation({
    mutationFn: (data: PaginationRequest) => getSubsetsList(data),
    onError: (error: Error) => {
      toast.error(error.message);
    },
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

export { useSubsetsList, useAddSubset };
