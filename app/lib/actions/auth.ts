import { jwtVerify } from 'jose';
import { IUserLean } from '../definitions';
const JWT_SECRET = process.env.JWT_SECRET!;
const ENCODER = new TextEncoder();

export async function verifyUserToken(token: string): Promise<IUserLean | null> {
  try {
    const { payload }: { payload: IUserLean | null } = await jwtVerify(token, ENCODER.encode(JWT_SECRET));
    return payload;
  } catch (error) {
    console.error('Invalid token', error);
    return null;
  }
}
