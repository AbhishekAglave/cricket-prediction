import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default function Page() {
  return (
    <div className="flex items-center justify-center px-4 my-8">
      <Link href={'/admin/users'} className="mb-4 py-2 px-4 gradient-button">
        <span>View Users</span>
        <span className="animate-wiggle-horizontal">
          <ChevronRightIcon className="ml-1 h-[24px] w-[24px]" />
        </span>
      </Link>
    </div>
  );
}
