'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import connectDB from '../mongoose';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';
import { IUserDocument, IUserLean } from '@/app/lib/definitions';

const ITEMS_PER_PAGE = 10;
const JWT_SECRET = process.env.JWT_SECRET!;
const ENCODER = new TextEncoder();

// Guest Login (Already present)
export async function loginAsGuest(formData: FormData) {
  const cookieStore = await cookies();

  const name = formData.get('name')?.toString();
  const mobile = formData.get('mobile')?.toString();

  if (!name || !mobile) {
    throw new Error('Both fields are required');
  }

  try {
    await connectDB();

    let guestUser: IUserDocument | null = await User.findOne({ mobile });

    if (!guestUser) {
      guestUser = await User.create({
        name,
        mobile,
        role: 'guest'
      });
    }

    if (guestUser) {
      const payload = {
        _id: guestUser._id.toString(),
        name: guestUser.name,
        mobile: guestUser.mobile,
        role: 'guest'
      };

      const token = await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1d')
        .sign(ENCODER.encode(JWT_SECRET));

      cookieStore.set('token', token, {
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24
      });
    }
  } catch (error) {
    console.error(error);
    throw new Error('Login failed');
  }

  redirect('/');
}

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

    const users: IUserLean[] = await User.find(filter)
      .select('-password')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(ITEMS_PER_PAGE)
      .exec();

    const formattedUsers: IUserLean[] = users.map((user: IUserLean) => ({
      _id: user._id.toString(),
      name: user.name,
      mobile: user.mobile,
      username: user.username,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }));

    return formattedUsers;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch guest users.');
  }
}

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

////////////////////
// ✅ Create Admin User
////////////////////

export async function createAdminUser(formData: FormData) {
  const name = formData.get('name')?.toString();
  const mobile = formData.get('mobile')?.toString();
  const username = formData.get('username')?.toString();
  const password = formData.get('password')?.toString();

  if (!name || !mobile || !username || !password) {
    throw new Error('All fields are required to create an admin user');
  }

  try {
    await connectDB();

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      throw new Error('Username already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const adminUser = await User.create({
      name,
      mobile,
      username,
      password: hashedPassword,
      role: 'admin'
    });
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create admin user');
  }
}

////////////////////
// ✅ Login as Admin
////////////////////

export async function loginAsAdmin(formData: FormData) {
  const cookieStore = await cookies();

  const username = formData.get('username')?.toString();
  const password = formData.get('password')?.toString();

  if (!username || !password) {
    throw new Error('Username and password are required');
  }

  try {
    await connectDB();

    const adminUser: IUserDocument | null = await User.findOne({ username, role: 'admin' });

    if (!adminUser) {
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, adminUser.password || '');
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    const payload = {
      _id: adminUser._id.toString(),
      name: adminUser.name,
      username: adminUser.username,
      mobile: adminUser.mobile,
      role: adminUser.role
    };

    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('1d')
      .sign(ENCODER.encode(JWT_SECRET));

    cookieStore.set('token', token, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24
    });
  } catch (error) {
    console.error(error);
    throw new Error('Admin login failed');
  }
  redirect('/admin');
}
