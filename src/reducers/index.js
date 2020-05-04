import { combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import createStore from "./createStore";

import defaultReducer from "./defaultState";

const allReducer = combineReducers({
  defaultReducer,
});

export default createStore(allReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
