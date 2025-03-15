import Pagination from '@/app/components/Pagination';
import UserListSkeleton from '../../components/UserListSkeleton';
import { Suspense } from 'react';
import { fetchUsers, fetchUsersPages } from '@/app/lib/actions/users';
import UserListItem from '@/app/components/UserListItem';
import { IUserLean } from '@/app/lib/definitions';
import Link from 'next/link';
import Search from '@/app/components/Search';

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchUsersPages(query);

  return (
    <div>
      <div className="flex items-center gap-2 justify-between mb-6">
        <h2 className="hidden md:block text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
          Users
        </h2>
        <div className="w-full flex items-center gap-2 justify-between md:justify-end">
          <Search placeholder="Search user" />
          <Link
            href={'/admin'}
            className="py-2 px-4 text-nowrap flex items-center rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300"
          >
            Create User
          </Link>
        </div>
      </div>
      <Suspense key={query + currentPage} fallback={<UserListSkeleton />}>
        <UserList query={query} currentPage={currentPage} />
      </Suspense>

      {/* Pagination */}
      <div className="mt-5 flex w-full p-2 justify-end">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

//////////////////////////////////////////////////////////
// ✅ Inline UserList Component
//////////////////////////////////////////////////////////

async function UserList({ query, currentPage }: { query: string; currentPage: number }) {
  let users: IUserLean[] = [];

  try {
    users = await fetchUsers(query, currentPage);
  } catch (error) {
    console.error('Error fetching guest users:', error);
  }

  if (!users.length) {
    return <div className="flex justify-center items-center py-10 text-gray-500">No Users Found.</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <UserListItem key={user._id} user={user} />
      ))}
    </div>
  );
}
