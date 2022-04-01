import { combineReducers } from "redux";
import AppReducer from "./Reducers/AppReducer";
import AuthReducer from "./Reducers/AuthReducer";
import ClientSideSampleReudcer from "./Reducers/ClientSideSampleReducers";

const RootReducer = combineReducers({
  App: AppReducer,
  Auth: AuthReducer,
  ClientSideSample: ClientSideSampleReudcer
});

export default RootReducer;