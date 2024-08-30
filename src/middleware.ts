import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  let currentPath = request.nextUrl.pathname;
  let cookieToken = request.cookies.get("token");

  let publicPages = ["/auth/signin", "/auth/signup"];

  let isPublicPage = publicPages.includes(currentPath);
  if (!isPublicPage && !cookieToken) {
    return NextResponse.redirect(new URL("/auth/signup", request.url));
  }

  if (isPublicPage && cookieToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/((?!.*\\..*|_next).*)",
};
