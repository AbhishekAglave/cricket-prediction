'use client';

export default function UserListItemSkeleton() {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-md p-5 flex items-center gap-4 animate-pulse">
      {/* Skeleton Avatar */}
      <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full" />

      {/* Skeleton Content */}
      <div className="flex flex-col flex-1 gap-2">
        {/* Name + Role */}
        <div className="flex gap-2 items-center">
          <div className="w-32 h-4 bg-gray-700 rounded" />
          <div className="w-16 h-4 bg-gray-700 rounded" />
        </div>

        {/* Mobile + Icons */}
        <div className="flex items-center gap-6 mt-1">
          {/* Mobile number skeleton */}
          <div className="w-24 h-4 bg-gray-700 rounded" />

          {/* Icons */}
          <div className="flex gap-4">
            <div className="w-5 h-5 bg-gray-700 rounded" />
            <div className="w-5 h-5 bg-gray-700 rounded" />
            <div className="w-5 h-5 bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
