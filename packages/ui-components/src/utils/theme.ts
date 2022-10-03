import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#5F2EEA',
      dark: "#2A00A2",
      light: "#BCA4FF"
    },
    secondary: {
      main: '#1CC8EE',
      dark: "#0096B7",
      light: "#82E9FF"
    },
    error:{
        main: "#ED2E7E",
        dark: "#C30052",
        light: "#FF84B7"
    },
    success:{
        main: "#00BA88",
        dark: "#00966D",
        light: "#34EAB9"
    },
    warning:{
        main: "#F4B740",
        dark: "#946200",
        light: "#FFD789"
    },
    
  },
});
