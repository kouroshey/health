"use server";

import { cookies } from "next/headers";

const setCookie = (
  name: string,
  value: string,
  options?: { path?: string; maxAge?: number },
) => {
  "use server";
  const cookieStore = cookies();
  cookieStore.set(name, value, {
    path: options?.path || "/",
    maxAge: options?.maxAge || 3600,
  });
};

const getCookie = (name: string) => {
  "use server";
  const cookieStore = cookies();
  return cookieStore.get(name);
};

const removeCookie = (name: string) => {
  "use server";
  const cookieStore = cookies();
  cookieStore.delete(name);
};

export { setCookie, getCookie, removeCookie };
