import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { loginAction } from "../login/actions";
import { PATH_TEMPLATE } from "@/lib/enumerations";
import { LoginParams, SignupParams, VerifyLoginParams } from "./types/request";
import { verifyLoginAction } from "../verify-login/actions";
import { useUserActions } from "@/store/users";
import { signUpAction } from "../sign-up/actions";

const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginParams) => loginAction(data),
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

const useVerifyLogin = () => {
  const router = useRouter();
  const { setUser } = useUserActions();

  return useMutation({
    mutationFn: (data: VerifyLoginParams) => verifyLoginAction(data),
    onSuccess: (result) => {
      setUser({ ...result.result, isNewUser: false });
      router.push(PATH_TEMPLATE.main.home);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

const useSignUp = () => {
  const router = useRouter();
  const { setUser } = useUserActions();

  return useMutation({
    mutationFn: (data: SignupParams) => signUpAction(data),
    onSuccess: (result) => {
      setUser({ ...result.result, isNewUser: false });
      router.push(PATH_TEMPLATE.main.home);
      toast.success("شما با موفقیت وارد شدید");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export { useLogin, useVerifyLogin, useSignUp };
