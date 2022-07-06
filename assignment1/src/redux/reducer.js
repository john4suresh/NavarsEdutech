import actions from "./actions";

const initialState = {
  cart: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.ADD_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }
    case actions.REMOVE_CART: {
      const newCart = state.cart.filter(ele => ele.id !== action.id);
      return {
        ...state,
        cart: newCart,
      }
    }
    case actions.EMPTY_CART: {
      return {
        ...state,
        cart: [],
      }
    }
    default:
      return {
        ...state
      }
  }
}