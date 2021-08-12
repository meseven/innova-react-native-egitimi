import React, {createContext, useState, useContext} from 'react';

const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState('dark');

  const values = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
