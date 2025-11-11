import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR KEY",
  authDomain: "YOUR DOMAIN",
  projectId: "YOUR PROJECT ID",
  storageBucket: "YOUR BUCKET",
  messagingSenderId: "YOUR ID",
  appId: "YOUR APP ID",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export auth to use everywhere
export const auth = getAuth(app);
