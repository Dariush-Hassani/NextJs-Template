
import "../styles/globals.css";
import { Provider, useDispatch } from "react-redux";
import { store, wrapper } from "../src/Redux/Store";
import { setBreakPoint } from "../src/Utils/Functions";
import { useEffect } from "react";
import { ChangeBreakPoint } from "../src/Redux/Actions/AppActions";


function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('resize', () => {
        let breakpoint = setBreakPoint();
        dispatch(ChangeBreakPoint(breakpoint));
      })
    }
  }, [])

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);