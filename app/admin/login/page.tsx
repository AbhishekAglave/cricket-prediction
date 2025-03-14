import { loginAsGuest } from '@/app/lib/actions';

export default function Page() {
  return (
    <div className="flex items-center justify-center px-4 my-8">
      <div className="p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-2">Welcome to</h1>

        {/* Heading with red to orange gradient */}
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-6">
          Cricket Match Predictions
        </h2>

        <p className="mb-8 text-xl">Expert insights for match predictions and betting strategies</p>

        <p className="mb-8 text-sm">Enter your details to continue</p>

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

          {false && <div className="text-red-500 text-sm">{'error'}</div>}

          {/* Button with red to orange gradient */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300"
          >
            Login as Admin
          </button>
        </form>

        <p className="mt-6 text-xs text-gray-400">We respect your privacy. Your information is safe with us.</p>
      </div>
    </div>
  );
}
