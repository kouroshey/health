interface ApiResponse<T> {
  isSuccess: boolean;
  code: number;
  result: T;
  message: string;
}

type PaginationMetaLink = {
  url: string | null;
  label: string;
  active: boolean;
};

type PaginationMeta = {
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationMetaLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
};

type PaginationLinks = {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
};

type PaginationResponse<T> = {
  data: ApiResponse<T>;
  links: PaginationLinks;
  meta: PaginationMeta;
};

type PaginationRequest = {
  per_page: string;
};

export type { ApiResponse, PaginationResponse, PaginationRequest };
