import { combineReducers } from "redux";
import usersReducer from "../features/users/users-slice";
import userReducer from "../features/user/user-slice";

export default combineReducers({
  users: usersReducer,
  user: userReducer,
});
