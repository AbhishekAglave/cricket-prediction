import GuestUserCard from '@/app/components/UserListItem'; // Adjust path
import { fetchGuestUsers } from '@/app/lib/actions'; // Server-side fetching
import { IUserLean, IUserDocument } from '@/app/lib/definitions';
export default async function GuestUsersPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    sh: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const password = searchParams?.sh || '';

  let users: IUserLean[] = [];
  try {
    users = await fetchGuestUsers(query, currentPage, password);
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      {users?.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <GuestUserCard key={user._id} user={user} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No Visitors Found</div>
      )}
    </div>
  );
}
