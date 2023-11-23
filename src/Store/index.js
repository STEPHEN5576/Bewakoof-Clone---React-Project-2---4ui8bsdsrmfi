// reducers/index.js
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import categoriesReducer from "./catagories/catagories.reducer";
import authReducer from "./auth/auth.reducers";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  auth: authReducer,

  // ... other reducers
});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));
