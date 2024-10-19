interface ApiResponse<T> {
  isSuccess: boolean;
  code: number;
  result: T;
  message: string;
}

export type { ApiResponse };
