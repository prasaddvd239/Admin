import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";

import { AdminReducer } from "./AdminReducer";

const rootReducer = combineReducers({
  admin: AdminReducer,

  // depart : DepartRducer,
  //vechil: VechuileReucer
});

// const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
