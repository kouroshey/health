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
};

export { acceptedFileTypes, COOKIES_TEMPLATE };
