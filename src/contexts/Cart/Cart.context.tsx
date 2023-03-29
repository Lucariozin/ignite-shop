'use client'

import React, { ReactNode, createContext } from 'react'

type Item = {
  priceId: string
}

type CartState = {
  items: Item[]
}

const initialState: CartState = {
  items: [],
}

const CartContext = createContext(initialState)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  return <CartContext.Provider value={initialState}>{children}</CartContext.Provider>
}
