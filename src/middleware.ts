import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let currentPath = request.nextUrl.pathname;
  let token = request.cookies.get("token")?.value || "";

  let publicPaths = ["/auth/signin", "/auth/signup"];

  let isPublicPath = publicPaths.includes(currentPath);

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/auth/signup", "/profile", "/auth/signin"],
};
