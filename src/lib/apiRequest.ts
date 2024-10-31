import { ApiResponse } from "@/types";
import { toast } from "react-hot-toast";
import { getCookie } from "./helpers/cookie";
import { COOKIES_TEMPLATE } from "./enumerations";

export const apiRequest = async <T>(
  url: string,
  options?: RequestInit,
): Promise<ApiResponse<T>> => {
  try {
    const accessTokenCookie = await getCookie(COOKIES_TEMPLATE.accessToken);

    const headers = {
      Authorization: accessTokenCookie?.value || "",
      "Content-Type": "application/json",
      ...options?.headers,
    };
    const response = await fetch(url, { ...options, headers });
    const data: ApiResponse<T> = await response.json();

    if (!response.ok) {
      if (response.status === 400) {
        toast.error(data.message || "خطا در دریافت اطلاعات");
        return Promise.reject(
          new Error(data.message || "خطا در دریافت اطلاعات"),
        );
      }

      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
};
