import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get("next-auth.session-token");

  const isAuthPage = request.nextUrl.pathname.startsWith("/api/auth");
  if (!cookie?.name && !isAuthPage) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard"],
};
