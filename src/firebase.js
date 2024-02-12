import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAixfLt370siJpKUnkpB_jC0wAuaPH_HtM",
  authDomain: "prod-web-fe75e.firebaseapp.com",
  projectId: "prod-web-fe75e",
  storageBucket: "prod-web-fe75e.appspot.com",
  messagingSenderId: "952509651819",
  appId: "1:952509651819:web:3eee40e1365a4ea4b64a2e",
  measurementId: "G-D9X3NXDXXV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };