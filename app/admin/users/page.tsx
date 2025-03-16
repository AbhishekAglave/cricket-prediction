import Pagination from '@/app/components/Pagination';
import UserListSkeleton from '../../components/UserListSkeleton';
import { Suspense } from 'react';
import { fetchUsersPages } from '@/app/lib/actions/users';
import Search from '@/app/components/Search';
import UserList from '@/app/components/UserList';
import Modal from '@/app/components/Modal';
import UserForm from '@/app/components/UserForm';

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
          <Modal btnText="Create User">
            <UserForm />
          </Modal>
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
