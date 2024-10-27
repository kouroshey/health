import { User } from "@/app/auth/api/types/response";
import { PaginationResponse } from "@/types";

type UserSubsetsResponse = PaginationResponse<User[]>;

type AddSubsetResponse = null;

export type { UserSubsetsResponse, AddSubsetResponse };
