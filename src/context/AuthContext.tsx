import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  user: {
    email: string;
    name: string;
    role: string;
    joinDate: string;
    avatar?: string;
  } | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


const DUMMY_CREDENTIALS = {
  email: 'admin@nexusedu.com',
  password: 'admin123'
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<{
    email: string;
    name: string;
    role: string;
    joinDate: string;
    avatar?: string;
  } | null>(null);


  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    const storedUser = localStorage.getItem('user');

    if (storedAuth === 'true' && storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {

    await new Promise(resolve => setTimeout(resolve, 500));


    if (email === DUMMY_CREDENTIALS.email && password === DUMMY_CREDENTIALS.password) {
      const userData = {
        email,
        name: 'Admin User',
        role: 'System Administrator',
        joinDate: 'January 2024'
      };
      setIsAuthenticated(true);
      setUser(userData);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }

    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

