import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAAuDU3Z-CcovABgPJ3U2xwYRfcbGQW4E",
  authDomain: "auth-dev1-92d1b.firebaseapp.com",
  projectId: "auth-dev1-92d1b",
  storageBucket: "auth-dev1-92d1b.appspot.com",
  messagingSenderId: "1012285203922",
  appId: "1:1012285203922:web:93668c1b1ace632854140b",
  databaseURL: "https://auth-dev1-92d1b.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
