import { User } from "@/app/auth/api/types/response";
import { PaginationResponse } from "@/types";

type UserSubsetsResponse = PaginationResponse<User[]>;

type AddSubsetResponse = null;

type NameId = {
  id: number;
  name: string;
};

type ProvinceAndCitiesResponse = NameId[];

export type {
  UserSubsetsResponse,
  AddSubsetResponse,
  NameId,
  ProvinceAndCitiesResponse,
};
