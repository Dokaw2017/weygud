import React, { useContext, useState, useEffect } from "react";
import { db_auth } from "../api/Db";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  //const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return db_auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return db_auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return db_auth.signOut;
  };

  const resetPassword = (email) => {
    return db_auth.sendPasswordResetEmail(email);
  };

  useEffect(() => {
    const unsubscribe = db_auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      //setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, login, signup, logout, resetPassword };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
