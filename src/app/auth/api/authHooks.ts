import { useMutation } from "@tanstack/react-query";

import { loginAction } from "../login/actions";
import { useRouter } from "next/navigation";
import { PATH_TEMPLATE } from "@/lib/enumerations";
import toast from "react-hot-toast";
import { LoginParams, SignupParams, VerifyLoginParams } from "./types/request";
import { verifyLoginAction } from "../verify-login/actions";
import { useUserActions } from "@/store/users";
import { signUpAction } from "../sign-up/actions";

const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: LoginParams) => loginAction(data),
    onSuccess: (result) => {
      if (result.code === 200) {
        const route = result.result
          ? PATH_TEMPLATE.auth.verifyLogin
          : PATH_TEMPLATE.auth.signUp;
        router.push(route);
      } else {
        toast.error("مشکلی پیش آمده است.");
      }
    },
    onError: () => {
      toast.error("مشکلی پیش آمده است.");
    },
  });
};

const useVerifyLogin = () => {
  const router = useRouter();
  const { setUser } = useUserActions();

  return useMutation({
    mutationFn: (data: VerifyLoginParams) => verifyLoginAction(data),
    onSuccess: (result) => {
      if (result.code === 200) {
        setUser({ ...result.result, isNewUser: false });
        router.push(PATH_TEMPLATE.main.home);
      } else {
        toast.error("مشکلی پیش آمده است.");
      }
    },
    onError: () => {
      toast.error("مشکلی پیش آمده است.");
    },
  });
};

const useSignUp = () => {
  const router = useRouter();
  const { setUser } = useUserActions();

  return useMutation({
    mutationFn: (data: SignupParams) => signUpAction(data),
    onSuccess: (result) => {
      if (result.code === 200) {
        setUser({ ...result.result, isNewUser: false });
        router.push(PATH_TEMPLATE.main.home);
        toast.success("شما با موفقیت وارد شدید");
      }
    },
    onError: () => {
      toast.error("مشکلی پیش آمده است.");
    },
  });
};

export { useLogin, useVerifyLogin, useSignUp };
