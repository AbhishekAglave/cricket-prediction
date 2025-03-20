import Link from 'next/link';
import Image from 'next/image';
import { LogOut } from 'lucide-react';
import { cookies } from 'next/headers';
import { logout } from '../lib/actions/users';

export default async function AppBar() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');
  const isLoggedIn = !!token;
  return (
    <header className="py-4 px-6 shadow-md flex items-center justify-between">
      <Link href="/" className="flex gap-4 items-center">
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
        <span className="hidden md:block text-xl font-semibold">Cricket Prediction</span>
      </Link>

      <nav className="link flex space-x-6 font-bold">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/about">About</Link>
        {isLoggedIn && (
          <form action={logout} className="flex items-center">
            <button type="submit">
              <LogOut size={18} />
            </button>
          </form>
        )}
      </nav>
    </header>
  );
}
