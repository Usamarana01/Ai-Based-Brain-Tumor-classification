import React, { useContext, useState, useEffect, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  sendPasswordResetEmail,
  updateEmail as updateEmailAuth,
  updatePassword as updatePasswordAuth,
  onAuthStateChanged
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc
} from 'firebase/firestore';
import { auth, db } from "../firebase";  // Correct import from firebase.js

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null); // To store user data like name
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          // Fallback in case there's no user data document in Firestore
          setUserData({
            email: user.email,
            name: user.displayName || 'Anonymous User' // Default to displayName or 'Anonymous User'
          });
        }
      } else {
        setUserData(null);
      }
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Sign up with email, password, center, and name
  const signup = async (email, password, center = "Default Center", name) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store user data in Firestore
    await setDoc(doc(db, "users", user.uid), { 
      email: user.email, 
      center,
      name // Add name to Firestore document
    });

    // Update local state with user data
    setUserData({ email: user.email, center, name });

    return user;
  };

  // Login with email and password
  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const userDoc = await getDoc(doc(db, "users", user.uid));
    
    if (userDoc.exists()) {
      setUserData(userDoc.data()); // Set the user data (including name)
    } else {
      // Fallback in case there's no user data document in Firestore
      setUserData({
        email: user.email,
        name: user.displayName || 'Anonymous User'
      });
    }

    return user;
  };

  // Google sign-in
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const userDoc = await getDoc(doc(db, "users", user.uid));

    if (!userDoc.exists()) {
      await setDoc(doc(db, "users", user.uid), { 
        email: user.email, 
        center: "Default Center", 
        name: user.displayName 
      });
      setUserData({ email: user.email, center: "Default Center", name: user.displayName });
    } else {
      setUserData(userDoc.data());
    }

    return user;
  };

  // Logout function
  const logout = () => {
    setUserData(null); // Clear user data on logout
    return signOut(auth);
  };

  // Reset password function
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  // Update email function
  const updateEmail = (email) => updateEmailAuth(currentUser, email);

  // Update password function
  const updatePassword = (password) => updatePasswordAuth(currentUser, password);

  const value = {
    currentUser,
    userData, // Expose user data
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    signInWithGoogle
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
