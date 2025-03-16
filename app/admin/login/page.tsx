import LoginForm from '@/app/components/LoginForm';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="p-4 rounded-2xl shadow-2xl w-full max-w-md text-center">
        {/* Heading with red to orange gradient */}
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-6">
          Welcome Back
        </h2>
        {/* Form submission handled server-side */}
        <Suspense>
          <LoginForm />
        </Suspense>

        <p className="mt-6 text-xs text-gray-400">Your credentials are encrypted and secure.</p>
        {/* Link to Login as Admin */}
        <div className="mt-4">
          <Link
            href="/welcome"
            className="text-sm text-red-500 hover:text-orange-500 font-medium transition-colors duration-300"
          >
            Enter as Guest
          </Link>
        </div>
      </div>
    </div>
  );
}
