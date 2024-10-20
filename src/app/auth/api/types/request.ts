type LoginParams = {
  mobile: string;
};

type VerifyLoginParams = {
  mobile: string;
  otp_token: string;
};

type SignupParams = {
  otp_token: string;
  mobile: string;
  name: string;
  lastname: string;
  gender: string;
};

export type { LoginParams, VerifyLoginParams, SignupParams };
