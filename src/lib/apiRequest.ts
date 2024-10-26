"use server";

import { ApiResponse } from "@/types";

export const apiRequest = async <T>(
  url: string,
  options?: RequestInit,
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(url, options);
    const data: ApiResponse<T> = await response.json();

    if (!response.ok) {
      const errorMessage = data.message || "خطا در دریافت اطلاعات";
      return Promise.reject(new Error(errorMessage));
    }

    return data;
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
};
