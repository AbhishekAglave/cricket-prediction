import Link from 'next/link';
import Image from 'next/image';
import { LogOut } from 'lucide-react';

export default function AppBar() {
  return (
    <header className="py-4 px-6 shadow-md flex items-center justify-between">
      <Link href="/" className="flex gap-4 items-center">
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
        <span className="hidden md:block text-xl font-semibold">Cricket Prediction</span>
      </Link>

      <nav className="flex space-x-6">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/about">About</Link>
        {/* <Link href="/exit">
          <LogOut />
        </Link> */}
      </nav>
    </header>
  );
}
