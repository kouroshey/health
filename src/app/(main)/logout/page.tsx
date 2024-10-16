"use client";

import { routes } from "@/store/local/routes.static";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Logout = () => {
  Cookies.remove("is_verified");
  const router = useRouter();
  router.push(routes.auth.login);
  return <div></div>;
};

export default Logout;
