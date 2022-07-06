const actions = {
  ADD_CART: 'ADD_CART',
  REMOVE_CART: 'REMOVE_CART',
  EMPTY_CART: 'EMPTY_CART',
  addCart: (payload) => ({
    type: actions.ADD_CART,
    payload,
  }),
  removeCart: (id) => ({
    type: actions.REMOVE_CART,
    id,
  }),
  emptyCart: () => ({
    type: actions.EMPTY_CART,
  })
}

export default actions;