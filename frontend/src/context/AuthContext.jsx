import { createContext, useContext, useEffect, useState } from "react";

import {
  loginUser as loginUserService,
  logoutUser as logoutUserService,
  registerUser as registerUserService,
  getCurrentUser as getCurrentUserService,
} from "../services/auth.services.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Runs once when app starts
  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    try {
      const response = await getCurrentUserService();

      setUser(response.data);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    const response = await loginUserService(credentials);

    setUser(response.data);

    return response;
  };

  const registerUser = async (userData) => {
    const response = await registerUserService(userData);

    return response;
  };

  const logout = async () => {
    try {
      await logoutUserService();
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        registerUser,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
