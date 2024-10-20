import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routes } from "./store/local/routes.static";
import { COOKIES_TEMPLATE } from "./lib/enumerations";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/auth")) {
    const accessToken = request.cookies.get(COOKIES_TEMPLATE.accessToken);
    const hasVerifyToken = accessToken?.value;
    if (!hasVerifyToken) {
      return NextResponse.redirect(new URL(routes.auth.login, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public|image).*)"],
};
