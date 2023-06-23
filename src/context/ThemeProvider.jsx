import React from 'react';
// import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider } from '@mui/material/styles';
import { themeLight } from '../themes/ThemeConfig';
export const ThemeContext = React.createContext({});
export const ColorModeContext = React.createContext({});
const DefaultThemeProvider = ({ children }) => {
  // const prefersDarkMode = "dark";
  const [mode, setMode] = React.useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );
  // const colorMode = React.useMemo(
  //   () => ({
  //     toggleColorMode: () => {
  //       setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  //     },
  //   }),
  //   []
  // );
  const toggleColorMode = (value) => {
    setMode(value ? 'dark' : 'light');
  };

  const theme2 = React.useMemo(
    () => (mode === 'light' ? themeLight : themeLight),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={toggleColorMode}>
      <ThemeProvider theme={theme2}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default DefaultThemeProvider;
