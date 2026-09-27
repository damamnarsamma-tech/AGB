import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || firebaseConfig.projectId;

if (!getApps().length) {
  initializeApp({
    projectId: projectId,
  });
}

export const adminAuth = getAuth();
export const adminDb = getFirestore();
