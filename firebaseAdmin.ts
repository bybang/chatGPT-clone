import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// rebuilt the app from env variables
const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);

// then initialize with that env var
if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const adminDb = admin.firestore();

export { adminDb };
