import { combineReducers } from "redux";
import authReducer from "./authReducers";
import { loadUserReducer } from "./loadUserReducers";
export const reducers = combineReducers({
  authReducer,
  user:loadUserReducer,
});