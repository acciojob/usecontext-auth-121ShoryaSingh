import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = (checked) => {
    setIsAuthenticated(checked);
  };

  const value = {
    isAuthenticated,
    toggleAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
