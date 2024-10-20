import { useMutation } from "@tanstack/react-query";
import { login, signup, verifyLogin } from "./authApi";

const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

const useVerifyLogin = () => {
  return useMutation({
    mutationFn: verifyLogin,
  });
};

const useSignup = () => {
  return useMutation({
    mutationFn: signup,
  });
};

export { useLogin, useVerifyLogin, useSignup };
