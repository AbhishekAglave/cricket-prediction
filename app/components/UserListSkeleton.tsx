import UserListItemSkeleton from '@/app/components/UserListItemSkeleton';
export default async function UserListSkeleton() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <UserListItemSkeleton />
        <UserListItemSkeleton />
        <UserListItemSkeleton />
        <UserListItemSkeleton />
        <UserListItemSkeleton />
        <UserListItemSkeleton />
        <UserListItemSkeleton />
        <UserListItemSkeleton />
        <UserListItemSkeleton />
      </div>
    </div>
  );
}
