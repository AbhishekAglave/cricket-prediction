'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AppBar() {
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log(prefersDark);
  }, []);

  return (
    <header className="py-4 px-6 shadow-md flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
        <span className="hidden md:block text-xl font-semibold">Cricket Prediction</span>
      </div>

      <nav className="flex space-x-6">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
