
import { combineReducers, createStore } from 'redux';
import cartReducer from "./reducer";

export const basketApp = combineReducers({
  cart: cartReducer,
});


const store = createStore(basketApp);


export default store;