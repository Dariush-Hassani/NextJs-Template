import { initAppState, setBreakPoint } from "../../Utils/Functions";

const app = initAppState();

export default function AppReducer(state = { ThemeMode: app.theme, Language: app.Language, BreakPoint: setBreakPoint() }, action) {
  if (action.type === "app/changeLang") {
    let appState = JSON.parse(localStorage.getItem('app'));
    appState.Language = action.payload;
    localStorage.setItem('app',JSON.stringify(appState));
    return {
      ...state,
      Language: action.payload,
    };
  } else if (action.type === "app/changeTheme") {
    let appState = JSON.parse(localStorage.getItem('app'));
    appState.theme = action.payload;
    localStorage.setItem('app',JSON.stringify(appState));
    return {
      ...state,
      ThemeMode: action.payload,
    };
  }
  else if (action.type === "app/changeBreakPoint") {
    return {
      ...state,
      BreakPoint: action.payload,
    };
  }
  return state;
}