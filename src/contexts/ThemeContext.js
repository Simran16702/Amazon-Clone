import React, { createContext, useContext, useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material'; 


const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false); 
    }, 2000);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, loading }}>
      {loading ? (
        <div className="loading-overlay">
          <CircularProgress /> 
        </div>
      ) : (
        children
      )}
    </ThemeContext.Provider>
  );
};


export const useTheme = () => {
  return useContext(ThemeContext);
};
