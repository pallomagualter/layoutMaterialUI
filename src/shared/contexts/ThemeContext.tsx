import { createContext, useCallback, useState, useContext, useMemo } from 'react';
import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';

import { DarkTheme, LightTheme } from './../themes';

interface IThemeContextData {
  themeName: 'Light mode' | 'Dark mode';
  themeIconName: 'light_mode' | 'dark_mode';
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

//para disponibilizar para toda aplicação a funcionalidade
export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState<'Light mode' | 'Dark mode'>('Light mode');
  const [themeIconName, setThemeIconName] = useState<'light_mode' | 'dark_mode'>('light_mode');

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'Light mode' ? 'Dark mode' : 'Light mode');
    setThemeIconName(oldThemeIconName => oldThemeIconName === 'light_mode' ? 'dark_mode' : 'light_mode');
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'Light mode') return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, themeIconName, toggleTheme }}>
      <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </Box>
    </ThemeContext.Provider>
  );
};