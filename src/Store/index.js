// reducers/index.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import categoriesReducer from "./catagories/catagories.reducer";
import authReducer from "./auth/auth.reducers";
import productReducer from "./Products/product.reducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  auth: authReducer,
  product: productReducer,
  // ... other reducers
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
