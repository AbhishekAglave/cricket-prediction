'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import connectDB from '../mongoose';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';
import { IUserDocument, IUserLean, TCreateAdminUserState, TLoginFormState } from '@/app/lib/definitions';

const ITEMS_PER_PAGE = 10;
const JWT_SECRET = process.env.JWT_SECRET!;
const ENCODER = new TextEncoder();

export async function loginAsGuest(prevState: TLoginFormState, formData: FormData): Promise<TLoginFormState> {
  const cookieStore = await cookies();

  const name = formData.get('name')?.toString();
  const mobile = formData.get('mobile')?.toString();
  const callbackUrl = formData.get('callbackUrl')?.toString() || '/';

  if (!name || !mobile) {
    return {
      success: false,
      message: null,
      error: 'Name and Mobile Number required'
    };
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
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      return {
        success: false,
        message: null,
        error: error.message
      };
    } else {
      return {
        success: false,
        message: null,
        error: 'Something went wrong!'
      };
    }
  }
  redirect(callbackUrl);
}

export async function createAdminUser(
  prevState: TCreateAdminUserState,
  formData: FormData
): Promise<TCreateAdminUserState> {
  const name = formData.get('name')?.toString();
  const mobile = formData.get('mobile')?.toString();
  const username = formData.get('username')?.toString();
  const password = formData.get('password')?.toString();
  const updateOnConflict = formData.get('updateOnConflict') === 'on'; // Checkbox returns 'on' if checked

  const newErrors: TCreateAdminUserState['errors'] = {};

  // Validation
  if (!name) {
    newErrors.name = 'Name is required';
  }

  if (!mobile) {
    newErrors.mobile = 'Mobile number is required';
  }

  if (!username) {
    newErrors.username = 'Username is required';
  }

  if (!password) {
    newErrors.password = 'Password is required';
  }

  const hasErrors = Object.keys(newErrors).length > 0;

  if (hasErrors) {
    return {
      success: false,
      message: null,
      errors: newErrors,
      values: {
        name: name!,
        mobile: mobile!,
        username: username!,
        password: password!,
        updateOnConflict
      }
    };
  }

  try {
    await connectDB();

    const existingMobileUser = await User.findOne({ mobile });
    const existingUsernameUser = await User.findOne({ username });

    // If user exists with same mobile number
    if (existingMobileUser) {
      if (updateOnConflict) {
        // Update the existing user
        const hashedPassword = await bcrypt.hash(password!, 10);

        existingMobileUser.name = name!;
        existingMobileUser.username = username!;
        existingMobileUser.password = hashedPassword;
        existingMobileUser.role = 'admin';

        await existingMobileUser.save();

        return {
          success: true,
          message: 'User updated successfully!',
          errors: {},
          values: {
            name: '',
            mobile: '',
            username: '',
            password: '',
            updateOnConflict: false
          }
        };
      } else {
        return {
          success: false,
          message: null,
          errors: { mobile: 'Mobile number is already used' },
          values: {
            name: name!,
            mobile: mobile!,
            username: username!,
            password: password!,
            updateOnConflict
          }
        };
      }
    }

    // If another user exists with the same username
    if (existingUsernameUser) {
      return {
        success: false,
        message: null,
        errors: { username: 'Username already exists' },
        values: {
          name: name!,
          mobile: mobile!,
          username: username!,
          password: password!,
          updateOnConflict
        }
      };
    }

    // No conflicts, create a new user
    const hashedPassword = await bcrypt.hash(password!, 10);

    await User.create({
      name,
      mobile,
      username,
      password: hashedPassword,
      role: 'admin'
    });

    return {
      success: true,
      message: 'User created successfully!',
      errors: {},
      values: {
        name: '',
        mobile: '',
        username: '',
        password: '',
        updateOnConflict: false
      }
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: null,
      errors: {
        general: error instanceof Error ? error.message : 'Something went wrong!'
      },
      values: {
        name: name!,
        mobile: mobile!,
        username: username!,
        password: password!,
        updateOnConflict
      }
    };
  }
}

export async function loginAsAdmin(prevState: TLoginFormState, formData: FormData): Promise<TLoginFormState> {
  const cookieStore = await cookies();

  const username = formData.get('username')?.toString();
  const password = formData.get('password')?.toString();
  const callbackUrl = formData.get('callbackUrl')?.toString() || '/admin';

  if (!username || !password) {
    return {
      success: false,
      message: null,
      error: 'Username and Password is required'
    };
  }

  try {
    await connectDB();

    const adminUser: IUserDocument | null = await User.findOne({ username, role: 'admin' });

    if (!adminUser) {
      return {
        success: false,
        message: null,
        error: 'Invalid Credentials!'
      };
    }

    const isPasswordValid = await bcrypt.compare(password, adminUser.password!);
    if (!isPasswordValid) {
      return {
        success: false,
        message: null,
        error: 'Invalid Credentials!'
      };
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
    if (error instanceof Error) {
      return {
        success: false,
        message: null,
        error: error.message
      };
    } else {
      return {
        success: false,
        message: null,
        error: 'Something went wrong!'
      };
    }
  }
  redirect(callbackUrl);
}

export async function fetchUsers(query: string = '', currentPage: number): Promise<IUserLean[]> {
  const skip = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    await connectDB();

    const filter = {
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { role: { $regex: query, $options: 'i' } },
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

export async function fetchUsersPages(query: string = ''): Promise<number> {
  try {
    await connectDB();

    const filter = {
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { role: { $regex: query, $options: 'i' } },
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
