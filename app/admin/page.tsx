import Link from 'next/link';
import { createAdminUser } from '@/app/lib/actions/users';

export default function AdminDashboardPage() {
  return (
    <div className="flex items-center justify-center px-4 my-8">
      <div className="p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
        {/* Heading with red to orange gradient */}
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-6">
          Create Admin User
        </h2>

        <p className="mb-8 text-sm">Enter the details to create a new admin user</p>

        {/* Form submission handled server-side */}
        <form action={createAdminUser} className="space-y-5">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Mobile Number copied from login page */}
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

          {/* Username */}
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Optional error message */}
          {false && <div className="text-red-500 text-sm">{'error'}</div>}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300"
          >
            Create Admin User
          </button>
        </form>

        {/* Link to view guest visitors */}
        <Link
          href="/admin/visitors"
          className="inline-block mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
        >
          View Guest Visitors
        </Link>

        <p className="mt-6 text-xs text-gray-400">Admins can manage users and view guests.</p>
      </div>
    </div>
  );
}
