import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

const protectedRoutes = ["/profile"];

export default async function proxy(request: NextRequest) {
    const session = await auth();

    const { pathname } = request.nextUrl;

    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

    if (isProtectedRoute && !session) {
        return NextResponse.redirect(new URL("/api/auth/signin", request.url));
    }

    return NextResponse.next();
}
