// src/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import authUtils from '../utils/authUtils';
import apiService from '../api/apiService';
import { showToast } from '../utils/toastUtils';

// Define the type for user
interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
}

// Define the context type
interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  signup: (userData: { username: string; fullName: string; email: string; password: string }) => Promise<{ success: boolean; message?: string }>;
  logout: () => Promise<void>;
  checkAuthStatus: () => Promise<boolean>;
}

// Create the context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  setUser: () => { },
  login: async () => ({ success: false }),
  signup: async () => ({ success: false }),
  logout: async () => { },
  checkAuthStatus: async () => false,
});

// Provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Check authentication status on mount
  useEffect(() => {
    const initAuth = async () => {
      await checkAuthStatus();
      setIsLoading(false);
    };

    initAuth();
  }, []);

  // Login function
  const login = async (username: string, password: string) => {
    try {
      const response = await apiService.auth.login({ username, password });     

      if (response.success && response.data) {
        authUtils.setToken(response?.data?.token);
        authUtils.setUser(response?.data ?? {});
        setUser(response?.data ?? {});
        setIsAuthenticated(true);
        showToast.success('Login successful!');
        return { success: true };
      } else {
        showToast.error(response.error || 'Invalid credentials');
        return {
          success: false,
          message: response.error || 'Invalid credentials'
        };
      }
    } catch (error) {
      return {
        success: false,
        message: 'An unexpected error occurred'
      };
    }
  };

  // Signup function
  const signup = async (userData: { username: string; fullName: string; email: string; password: string }) => {
    try {
      const response = await apiService.auth.signup(userData);
      if (response.success && response.data) {
        showToast.success('Registration successful!');
        authUtils.setToken(response?.data?.token);
        authUtils.setUser(response?.data ?? {});
        setUser(response?.data ?? {});
        setIsAuthenticated(true);
        return { success: true };
      } else {
        showToast.error(response.error || 'Registration failed');
        return {
          success: false,
          message: response.error || 'Registration failed'
        };
      }
    } catch (error) {
      return {
        success: false,
        message: 'An unexpected error occurred'
      };
    }
  };

  // Logout function
  const logout = async () => {
    await authUtils.logout();
    setUser(null);
    setIsAuthenticated(false);
    navigate('/login');
  };

  // Check if user is authenticated
  const checkAuthStatus = async () => {
    if (!authUtils.isLoggedIn()) {
      setIsAuthenticated(false);
      setUser(null);
      return false;
    }
    const currentUser = authUtils.getUser();
    setUser(currentUser);
    setIsAuthenticated(true);
    return true;
  };

  // Create context value
  const value = {
    user,
    setUser,
    isAuthenticated,
    isLoading,
    login,
    signup,
    logout,
    checkAuthStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

export default AuthContext;