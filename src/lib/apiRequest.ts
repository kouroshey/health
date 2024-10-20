import { ApiResponse } from "@/types";
import { toast } from "react-hot-toast";

export const apiRequest = async <T>(
  url: string,
  options?: RequestInit,
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const data = await response.json();
      if (response.status === 400) {
        toast.error(data.message || "خطا در دریافت اطلاعات");
        return Promise.reject(
          new Error(data.message || "خطا در دریافت اطلاعات"),
        );
      }

      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse<T> = await response.json();
    return data;
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
};
