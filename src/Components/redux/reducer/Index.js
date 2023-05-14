import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ErrorReducer from "./ErrorReducer";
const rootreducer=combineReducers({UserReducer,ErrorReducer})
export default rootreducer