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
