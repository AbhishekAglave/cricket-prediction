import Image from 'next/image';
import Link from 'next/link';
import { loginAsGuest } from '@/app/lib/actions/users';

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
        <form action={loginAsGuest} className="space-y-5">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-300 focus-within:ring-2 focus-within:ring-red-400">
            <span className="text-gray-500 font-medium">+91</span>

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              pattern="[0-9]{10}"
              className="w-full bg-transparent focus:outline-none"
              required
            />
          </div>

          {/* Optional error message */}
          {false && <div className="text-red-500 text-sm">{'error'}</div>}

          {/* Button with red to orange gradient */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300"
          >
            Enter as Guest
          </button>
        </form>

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
