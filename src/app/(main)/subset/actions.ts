"use server";

import { getProvincesListApi } from "./api/subsetApi";

export async function getProvincesAction() {
  const result = await getProvincesListApi();
  return result;
}
