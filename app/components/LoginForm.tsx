'use client';

import { loginAsAdmin } from '@/app/lib/actions/users';
import { TLoginFormState } from '@/app/lib/definitions';
import { useSearchParams } from 'next/navigation';
import { useActionState } from 'react';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/admin';

  const initialFormState: TLoginFormState = {
    success: false,
    message: null,
    error: null
  };

  const [formState, formAction, isPending] = useActionState(loginAsAdmin, initialFormState);

  return (
    <form action={formAction} className="space-y-5">
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

      <input type="hidden" name="callbackUrl" value={callbackUrl} />

      {/* You can conditionally show error messages here */}
      {formState.error && <div className="text-red-500 text-sm">{formState.error}</div>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? 'Signing you in...' : 'Login as Admin'}
      </button>
    </form>
  );
}
