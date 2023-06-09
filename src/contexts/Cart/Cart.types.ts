import { Dispatch } from 'react'

// Reducer

export type ActionType = 'ADD_PRODUCT_TO_CART' | 'REMOVE_PRODUCT_FROM_CART'

export type Payload = {
  priceId?: string
  productId?: string
  productName?: string
  productPrice?: number
  productImage?: string
}

export type Action = {
  type: ActionType
  payload?: Payload
}

// Context

export type Item = {
  priceId: string
  productId: string
  productName: string
  productPrice: number
  productImage: string
}

export type CartState = {
  items: Item[]
  itemsQuantity: number
  totalPrice: number
  dispatch: Dispatch<Action>
}

// Hook

export type AddProductToCartParams = {
  priceId: string
  productId: string
  productName: string
  productPrice: number
  productImage: string
}

export type RemoveProductFromCartParams = {
  productId: string
}
