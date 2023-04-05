import { Dispatch } from 'react'

// Reducer

export type ActionType = 'ADD_PRODUCT_TO_CART'

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
  dispatch: Dispatch<Action>
}
