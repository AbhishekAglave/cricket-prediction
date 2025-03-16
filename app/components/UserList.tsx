import { fetchUsers } from '../lib/actions/users';
import { IUserLean } from '../lib/definitions';
import UserListItem from './UserListItem';

export default async function UserList({ query, currentPage }: { query: string; currentPage: number }) {
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
