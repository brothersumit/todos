import { combineReducers } from "redux";
import taskReducers from "./taskReducers";

const rootReducer = combineReducers({
    tasks: taskReducers
})

export default rootReducer;