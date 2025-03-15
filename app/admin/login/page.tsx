import { loginAsAdmin } from '@/app/lib/actions/users';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="p-4 rounded-2xl shadow-2xl w-full max-w-md text-center">
        {/* Heading with red to orange gradient */}
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-6">
          Welcome Back
        </h2>
        {/* Form submission handled server-side */}
        <form action={loginAsAdmin} className="space-y-5">
          {/* Username Field */}
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* You can conditionally show error messages here */}
          {false && <div className="text-red-500 text-sm">{'Invalid username or password'}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300"
          >
            Login as Admin
          </button>
        </form>

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
