import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyUserToken } from './app/lib/actions/auth';

function createCallbackUrl(req: NextRequest): string {
  return encodeURIComponent(req.nextUrl.pathname + req.nextUrl.search);
}

const unprotectedRoutes = ['/', '/logout', '/welcome', '/admin/login', '/privacy-policy', '/about'];

export async function middleware(req: NextRequest) {
  if (unprotectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const cookieStore = await cookies();
  const token = cookieStore.get('token');

  if (!token) {
    const callbackUrl = createCallbackUrl(req);
    const redirectTo = req.nextUrl.pathname.startsWith('/admin')
      ? `/admin/login?callbackUrl=${callbackUrl}`
      : `/welcome?callbackUrl=${callbackUrl}`;
    return NextResponse.redirect(new URL(redirectTo, req.url));
  }

  const userPayload = await verifyUserToken(token?.value);

  if (!userPayload) {
    const callbackUrl = createCallbackUrl(req);
    return NextResponse.redirect(new URL(`/welcome?callbackUrl=${callbackUrl}`, req.url));
  }

  if (req.nextUrl.pathname.startsWith('/admin')) {
    if (userPayload.role !== 'admin') {
      const callbackUrl = createCallbackUrl(req);
      return NextResponse.redirect(new URL(`/admin/login?callbackUrl=${callbackUrl}`, req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
};
