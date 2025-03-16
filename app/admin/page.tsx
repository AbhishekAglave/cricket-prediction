'use client';

import Link from 'next/link';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';

export default function Page() {
  return (
    <div className="flex items-center justify-center px-4 my-8">
      <Link
        href={'/admin/users'}
        className="py-2 px-4 text-nowrap flex items-center rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300"
      >
        {'View Users'} <ArrowRightCircleIcon className="ml-2 h-[24px] w-[24px]" />
      </Link>
    </div>
  );
}
