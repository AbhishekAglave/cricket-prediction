import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import WelcomeForm from '../components/WelcomeForm';

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="p-4 rounded-2xl shadow-2xl w-full max-w-md text-center">
        {/* Image at the top */}
        <div className="mb-4">
          <Image
            src="/images/welcome-page-image.png"
            alt="Welcome"
            width={200}
            height={200}
            className="mx-auto rounded-full shadow-md bg-white"
          />
        </div>

        <h1 className="text-2xl font-bold mb-1">Welcome to</h1>

        {/* Heading with red to orange gradient */}
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-4">
          Cricket Match Predictions
        </h2>

        <p className="mb-4 text-xl">Get today's cricket updates, join us now!</p>
        <p className="mb-4 text-sm text-orange-500 transition-colors duration-300">Enter your details to continue</p>

        {/* Form submission handled server-side */}
        <Suspense>
          <WelcomeForm />
        </Suspense>

        <p className="mt-6 text-xs text-gray-400">We respect your privacy. Your information is safe with us.</p>

        {/* Link to Login as Admin */}
        <div className="mt-4">
          <Link
            href="/admin/login"
            className="text-sm text-red-500 hover:text-orange-500 font-medium transition-colors duration-300"
          >
            Login as Admin
          </Link>
        </div>
      </div>
    </div>
  );
}
