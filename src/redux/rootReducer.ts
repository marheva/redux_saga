import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import alertReducer from "./reducers/alertReducer";
import userReducer from "./reducers/userReducer";

export type AppState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  cartReducer: cartReducer,
  alertReducer: alertReducer,
  userReducer: userReducer,
});
