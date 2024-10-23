import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routes } from "./store/local/routes.static";
import { COOKIES_TEMPLATE, PATH_TEMPLATE } from "./lib/enumerations";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get(COOKIES_TEMPLATE.accessToken);
  const hasVerifyToken = accessToken?.value;
  const hasMobileCookie = request.cookies.get(COOKIES_TEMPLATE.mobile);
  const hasIsNewUser = request.cookies.get(COOKIES_TEMPLATE.isNew);
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/auth")) {
    if (hasVerifyToken) {
      return NextResponse.redirect(
        new URL(routes.home, request.nextUrl.origin),
      );
    }
  }

  if (!pathname.startsWith("/auth")) {
    if (!hasVerifyToken) {
      return NextResponse.redirect(new URL(routes.auth.login, request.url));
    }
  }

  if (
    (pathname.startsWith(PATH_TEMPLATE.auth.signUp) ||
      pathname.startsWith(PATH_TEMPLATE.auth.verifyLogin)) &&
    !hasMobileCookie?.value
  ) {
    return NextResponse.redirect(
      new URL(PATH_TEMPLATE.auth.login, request.url),
    );
  }

  if (
    pathname.startsWith(PATH_TEMPLATE.auth.signUp) &&
    hasIsNewUser?.value === "0"
  ) {
    return NextResponse.redirect(
      new URL(PATH_TEMPLATE.auth.verifyLogin, request.url),
    );
  }

  if (
    pathname.startsWith(PATH_TEMPLATE.auth.verifyLogin) &&
    hasIsNewUser?.value === "1"
  ) {
    return NextResponse.redirect(
      new URL(PATH_TEMPLATE.auth.signUp, request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public|image).*)"],
};
