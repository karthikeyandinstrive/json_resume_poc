import { createTheme } from '@mui/material/styles';
// const primary = "#17236E";
// const secondary = "#ffff";

export const themeLight = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: 'hsl(0, 0%, 100%)',
    },
    primary: {
      main: '#17236E',
    },
    secondary: {
      main: '#0000',
      light: '#ffff',
    },
    error: {
      main: '#c32e31',
    },
  },
  spacing: 4,
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  // button: {
  //   '& .MuiButtonBase-root .MuiIconButton-root': {
  //     color: 'black',
  //   },
  // },
});

export const themeDark = createTheme({
  palette: {
    mode: 'dark',

    background: {
      default: '#0000',
    },
    fill: {
      default: '#000',
    },
    primary: {
      main: '#ffff',
    },

    secondary: {
      main: '#0000',
    },
  },
  spacing: 4,
  typography: {
    fontFamily: 'Open Sans',
    color: '#fff',
  },
});
