import React from "react";
import MainRouter from "./MainRouter/MainRouter";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";
import yellow from "@material-ui/core/colors/yellow";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepOrange[900],
    },
  },
  secondary: {
    main: yellow[200],
  },

  mainApp: {
    margin: "auto",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
