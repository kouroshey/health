import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const justHome = true;

  if (!pathname.startsWith("/auth")) {
    const isVerifiedCookie = request.cookies.get("is_verified");
    const hasVerifyToken = isVerifiedCookie?.value === "true";
    if (!hasVerifyToken) {
      return NextResponse.redirect(new URL(routes.auth.login, request.url));
    }
  }

  if (justHome && !["/"].includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public|image).*)"],
};
