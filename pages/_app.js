
import "../styles/globals.css";
import React from 'react'
import { useDispatch } from "react-redux";
import { wrapper } from "../src/Redux/Store";
import { setBreakPoint } from "../src/Utils/Functions";
import { useEffect, useMemo } from "react";
import { ChangeBreakPoint } from "../src/Redux/Actions/AppActions";
import CssBaseline from "@material-ui/core/CssBaseline"
import createCustomTheme from "../src/Utils/Theme"
import { create } from "jss"
import rtl from "jss-rtl"
import { StylesProvider, jssPreset } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/core/styles"
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

function MyApp(props) {
  const { Component, pageProps } = props;
  const dispatch = useDispatch();
  const appState = useSelector(state => state.App);
  const router = useRouter();

  const direction = appState.Language?.direction === undefined ? 'rtl' : appState.Language?.direction;
  const themeMode = appState.ThemeMode === undefined ? 'Dark' : appState.ThemeMode;
  const theme = useMemo(() => createCustomTheme(direction, themeMode), [direction, themeMode]);

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    router.push(router.asPath, undefined, { locale: appState.Language.lang });

    const setBreaks = () => {
      let breakpoint = setBreakPoint();
      dispatch(ChangeBreakPoint(breakpoint));
    }
    if (typeof window !== undefined) {
      window.addEventListener('resize', setBreaks)
    }

    return (() => {
      window.removeEventListener('resize', setBreaks)
    })
  }, []);

  const jss = create({
    plugins: [...jssPreset().plugins, rtl()],
  })

  return (
    <React.Fragment>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
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