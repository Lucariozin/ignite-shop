import { useCallback, useContext } from 'react'

import { CartContext } from './Cart.context'

import type { AddProductToCartParams, RemoveProductFromCartParams } from './Cart.types'

export const useCart = () => {
  const { dispatch, ...state } = useContext(CartContext)

  const addProductToCart = useCallback(
    ({ priceId, productId, productName, productPrice, productImage }: AddProductToCartParams) => {
      dispatch({
        type: 'ADD_PRODUCT_TO_CART',
        payload: { priceId, productId, productName, productPrice, productImage },
      })
    },
    [dispatch],
  )

  const removeProductFromCart = useCallback(
    ({ productId }: RemoveProductFromCartParams) => {
      dispatch({
        type: 'REMOVE_PRODUCT_FROM_CART',
        payload: { productId },
      })
    },
    [dispatch],
  )

  return { ...state, addProductToCart, removeProductFromCart }
}
