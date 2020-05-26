import { combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import createStore from "./createStore";

import defaultReducer from "./defaultState";
import chat from "./chat";

const allReducer = combineReducers({
  defaultReducer,
  chat,
});

export default createStore(allReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
