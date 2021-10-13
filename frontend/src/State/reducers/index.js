import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  user: userReducer,
  task: taskReducer
});

export default rootReducer;