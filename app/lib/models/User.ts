import mongoose, { Schema, Document, models, model } from 'mongoose';
import { IUserDocument } from '../definitions';

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true, unique: true },
    username: { type: String }, // For admin
    password: { type: String }, // For admin
    role: { type: String, enum: ['guest', 'admin'], default: 'guest' }
  },
  { timestamps: true }
);

export default models.User || model<IUserDocument>('User', UserSchema);
