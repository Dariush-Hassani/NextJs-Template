import { combineReducers } from "redux";
import AppReducer from "./Reducers/AppReducer";
import AuthReducer from "./Reducers/AuthReducer";

const RootReducer = combineReducers({
  App: AppReducer,
  Auth: AuthReducer
});

export default RootReducer;