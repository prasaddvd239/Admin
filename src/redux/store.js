import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";

import { CustomerReducer } from "./CustomerReducer";
import { PolicyReducer } from "./PolicyReducer";

const rootReducer = combineReducers({
  customer: CustomerReducer,
  policy: PolicyReducer,

  // depart : DepartRducer,
  //vechil: VechuileReucer
});

// const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
