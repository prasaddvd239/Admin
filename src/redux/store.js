import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";

import { CustomerReducer } from "./CustomerReducer";
import { PolicyReducer } from "./PolicyReducer";
import { AdminReducer } from "./AdminReducer";

const rootReducer = combineReducers({
  admin: AdminReducer,
  customer: CustomerReducer,
  policy: PolicyReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
