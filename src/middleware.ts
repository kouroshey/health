import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const justHome = true;

  if (pathname === "/verify-login") {
    const hasVerifyToken = true;

    if (!hasVerifyToken) {
      return NextResponse.redirect(new URL("/login", request.url));
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
