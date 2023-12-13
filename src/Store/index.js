// reducers/index.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import categoriesReducer from "./catagories/catagories.reducer";
import authReducer from "./auth/auth.reducers";
import productReducer from "./Products/product.reducer";
import { CartReducer } from "./Card/Card.reducer";
import searchReducer from "./searchState/search.reducer";
import clothesReducer from "./SearchCatagories/Clothes.reducers";
import wishlistReducer from "./wishlist/wishlist.reducer";
import reviewReducer from "./review/review.reducer";
const rootReducer = combineReducers({
  categories: categoriesReducer,
  auth: authReducer,
  product: productReducer,
  Cart: CartReducer,
  search: searchReducer,
  clothes: clothesReducer,
  wishlist: wishlistReducer,
  review: reviewReducer,
  // ... other reducers
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
