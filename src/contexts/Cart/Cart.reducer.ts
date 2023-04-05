import type { Action, ActionType, Payload, CartState } from './Cart.types'

type ActionFunctions = {
  [Key in ActionType]: (params: { state: CartState, payload?: Payload }) => CartState // eslint-disable-line
}

const actionFunctions: ActionFunctions = {
  ADD_PRODUCT_TO_CART: ({ state, payload }) => {
    if (!payload) return state

    const { priceId, productId, productName, productPrice, productImage } = payload

    if (!priceId || !productId || !productName || !productPrice || !productImage) return state

    const itemIsAlreadyInTheCart = state.items.reduce((acc, item) => {
      if (item.productId === productId) return true

      return acc
    }, false)

    if (itemIsAlreadyInTheCart) return state

    const newItem = { priceId, productId, productName, productPrice, productImage }

    const newState = { ...state, items: [...state.items, newItem] }

    return newState
  },
}

export const reducer = (state: CartState, action: Action) => {
  const { type, payload } = action

  const actionFunction = actionFunctions[type]

  if (!actionFunction) return state

  const newState = actionFunction({ state, payload })

  return newState
}
