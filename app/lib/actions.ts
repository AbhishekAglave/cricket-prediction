'use server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import connectDB from './mongoose';
import User from '../lib/models/User';
import { IUserLean, IUserDocument } from '../lib/definitions';

const ITEMS_PER_PAGE = 10;

// ✅ loginAsGuest (still dealing with the model, not lean)
export async function loginAsGuest(formData: FormData) {
  const cookieStore = await cookies();

  const name = formData.get('name');
  const mobile = formData.get('mobile');

  if (!name || !mobile) {
    throw new Error('Both fields are required');
  }

  try {
    await connectDB();
    let guestUser: IUserDocument | null = await User.findOne({ mobile });

    if (!guestUser) {
      guestUser = await User.create({
        name: name,
        mobile: mobile,
        role: 'guest'
      });
    }

    if (guestUser) {
      cookieStore.set(
        'userInfo',
        JSON.stringify({
          id: guestUser._id,
          name: guestUser.name,
          role: guestUser.role || 'guest'
        }),
        {
          path: '/',
          maxAge: 60 * 60 * 24 // 1 day
        }
      );
    }
  } catch (error) {
    console.log(error);
  }

  redirect('/');
}

// ✅ fetchGuestUsers
export async function fetchGuestUsers(query: string = '', currentPage: number): Promise<IUserLean[]> {
  const skip = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    await connectDB();

    const filter = {
      role: 'guest',
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { mobile: { $regex: query, $options: 'i' } },
        { username: { $regex: query, $options: 'i' } }
      ]
    };

    const users = await User.find(filter).sort({ createdAt: -1 }).skip(skip).limit(ITEMS_PER_PAGE).lean().exec();

    const mappedUsers: IUserLean[] = users.map((user: any) => ({
      _id: user._id.toString(),
      name: user.name,
      mobile: user.mobile,
      username: user.username,
      password: user.password,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }));

    return mappedUsers;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch guest users.');
  }
}

// ✅ fetchGuestUsersPages
export async function fetchGuestUsersPages(query: string = ''): Promise<number> {
  try {
    await connectDB();

    const filter = {
      role: 'guest',
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { mobile: { $regex: query, $options: 'i' } },
        { username: { $regex: query, $options: 'i' } }
      ]
    };

    const count = await User.countDocuments(filter);
    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of guest users.');
  }
}
