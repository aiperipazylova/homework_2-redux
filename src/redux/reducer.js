import { combineReducers } from "redux";
import titleReducer from "./titleReducer";
import usersReducer from "./usersReducer";
import usersA from "./usersA"; 

export const rootReducer = combineReducers({
        titleReducer,
        usersReducer,
        usersA

})
