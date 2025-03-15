import { Document } from 'mongoose';

export interface IUserDocument extends Document {
  _id: string;
  name: string;
  mobile: string;
  role: 'guest' | 'admin';
  username?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserLean {
  _id: string;
  name: string;
  mobile: string;
  role: 'guest' | 'admin';
  username?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TLoginFormState = {
  success: boolean;
  message: string | null;
  error: string | null;
};

export type TCreateAdminUserState = {
  success: boolean;
  message: string | null;
  errors: Partial<{
    name: string;
    mobile: string;
    username: string;
    password: string;
    general: string;
  }>;
  values: {
    name: string;
    mobile: string;
    username: string;
    password: string;
    updateOnConflict: boolean;
  };
};
