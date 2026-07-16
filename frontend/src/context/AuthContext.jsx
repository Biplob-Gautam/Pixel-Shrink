import { createContext, useContext, useEffect, useState } from "react";

import {
  loginUser,
  logoutUser,
  registerUser,
  getCurrentUser,
} from "../services/auth.service";

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
      const response = await getCurrentUser();

      setUser(response.data);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    const response = await loginUser(credentials);

    setUser(response.data);

    return response;
  };

  const register = async (userData) => {
    const response = await registerUser(userData);

    return response;
  };

  const logout = async () => {
    await logoutUser();

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
