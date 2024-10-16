import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routes } from "./store/local/routes.static";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/auth")) {
    const isVerifiedCookie = request.cookies.get("is_verified");
    const hasVerifyToken = isVerifiedCookie?.value === "true";
    if (!hasVerifyToken) {
      console.log(hasVerifyToken);
      console.log(isVerifiedCookie);
      return NextResponse.redirect(new URL(routes.auth.login, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public|image).*)"],
};
