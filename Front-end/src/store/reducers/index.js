import { combineReducers } from "redux";
import productListReducer from "./reducers";
import productReducersUi from "./reducersUi";
import products from "./products";
import filters from "./filters";
const entitiesReducers = combineReducers({
  productListReducer,
});

const uiReducers = combineReducers({
  productReducersUi,
});

export default combineReducers({
  entities: entitiesReducers,
  ui: uiReducers,
  data: products,
  filters: filters,
});
