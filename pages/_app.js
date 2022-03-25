
import "../styles/globals.css";
import React from 'react'
import { useDispatch } from "react-redux";
import { wrapper } from "../src/Redux/Store";
import { setBreakPoint } from "../src/Utils/Functions";
import { useEffect, useMemo } from "react";
import { ChangeBreakPoint } from "../src/Redux/Actions/AppActions";
import CssBaseline from "@material-ui/core/CssBaseline"
import createTheme from "../src/utils/theme"
import { create } from "jss"
import rtl from "jss-rtl"
import { StylesProvider, jssPreset } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/core/styles"
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

function MyApp(props) {
  const { Component, pageProps } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    if (typeof window !== undefined) {
      window.addEventListener('resize', () => {
        let breakpoint = setBreakPoint();
        dispatch(ChangeBreakPoint(breakpoint));
      })
    }
  }, []);



  const jss = create({
    plugins: [...jssPreset().plugins, rtl()],
  })
  const appState = useSelector(state => state.App);
  const direction = appState.Language?.direction === undefined ? 'rtl' : appState.Language?.direction;
  const themeMode = appState.ThemeMode === undefined ? 'Dark' : appState.ThemeMode;

  const theme = useMemo(() => createTheme(direction, themeMode), [direction, themeMode])
  return (
    <React.Fragment>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default wrapper.withRedux(MyApp);