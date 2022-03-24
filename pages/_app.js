
import { Provider, useDispatch } from "react-redux";
import { store, wrapper } from "../src/Redux/Store";
import { setBreakPoint } from "../src/Utils/Functions";
import { useEffect, useMemo } from "react";
import { ChangeBreakPoint } from "../src/Redux/Actions/AppActions";
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@mui/styles';
import createEmotionCache from "../src/Utils/CreateEmotionCache";
import theme from "../src/Utils/Theme";
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const dispatch = useDispatch();
  const jss = create({
    plugins: [...jssPreset().plugins, rtl()],
  });
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


  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </StylesProvider>
      </CacheProvider>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);
