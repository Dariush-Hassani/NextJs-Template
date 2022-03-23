import { initAppState, setBreakPoint } from "../../Utils/Functions";

const app = initAppState();

export default function AppReducer(state = { ThemeMode: app.theme, Language: app.Language, BreakPoint: setBreakPoint() }, action) {
  if (action.type === "app/changeLang") {
    return {
      ...state,
      tasks: [action.payload, ...state.tasks],
    };
  } else if (action.type === "app/changeTheme") {
    return {
      ...state,
      tasks: [...newTasks],
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