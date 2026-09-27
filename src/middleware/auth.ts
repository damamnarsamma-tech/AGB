import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '../lib/firebase-admin.ts';

export interface DecodedIdToken {
  uid: string;
  email?: string;
  [key: string]: any;
}

export async function verifyAuth(req: NextRequest): Promise<DecodedIdToken | null> {
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.split('Bearer ')[1];
  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    return decodedToken as DecodedIdToken;
  } catch (error) {
    console.error('Error verifying Firebase ID token:', error);
    return null;
  }
}
