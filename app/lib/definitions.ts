import { Document } from 'mongoose';

export interface IUserDocument extends Document {
  name: string;
  mobile: string;
  username?: string;
  password?: string;
  role?: 'guest' | 'admin';
}
export interface IUserLean {
  _id: string; // convert ObjectId to string when you return it in APIs
  name: string;
  mobile: string;
  username?: string;
  password?: string;
  role: 'guest' | 'admin';
  createdAt?: Date;
  updatedAt?: Date;
}
