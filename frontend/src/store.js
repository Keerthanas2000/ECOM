import { combineReducers, createStore } from "redux";
import currentProduct from "./reducers/currentProduct";

const rootReducer = combineReducers({
  currentProduct, 
});

const store = createStore(rootReducer);

export default store;
