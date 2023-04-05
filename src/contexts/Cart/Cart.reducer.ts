import type { Action, ActionType, Payload, CartState } from './Cart.types'

type ActionFunctions = {
  [Key in ActionType]: (params: { state: CartState, payload?: Payload }) => CartState // eslint-disable-line
}

const actionFunctions: ActionFunctions = {
  ADD_PRODUCT_TO_CART: ({ state, payload }) => {
    if (!payload) return state

    const { priceId, productName, productPrice, productImage } = payload

    if (!priceId || !productName || !productPrice || !productImage) return state

    return state
  },
}

export const reducer = (state: CartState, action: Action) => {
  const { type, payload } = action

  const actionFunction = actionFunctions[type]

  if (!actionFunction) return state

  const newState = actionFunction({ state, payload })

  return newState
}
