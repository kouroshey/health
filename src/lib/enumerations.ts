const acceptedFileTypes = [
  "image/*",
  "image/jpeg",
  "image/png",
  "image/gif",
  "video/*",
  "video/mp4",
  "video/avi",
  "video/mpeg",
  "audio/*",
  "audio/mpeg",
  "audio/wav",
  "text/plain",
  "application/pdf",
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".mp4",
  ".avi",
  ".mpeg",
  ".mp3",
  ".wav",
  ".txt",
  ".pdf",
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
] as const;

const COOKIES_TEMPLATE = {
  accessToken: "access_token",
  refreshToken: "refresh_token",
  otpCode: "otp_code",
  mobile: "mobile",
};

const PATH_TEMPLATE = {
  auth: {
    login: "/auth/login",
    signUp: "/auth/sign-up",
    verifyLogin: "/auth/verify-login",
  },
  main: {
    home: "/",
  },
};

export { acceptedFileTypes, COOKIES_TEMPLATE, PATH_TEMPLATE };
