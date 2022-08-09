import { combineReducers } from "redux";
import { registerAction, loginActions } from "../actions/RegisterActions";
import loginReducer from "./loginReducers";

const rootReducer = combineReducers({
    loginReducer,
    registerAction,
    loginActions,
})


export default rootReducer;