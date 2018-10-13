import cartReducer from "./cartReducer";
import timeReducer from "./timeReducer";
import { combineReducers } from "redux";

export default combineReducers({cart: cartReducer, time: timeReducer});