"use client";

import { COOKIES_TEMPLATE } from "@/lib/enumerations";
import { routes } from "@/store/local/routes.static";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  Cookies.remove(COOKIES_TEMPLATE.accessToken);
  router.push(routes.auth.login);
  return <div></div>;
};

export default Logout;
