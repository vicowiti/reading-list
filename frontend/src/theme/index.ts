import { createTheme } from "@mui/material/styles";


// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#5ACCCC",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#f76434",
    },
  },
  typography: {
    fontFamily: `"Mulish", sans-serif`,
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
