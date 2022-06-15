import { combineReducers } from "redux";
import { operationsReducer } from "./todoapp/reducers/operations";

export const rootReducer = combineReducers({
    operationsReducer,
    // more reducers can be added here
})