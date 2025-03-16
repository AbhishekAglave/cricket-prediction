'use client';

import { loginAsGuest } from '@/app/lib/actions/users';
import { useActionState } from 'react';
import { TLoginFormState } from '../lib/definitions';
import { useSearchParams } from 'next/navigation';

export default function WelcomeForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const initialFormState: TLoginFormState = {
    success: false,
    message: null,
    error: null
  };

  const [formState, formAction, isPending] = useActionState(loginAsGuest, initialFormState);

  return (
    <form action={formAction} className="space-y-5">
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

      <input type="hidden" name="callbackUrl" value={callbackUrl} />

      {/* Optional error message */}
      {formState.error && <div className="text-red-500 text-sm">{formState.error}</div>}

      {/* Button with red to orange gradient */}

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? 'Letting you in...' : 'Enter as Guest'}
      </button>
    </form>
  );
}
