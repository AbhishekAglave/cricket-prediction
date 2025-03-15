import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyUserToken } from './app/lib/actions/auth';

const unprotectedRoutes = ['/welcome', '/admin/login', '/privacy-policy', '/about'];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (unprotectedRoutes.includes(path)) {
    return NextResponse.next();
  }

  const cookieStore = await cookies();
  const token = cookieStore.get('token');

  // If no token, redirect to welcome page
  if (!token) {
    return NextResponse.redirect(new URL('/welcome', req.url));
  }

  // Verify token and extract user payload
  const userPayload = await verifyUserToken(token?.value);

  if (!userPayload) {
    return NextResponse.redirect(new URL('/welcome', req.url));
  }

  // ✅ Check for admin routes and roles
  if (path.startsWith('/admin')) {
    if (userPayload.role !== 'admin') {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  }

  // If everything is fine, continue the request
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
};
