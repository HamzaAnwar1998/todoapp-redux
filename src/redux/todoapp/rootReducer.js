import { operationsReducer } from "./reducers/operations";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    operationsReducer,
});