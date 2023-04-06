'use client'

import React, { ReactNode, createContext, useCallback, useContext, useReducer } from 'react'

import { reducer } from './Cart.reducer'

import type { CartState } from './Cart.types'

const initialState: CartState = {
  items: [],
  itemsQuantity: 0,
  totalPrice: 0,
  dispatch: () => {},
}

const CartContext = createContext(initialState)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const itemsQuantity = state.items.length
  const totalPrice = state.items.reduce((acc, item) => acc + item.productPrice, 0)

  const value = { ...state, itemsQuantity, totalPrice, dispatch }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

type AddProductToCartParams = {
  priceId: string
  productId: string
  productName: string
  productPrice: number
  productImage: string
}

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

  return { ...state, addProductToCart }
}
