import React from 'react';

import { ThemeProvider, createTheme, StyledEngineProvider, } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';

// import getDarkTheme from "./theme/dark";
import getLightTheme from "./theme/light";



function App() {
  let selectTheme = getLightTheme();
  const theme = createTheme(selectTheme);
  return (
    <>
       <div className="mainContainer">
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            < Header />
            < Home />
            < Footer />
          </ThemeProvider>
        </StyledEngineProvider>
      </div>
    </>
  );
}

export default App;


