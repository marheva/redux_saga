import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { rootReducer } from "../rootReducer";

const middleware = [ReduxThunk];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
