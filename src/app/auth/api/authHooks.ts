import { useMutation, useQuery } from "@tanstack/react-query";
import { login, verifyLogin } from "./authApi";
import { VerifyLoginParams } from "./types/request";

const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

const useVerifyLogin = (params: VerifyLoginParams) => {
  return useQuery({
    queryKey: ["verifyLogin", params],
    queryFn: () => verifyLogin(params),
    enabled: false,
  });
};

export { useLogin, useVerifyLogin };
