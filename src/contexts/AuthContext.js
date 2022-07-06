import React, { useContext, useEffect, useState } from "react";
import { auth  } from "../firebase";

// Create Context For Auth
const AuthContext = React.createContext();

// Export AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

// Firebase And Google,Facebook Login Methods For Authentication
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // Signup
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  // Login
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  // Logout
  function logout() {
    return auth.signOut();
  }

  // Reset Password
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  // Update Email
  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  // Update Password
  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  // Sign In With Google
  function signInGoogle(provider){
    return auth.signInWithPopup(provider);
  }

  // Sign In With Facebook
  function signInFacebook(provider){
    return auth.signInWithPopup(provider);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Methods For Authentication
  const value = {
    currentUser,
    signup,
    logout,
    login,
    resetPassword,
    updateEmail,
    updatePassword,
    signInGoogle,
    signInFacebook
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
