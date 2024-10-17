"use server";

import { cookies } from "next/headers";
import { VerifyFormSchema, VerifyFormType } from "../_models/validations";

export async function userVerifyAction(userData: VerifyFormType) {
  const cookiesStore = cookies();
  const isDataValid = VerifyFormSchema.safeParse(userData);

  if (isDataValid.success) {
    cookiesStore.set({
      name: "is_verified",
      value: "true",
      sameSite: "strict",
      maxAge: 1800,
    });
  }
}
