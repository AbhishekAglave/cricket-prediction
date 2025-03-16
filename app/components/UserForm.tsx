'use client';

import { createAdminUser } from '@/app/lib/actions/users';
import { useActionState } from 'react';
import { TCreateAdminUserState } from '@/app/lib/definitions';

export default function UserForm() {
  const initialFormState: TCreateAdminUserState = {
    success: false,
    message: null,
    errors: {},
    values: {
      name: '',
      mobile: '',
      username: '',
      password: '',
      updateOnConflict: false
    }
  };

  const [formState, formAction, isPending] = useActionState(createAdminUser, initialFormState);

  return (
    <div className="flex items-center justify-center px-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
        {/* Heading with red to orange gradient */}
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-6">
          Create Admin User
        </h2>
        {/* Form submission handled server-side */}
        <form action={formAction} className="space-y-5">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              defaultValue={formState.values.name}
              required
            />
          </div>
          {formState.errors.name && <div className="text-red-500 text-sm">{formState.errors.name}</div>}

          {/* Mobile Number copied from login page */}
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-300 focus-within:ring-2 focus-within:ring-red-400">
            <span className="text-gray-500 font-medium">+91</span>

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              pattern="[0-9]{10}"
              className="w-full bg-transparent focus:outline-none"
              defaultValue={formState.values.mobile}
              required
            />
          </div>
          {formState.errors.mobile && <div className="text-red-500 text-sm">{formState.errors.mobile}</div>}

          {/* Username */}
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              defaultValue={formState.values.username}
              required
            />
          </div>
          {formState.errors.username && <div className="text-red-500 text-sm">{formState.errors.username}</div>}

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              defaultValue={formState.values.password}
              required
            />
          </div>

          <div className="flex items-center gap-2 p-1">
            <input
              type="checkbox"
              name="updateOnConflict"
              defaultChecked={formState.values.updateOnConflict}
              className="h-5 w-5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
            />
            <label htmlFor="updateOnConflict" className="text-sm">
              Update user if mobile number already exists
            </label>
          </div>

          {formState.errors.password && <div className="text-red-500 text-sm">{formState.errors.password}</div>}

          {/* Optional error message */}
          {formState.errors.general && <div className="text-red-500 text-sm">{formState.errors.general}</div>}
          {formState.message && <div className="text-green-500 text-sm">{formState.message}</div>}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
