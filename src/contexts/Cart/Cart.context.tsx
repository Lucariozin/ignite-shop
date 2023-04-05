'use client'

import React, { ReactNode, createContext, useCallback, useContext, useReducer } from 'react'

import { reducer } from './Cart.reducer'

import type { CartState } from './Cart.types'

const initialState: CartState = {
  items: [],
  dispatch: () => {},
}

const CartContext = createContext(initialState)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = { ...state, dispatch }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const { dispatch, ...state } = useContext(CartContext)

  const addProductToCart = useCallback(() => {}, [])

  return { ...state, addProductToCart }
}
