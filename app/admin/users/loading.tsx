import UserListSkeleton from '../../components/UserListSkeleton';

export default function Loading() {
  return (
    <div className="animate-pulse text-gray-300">
      {/* Header */}
      <div className="flex items-center gap-2 justify-between mb-6">
        {/* Title skeleton */}
        <div className="hidden md:block h-8 w-40 bg-gray-800 rounded-xl"></div>

        <div className="w-full flex items-center gap-2 justify-between md:justify-end">
          {/* Search bar skeleton */}
          <div className="w-full md:w-auto h-10 bg-gray-800 rounded-xl"></div>

          {/* Create button skeleton */}
          <div className="h-10 w-42 bg-gray-800 rounded-xl"></div>
        </div>
      </div>

      {/* User list skeleton */}
      <UserListSkeleton />

      {/* Pagination skeleton */}
      <div className="mt-5 flex w-full p-2 justify-end">
        <div className="flex gap-2">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="h-10 w-10 bg-gray-800 rounded-xl"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
