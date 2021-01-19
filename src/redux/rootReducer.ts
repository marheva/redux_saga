import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import alertReducer from "./reducers/alertReducer";

export type AppState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  cartReducer: cartReducer,
  alertReducer: alertReducer,
});
