import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Only protect `/home` and `/dashboard`
const protectedRoutes = ['/'];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // If it's not a protected route, skip the middleware
  if (!protectedRoutes.includes(path)) {
    return NextResponse.next();
  }

  const cookieStore = await cookies();
  const userInfo = cookieStore.get('userInfo');

  // If userInfo cookie doesn't exist, redirect to /entry
  if (!userInfo) {
    return NextResponse.redirect(new URL('/welcome', req.url));
  }

  return NextResponse.next();
}
